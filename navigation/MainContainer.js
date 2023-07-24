import * as React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {StyleSheet, View} from 'react-native'
import Home from './Screens/Home'
import Dashboard from './Screens/Dashboard'
import Quiz from './Screens/Quiz'
import Settings from './Screens/Settings'
import Congrats from './Screens/Congrats'
import StackNavigator from './StackNavigator'

const Homename = "Home";
const Dashboardname = "Dashboard";
const Quizname = "Quiz";
const Settingsname = "Settings";
const Congratsname = "Congrats";

const Tab = createBottomTabNavigator()
export default function MainContainer(){
return(
   

    
   <NavigationContainer independent={true}>
    <Tab.Navigator
    tabBarOptions={{
        showLabel: false,
    }}
    
    initiaRouteName={Homename}
    screenOptions={({route})=>({
        headerShown:false,
        tabBarStyle: [
            {
                backgroundColor:"#2E2D2D",
                position: "absolute",
                bottom: 12,
                right: 12,
                left: 12,
                borderRadius: 20,
                elevation:0,
                height:70,
                
            },
            null
          ],
        tabBarIcon: ({focused, color, size, style })=>{            
            let iconName;
            let rn=route.name;
            if(rn === Homename){
                iconName = focused ? 'home' : 'home-outline';
            } else if( rn === Dashboardname) {
                iconName = focused ? 'analytics' : 'analytics-outline';
            } else if( rn === Settingsname) {
                iconName = focused ? 'settings' : 'settings-outline';
            } else if(rn === "StackNavigator") {
                iconName = focused ? 'list' : 'list-outline'
            }
            return <Ionicons name={iconName} size={size} color={focused ? "white": "#737272"} />
        }
    })

    }
    >
        <Tab.Screen name={Homename} component={Home} />
        <Tab.Screen name={Dashboardname} component={Dashboard} />
        <Tab.Screen name="StackNavigator" component={StackNavigator} />
        <Tab.Screen name={Settingsname} component={Settings} />

    </Tab.Navigator>
       
   </NavigationContainer>
)
}
