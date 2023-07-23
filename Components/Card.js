import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
const Card = () => {
 const [progress, setProgress] = useState(0.6);
 const [played, setPlayed] = useState(42);
  return (
   <View>
    <Image source = {require("../assets/newspaper.png")} style={styles.card}/>
    <Text style={{color:"white", fontWeight:"bold", fontSize:12, position:"absolute", top: 108, left: 50}}>Current Affairs</Text>
    <Text style={{color:"white", fontWeight:"bold", fontSize:12, position:"absolute", top: 108, left: 160}}>{Math.floor(progress*100)}%</Text>
    <ProgressBar progress={progress} width={130} height={5} color="white" opacity={0.8} borderRadius={20} position="absolute" top={132} left={50} borderWidth={0.8} />
    <Text style={{color:"white", fontWeight:"bold", fontSize:10, position:"absolute", top: 150, left: 115}}>{played} times played</Text>
   </View>
  );
};

const styles = StyleSheet.create({
card:{
    width: 180,
    height: 180,
    marginLeft:24,
}
})
 

export default Card;
