import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {Dimensions} from 'react-native';

const HomeScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <ScrollView style={{flex: 1}}>
            <Image style={{width: windowWidth, resizeMode: 'contain'}} source={require('../assets/catmate-long.png')}  />
        </ScrollView>
    )

}
export default HomeScreen;
