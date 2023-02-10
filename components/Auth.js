import React, { useState } from "react";
import { Button, TextInput, StyleSheet } from "react-native";

function Auth(props) {

    const [identifiant, setIdentifiant] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    async function checkauth(){
        const response = await fetch('https://bbrice.alwaysdata.net/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(
                {
                    "email": identifiant,
                    "password": password
                }
            )
        });
        if(response.status == 200){
            const tokenData = await response.json();   
            props.navigation.navigate("Profil");
        }else{
            setErrorMsg("Mauvais couple identifiant / Mot de passe");
        }
    }

    function redirectToFirebase(){
        props.navigation.navigate("Registration");
    }

    function redirectToFirebaseConnexion(){
        props.navigation.navigate("Login");
    }

    return (
        <>
            <TextInput style={styles.input} onChangeText={setIdentifiant} value={identifiant} placeholder="Identifiant" />
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={setPassword} value={password} placeholder="Mot de passe" />
            <Button title="identification" onPress={checkauth} />
            <TextInput value={errorMsg} />

            <Button title="Autre inscription" onPress={redirectToFirebase} />
            <Button title="Autre Connexion" onPress={redirectToFirebaseConnexion} />
        </>
    )

}

const styles = StyleSheet.create({
    input:{
        borderColor:'#000',
        margin:2,
        backgroundColor:'#fff'
    }
});

export default Auth;