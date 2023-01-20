import React from "react";
import {TypedNavigator} from "@react-navigation/native";
import TestComponent from "../TestComponent";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
// @ts-ignore - Erreur même si reconnue par le compilateur
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore - Erreur même si reconnue par le compilateur
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab : TypedNavigator<any, any, any, any, any> = createBottomTabNavigator();

function HomepageNavigator() : JSX.Element {
    // Sur Android :
    // Add the following code to the body of MainActivity class:
    //
    //   @Override
    //         protected void onCreate(Bundle savedInstanceState) {
    //         super.onCreate(null);
    //     }
    // and make sure to add the following import statement at the top of this file below your package statement:
    // import android.os.Bundle;

    return(
        <Tab.Navigator initialRouteName={'Accueil'}>
            <Tab.Screen name={'Accueil'} component={HomeScreen} options={{ title: 'Catmate',
                tabBarLabel:'Home',
                tabBarIcon:() => (
                    <Ionicons name="ios-home-sharp" size={28}/>
                ) }}/>
            <Tab.Screen name={'Paramètres'} component={TestComponent} options={{ title: 'Catmate',
                tabBarLabel:'Paramètres',
                tabBarIcon:() => (
                    <Ionicons name="settings-sharp" size={28}/>
                ) }}/>
        </Tab.Navigator>
    )

}

export default HomepageNavigator;
