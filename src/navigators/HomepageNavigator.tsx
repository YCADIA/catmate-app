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
            <Tab.Screen name={'Home'} component={HomeScreen} options={{ title: 'Catmate',
                tabBarLabel:'Home',
                tabBarIcon:() => (
                    <Ionicons name="ios-home-sharp" size={26    }/>
                ) }}/>
            <Tab.Screen name={'Litters'} component={HomeScreen} options={{ title: 'Mes Portées',
                tabBarLabel:'Portées',
                tabBarIcon:() => (
                    <Ionicons name="file-tray-sharp" size={26}/>
                ) }}/>
            <Tab.Screen name={'Stats'} component={HomeScreen} options={{ title: 'Statistiques',
                tabBarLabel:'Statistiques',
                tabBarIcon:() => (
                    <Ionicons name="ios-analytics-sharp" size={26}/>
                ) }}/>
            <Tab.Screen name={'Profile'} component={TestComponent} options={{ title: 'Profil',
                tabBarLabel:'Profil',
                tabBarIcon:() => (
                    <Ionicons name="ios-person-circle-sharp" size={26}/>
                ) }}/>
        </Tab.Navigator>
    )

}

export default HomepageNavigator;
