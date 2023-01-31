import React, {useState} from "react";
import {Animated, Dimensions, ScrollView, StyleSheet, Text, Button, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import View = Animated.View;
import NoLitterSavedComponent from "../components/NoLitterSavedComponent";
const HomeScreen : React.FC = () => {
    const [welcomeMessage, setWelcomeMessage] : any = useState('');
    const [username, setUsername] : any = useState(null);
    const [handleUsernameChange, setHandleUsernameChange] : any = useState(null);

    const[littersNumber, setLittersNumber] : any = useState(0);

    // TODO: Refactoriser dans un .TS
    AsyncStorage.getItem('userName').then((value) => {
        if (value == null) {
            setWelcomeMessage('Bienvenue sur Catmate !');
        } else {
            setWelcomeMessage(`Bienvenue ${value}`);
            setUsername(value);
        }
    });
    const onPressHandleUsernameChange = () => {
        AsyncStorage.setItem('userName', handleUsernameChange).then(() => {
                setUsername(handleUsernameChange);
                setWelcomeMessage(`Bienvenue ${handleUsernameChange}`);
            })
    };

    return (
        <ScrollView>
            <Text style={styles.title}> {welcomeMessage} </Text>
            {
                // Si l'utilisateur n'a pas encore renseigné son nom
                (username == null) ?
                    // TODO : Factoriser dans un composant
                    <View style={styles.container}>
                        <TextInput
                            onChangeText={setHandleUsernameChange} placeholder={'Enter un nom'} value={username}
                        />
                        <Button
                            title="Valider"
                            onPress={onPressHandleUsernameChange}
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>

                        :
                        // Si l'utilisateur a déjà renseigné son nom
                        // Si acune portée n'a été enregistrée
                        (littersNumber == 0) ?
                            <NoLitterSavedComponent/>
                        :
                        // Si au moins une portée a été enregistrée
                            <Text>Vos portées : </Text>

            }
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 26,
    },
    container: {
        width: Dimensions.get('window').width * 0.9,
        alignSelf: 'center',
    }
});
export default HomeScreen;
