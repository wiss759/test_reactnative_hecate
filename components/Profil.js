import React from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../App";

function Profil() {

    function logout() {

    }

    return (
        <View>
            <Text>PROFIL</Text>
            <Button title="Deconnexion" onPress={logout}></Button>
        </View>
    )

}


export default Profil;