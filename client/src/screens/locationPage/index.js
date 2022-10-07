import * as React from "react";
import { ScrollView, Text, View, Image, TextInput } from "react-native";
import dashboardStyles from "../dashboardPage/styles";

const LocationPage = ({ navigation }) => {
    return (
        <View>
            <Text 
                onPress={() => navigation.navigate('Dashboard')}
                style={dashboardStyles.container}>Location Screen</Text>
        </View>
    )
}

export default LocationPage;