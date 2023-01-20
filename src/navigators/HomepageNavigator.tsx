import React from "react";
import {TypedNavigator} from "@react-navigation/native";
import TestComponent from "../TestComponent";
import {SafeAreaView, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import testComponent from "../TestComponent";
// Sur Android :
// Add the following code to the body of MainActivity class:
//
//   @Override
//         protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(null);
//     }
// and make sure to add the following import statement at the top of this file below your package statement:
// import android.os.Bundle;

const Tab : TypedNavigator<any, any, any, any, any> = createBottomTabNavigator();

function HomepageNavigator() : JSX.Element {

    return(

        <Tab.Navigator initialRouteName={'Accueil'}>
            <Tab.Screen name={'Accueil'} component={TestComponent}/>
            <Tab.Screen name={'Paramètres'} component={testComponent}/>
        </Tab.Navigator>
    )
}

export default HomepageNavigator;
