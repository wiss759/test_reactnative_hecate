import React from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../App";

function Profil() {

    const value = React.useContext(AuthContext);  

    function logout() {

    }

    return (
        <View>
            <Text>PROFIL</Text>
            <Text>{value.userLog}</Text>
            <Button title="Deconnexion" onPress={logout}></Button>
        </View>
    )

}


export default Profil;