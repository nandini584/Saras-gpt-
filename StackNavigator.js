import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './navigation/Screens/Home';
import QuizScreen from './navigation/Screens/Quiz';
import CongratsScreen from './navigation/Screens/Congrats';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Congrats" component={CongratsScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})