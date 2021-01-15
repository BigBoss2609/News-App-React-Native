import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';

import Screens from './src/constant/screen'

import Home from './src/views/Home'
import Register from './src/views/Register'
import Login from './src/views/Login'
import News from './src/views/News'
import Splash from './src/views/Splash'
import ForgotPassword from './src/views/ForgotPassword'
const Stack = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name={Screens.SLP} component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name={Screens.LOGIN} component={Login} options={{headerShown:false}} />
        <Stack.Screen name={Screens.FP} component={ForgotPassword} options={{headerShown:false}} />
        <Stack.Screen name={Screens.REG} component={Register} options={{headerShown:false}}/>
        <Stack.Screen name={Screens.HOME} component={Home} options={{headerShown:false}}/>
        <Stack.Screen name={Screens.NEWS} component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
    
}
export default App;