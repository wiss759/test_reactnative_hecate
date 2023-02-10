import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../assets/style';
import { initializeApp } from 'firebase/app';

function LoginScreen({navigation}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {

        if (email == '') {
            alert("Merci de renseigner un email")
            return
        }
        if (password == '') {
            alert("Merci de renseigner un mot de passe")
            return
        }

        const firebaseConfig = {
            apiKey: 'AIzaSyAdbGanftq3AGTalKAS1os2Nqa8kgdT28w',
            authDomain: 'hecate-92720.firebaseapp.com',
            databaseURL: 'https://hecate-92720-default-rtdb.europe-west1.firebasedatabase.app',
            projectId: 'hecate-92720',
            storageBucket: 'hecate-92720.appspot.com',
            messagingSenderId: 'sender-id',
            appId: '1:173440614550:android:d8152af52c78ac4f1082b7',
            measurementId: 'G-measurement-id',
        };
    
        const firebaseApp = initializeApp(firebaseConfig);
        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            if(user.stsTokenManager.accessToken != null){
                navigation.navigate('Profil')
            }else{
                setErrorMsg('Mauvais login / mot de passe')
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg('Mauvais login / mot de passe')
        });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text>{errorMsg}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default LoginScreen;