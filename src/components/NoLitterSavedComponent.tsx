import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

const NoLitterSavedComponent : React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Vous n'avez pas encore créé de portée.</Text>
        <Button title={'Créer une portée'} onPress={() => {}}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 20,
    }
});

export default NoLitterSavedComponent;
