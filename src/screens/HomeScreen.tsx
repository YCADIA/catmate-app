import React, {useState} from "react";
import {Dimensions, ScrollView, Text} from "react-native";

const HomeScreen : React.FC = () => {
    const userName : [undefined, React.Dispatch<React.SetStateAction<any>>] = useState(undefined);
    let welcomeMessage: string;
    const windowWidth : number = Dimensions.get('window').width;
    const windowHeight : number = Dimensions.get('window').height;

    if (userName[0] === undefined) {
        welcomeMessage = 'Bienvenue sur Catmate !';
    } else {
        welcomeMessage = `Bienvenue ${userName[0]}`;
    }
    return (
        <ScrollView style={{flex: 1}}>
            <Text> {welcomeMessage} </Text>
        </ScrollView>
    )

}
export default HomeScreen;
