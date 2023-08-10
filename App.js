import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import './styles'
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import Paid from './pages/Paid';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pricing" component={Pricing} />
        <Stack.Screen name="Paid" component={Paid} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

