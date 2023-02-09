import { useEffect, useState } from 'react';
import {FlatList, LogBox, StyleSheet, Text} from 'react-native';

function Listaddress() {

    const [dataValue, setDataValue] = useState([]);
    const [token, setToken] = useState("TOKEN");

    const callToken = async() => {
        try {
            
            const response = await fetch('https://bbrice.alwaysdata.net/auth', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(
                    {
                        "email": "benoitbrice@gmail.com",
                        "password": "123456"
                    }
                )
            });
            const tokenData = await response.json();    
            setToken(tokenData.token);
            
            callApi();

        } catch (error) {
            
        }
    }

    const callApi = async() => {
        try {
            const response = await fetch('https://bbrice.alwaysdata.net/api/addresses', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const dataData = await response.json();    
            console.log('');       
            setDataValue(dataData);
        } catch (error) {
            
        }
    }

    useEffect(function(){
        callToken();
    }, []);

    return (
        <>
            <Text style={styles.bloc}>BLOC HAUT</Text>
            <FlatList data={dataValue} renderItem={({item}) => <Text>{item.address} {item.postal_code} {item.city}</Text>}>
            </FlatList>
        </>
    );
}

const styles = StyleSheet.create({
    bloc:{
      flex:0.5,
      margin:5,
      borderWidth: 1,
      backgroundColor:'#ccc',
      textAlign:'center',
      color:'#fff'
    }
});

export default Listaddress;