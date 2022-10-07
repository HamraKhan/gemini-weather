import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import navbarStyles from './styles';

//Screens
import Dashboard from "../../screens/dashboardPage";
import LocationPage from "../../screens/locationPage";
import ArticlesAndNewsPage from "../../screens/article&NewsPage";
import navTheme from "./themes";

//Screen names
const dashboardName = 'Dashboard';
const locationName = 'Location';
const articlesAndNewsName = 'Articles';

const Tab = createBottomTabNavigator();

const Navbar = () => {
    return (
            <NavigationContainer theme={navTheme}>
                <Tab.Navigator
                    initialRouteName={dashboardName}
                    screenOptions={({route}) => ({
                        title: '',
                        headerShown: false,
                        tabBarActiveTintColor: navbarStyles.activeColor.color,
                        tabBarInactiveTintColor: navbarStyles.inactiveColor.color,
                        tabBarStyle: [
                            {
                            "display": "flex",
                            },
                            null
                        ],
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            let routeName = route.name;

                            if(routeName === dashboardName) {
                                iconName = focused ? 'location' : 'location-outline';
                            } else if(routeName === locationName) {
                                iconName = focused ? 'add-circle' : 'add-circle-outline';
                            } else if(routeName === articlesAndNewsName) {
                                iconName = focused ? 'reader' : 'reader-outline';
                            }   

                            return <Ionicons testID={iconName} name={iconName} size={size} color={color}/>
                        }
                    })}>
                    
                    <Tab.Screen testID='dashboard-tab' name={dashboardName} component={Dashboard}/>
                    <Tab.Screen testID='location-tab' name={locationName} component={LocationPage}/>
                    <Tab.Screen testID='article-tab' name={articlesAndNewsName} component={ArticlesAndNewsPage} />
                </Tab.Navigator>
            </NavigationContainer>  
    );
}

export default Navbar;