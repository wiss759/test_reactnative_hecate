import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './components/Auth';
import Cameraview from './components/Cameraview';
import LoginScreen from './components/LoginScreen';
import Imagepickerview from './components/Imagepickerview';
import Listaddress from './components/Listaddress';
import Map from './components/Map';
import Profil from './components/Profil';
import RegistrationScreen from './components/RegistrationScreen';

const Tab = createBottomTabNavigator();
const AdminStack = createNativeStackNavigator();

function AdminStackScreen() {

  return (
    <AdminStack.Navigator screenOptions={{ headerShown: false }}>
      <AdminStack.Screen name="AuthHome" component={Auth} />
      <AdminStack.Screen name="Profil" component={Profil} />
      <AdminStack.Screen name="Login" component={LoginScreen} />
      <AdminStack.Screen name="Registration" component={RegistrationScreen} />
    </AdminStack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Adresses" component={Listaddress} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="Carte" component={Map} />
          <Tab.Screen name="Camera" component={Cameraview} />
          <Tab.Screen name="Imagepicker" component={Imagepickerview} />
          <Tab.Screen name="Auth" component={AdminStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5
  },
  header: {
    paddingTop: 60,
    height: 80,
    margin: 5,
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#000'
  }
});
