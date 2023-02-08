import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Cameraview from './components/Cameraview';
import Imagepickerview from './components/Imagepickerview';
import Listaddress from './components/Listaddress';
import Listother from './components/Listother';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Adresses" component={Listaddress} options={{ tabBarBadge:3 }} />
        <Tab.Screen name="Parametres" component={Listother} />
        <Tab.Screen name="Camera" component={Cameraview} />
        <Tab.Screen name="Imagepicker" component={Imagepickerview} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:5
  },
  header:{
    paddingTop:60,
    height:80,
    margin:5,
    backgroundColor:'#fff',
    textAlign:'center',
    color:'#000'
  }
});
