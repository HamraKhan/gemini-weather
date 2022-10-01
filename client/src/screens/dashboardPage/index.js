import * as React from "react";
import { Text, ImageBackground} from "react-native";
import dashboardStyles from './styles';

const image =  require('../../../assets/images/london.jpg');

const Dashboard = () => {
    return (
        <ImageBackground alt='view-of-london' source={image} style={dashboardStyles.image}></ImageBackground>
    )
}

export default Dashboard;