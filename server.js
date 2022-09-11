const express = require('express');
const xmlParser = require('xml2json');
const RSSParser = require("rss-parser");
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const app = express();
const port = 3000
app.get('/articles', async (req, res) => {

    const RSS_URL = `https://www.desmog.com/feed/`;

    const feed = await new RSSParser().parseURL(RSS_URL);

    const result = await Promise.all(
        feed.items.map(async item => {

            const imgTypes = await getMainImageSet(item.link);

            return {
                title: item.title,
                summary: item.contentSnippet,
                imgTypes: imgTypes,
                link: item.link,
                author: item.creator,
                publishDate: item.pubDate
            }
      }));
    res.send(result)
})


const getMainImageSet = async (url) => {
    return await fetch(url).then(response => {
        return response.text()
    }).then(data => {
      const dom = new JSDOM(data);
      const result = dom.window.document.querySelectorAll("source")[0].srcset.replace(/\s(\d*?)\w,/g, ',').replace(/\s(\d*?)w/g, '').split(',')
      return result.map(src => src.replace(' ', ''));
    }).catch(err => {
      console.log(err);
    });
}

app.listen(port, function () {

    console.log(`Example app listening on port ${port}`)

});