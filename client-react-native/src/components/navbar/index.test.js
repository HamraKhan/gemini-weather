import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '.';


describe('navbar', () => {
    test('should render successfully', () => {
        const screen = renderer.create(<Navbar />).toJSON();
        expect(screen.children.length).toBe(2);
    });

    //testing the navbar icons
    test.only('should render icons successfully', () => {
        const screen = renderer.create(<Navbar />).toJSON();
        //you need to check if the button gets shown in the Navbar component.
        expect(screen).toMatchSnapshot();
    });

    test('icons should be clickable', () => {
        const screen = renderer.create(<Navbar />).toJSON();
        //you need to click on the icons (dashboard, location and article)
        expect(screen).t
    });

    //navbar should navigate to three pages
    test('renders dashboard page', () => {
        const screen = renderer.create(<Navbar />).toJSON();
        //you need to click on the button and check if the dashboard content gets showned
        expect(screen.children.length).toBe(1);
    });

    test('renders location page successfully', () => {
        const screen = renderer.create(<Navbar />).toJSON();
        //you need to click on the button and check if the content of the page changes or not
        expect(screen.children.length).toBe(2);
    });

    test('renders article page successfully', () => {
        const screen = renderer.create(<Navbar />).toJSON();
        //you need to click on the button and check if the content of the page changes or not
        expect(screen.children.length).toBe(2);
    });
});