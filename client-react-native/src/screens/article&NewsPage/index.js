import * as React from "react";
import { ScrollView, Text, View, Image, TextInput } from "react-native";
import dashboardStyles from "../dashboardPage/styles";

const ArticlesAndNewsPage = ({ navigation }) => {
    return (
        <View>
            <Text 
                onPress={() => navigation.navigate('Dashboard')}
                style={dashboardStyles.container}>Articles And News Screen</Text>
        </View>
    )
}

export default ArticlesAndNewsPage;