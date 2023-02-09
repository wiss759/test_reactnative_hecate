import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

function Map() {

    const tokyoRegion = {
        latitude: 49.35987422726424,
        longitude: 2.393951449558854,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };


    const [valOrigin, setValOrigin] = useState("");
    const [valDestination, setValDestination] = useState("");
    const [originDest, setOriginDest] = useState("");
    const [destinationDest, setDestinationDest] = useState("");

    const origin = { latitude: 49.35902362912368, longitude: 2.393951449558854 };
    const destination = { latitude: 49.339202025664065, longitude: 2.4332619018924326 };
    const GOOGLE_MAPS_APIKEY = '';

    const mapRef = useRef();
    const mapDirection = useRef();

    const [latitude, setLatitude] = useState(49.35987422726424)
    const [longitude, setLongitude] = useState(2.395895641054355);
    const [regionData, setRegionData] = useState({});
    const [errorMsg, setErrorMsg] = useState(null);

    function changeValueDestination() {
        setOriginDest(valOrigin);
        setDestinationDest(valDestination);
    }

    function initilyseDataRegion() {
        (async () => {
            console.log('ASYNC');
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log('STATUS :' + status);
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
        })
        mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
    }

    useEffect(() => {
        initilyseDataRegion();
    }, []);

    return (
        <View style={styles.container}>
            <TextInput placeholder='Adresse depart' onChangeText={setValOrigin} value={valOrigin} style={styles.blocText}></TextInput>
            <TextInput placeholder='Adresse arrivé' onChangeText={setValDestination} value={valDestination} style={styles.blocText}></TextInput>
            <Button title='Valider' onPress={changeValueDestination} style={styles.blocBtn}></Button>
            <MapView
                ref={mapRef}
                style={styles.map}
                region={{
                    latitude: Number(latitude),
                    longitude: Number(longitude),
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
                <Marker
                    coordinate={origin}
                    key={1}
                />
                <MapViewDirections
                    resetOnChange={true}
                    origin={originDest}
                    destination={destinationDest}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 0.8,
        width: '100%',
        height: '100%',
    },
    blocText: {
        flex: 0.1,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        margin: 2
    },
    blocBtn: {
        flex: 0.1,
    }
});

export default Map;