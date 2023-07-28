import React, { useState } from 'react';
import Quiz from '../navigation/Screens/Quiz';
import { View, Image, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation, useRoute } from '@react-navigation/native';

const Card = (props) => {
  const route = useRoute();
 const navigation=useNavigation();
 const [progress, setProgress] = useState(0.6);
 const [played, setPlayed] = useState(42);
  return (
    <Pressable onPress={()=>navigation.navigate('Quiz')}>
   <View>
    <Image source = {props.url} style={{ width: 180, height: 180, }}/>
    <Text style={{color:"white", fontWeight:"bold", fontSize:12, position:"absolute", top: 108, left: 26}}>{props.domain}</Text>
    <Text style={{color:"white", fontWeight:"bold", fontSize:12, position:"absolute", top: 108, left: 140}}>{Math.floor(progress*100)}%</Text>
    <ProgressBar progress={progress} width={130} height={5} color="white" opacity={0.8} borderRadius={20} position="absolute" top={132} left={26} borderWidth={0.8} />
    <Text style={{color:"white", fontWeight:"bold", fontSize:10, position:"absolute", top: 150, left: 90}}>{played} times played</Text>
   </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({})
 

export default Card;
