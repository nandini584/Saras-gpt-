import {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Congrats from "./navigation/Screens/Congrats"
import MainContainer from './navigation/MainContainer';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

const Stack = createStackNavigator();
export default function App(){
  return(<>
  <MainContainer />

  
  
  </>
  )
}