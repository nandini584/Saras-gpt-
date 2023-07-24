import React,{useState,useEffect} from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { View, Text, StyleSheet, Image, Pressable, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Streak from "../../Components/Streak"
export default function Congrats({ navigation }) {
  const route = useRoute();
  const [progress, setProgress]=useState(0.6)
 
  return (
    <View style={{backgroundColor:"#F6F9F8"}}>
     <Streak />
     <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#F6F9F8"}}>
      <Text style={styles.Congrats}>Congratulations</Text>
      <Image source={require('../../assets/Congo.png')} style={styles.img}/>
      <Text style={{fontSize:16, marginTop:20, marginBottom:14 }}>You answered questions with <Text style={{color:"#06C295", fontWeight:700}}>{Math.floor(route.params.points*100)}%</Text> acuracy</Text>
      <ProgressBar progress={route.params.points} width={325} height={6} color="#06C295" borderRadius={20} backgroundColor="#BFF9EB" borderWidth={1} />
      <View>
        <View style={{display:"flex", justifyContent:"center", flexDirection:"row", marginTop: 30 }}>
          <View style={{borderWidth:2, width:167, height: 37, display:"flex", justifyContent:"center", alignItems:"center", borderColor:"#06C295", borderRadius:40, marginRight:17}}>
        <Pressable onPress={()=>navigation.navigate('Quiz')} style={styles.outlinebutton}>
        <Text style={{color:"#06C295", fontWeight:"bold", fontSize:12, }}>Choose a Random Deck</Text>
        </Pressable>
          </View>
          <View style={{borderWidth:2, width:167, height: 37, display:"flex", justifyContent:"center", alignItems:"center", borderColor:"#06C295", borderRadius:40}}>
        <Pressable onPress={()=>navigation.navigate('Home')} style={styles.outlinebutton}>
        <Text style={{color:"#06C295", fontWeight:"bold", fontSize:12}}>Choose Another Deck</Text>
        </Pressable></View>
        </View>
        <View style={styles.button}>
        <Pressable onPress={()=>navigation.navigate('Quiz')}>
        <Text style={{color:"white", fontWeight:"bold", fontSize:12}} >Revise the same Deck</Text>
        </Pressable>
        </View>
      </View>
     </View>
    </View>
  );
}
const styles=StyleSheet.create({
outlinebutton:{


},
Congrats:{
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  color:"#2F2A2A",
  fontSize:30,
  fontWeight:700,
  backgroundColor:"#F6F9F8",
  marginTop:20,
  marginBottom:20
},
button:{
   width:350, 
   height: 37, 
   display:"flex", 
   justifyContent:"center", 
   alignItems:"center", 
   backgroundColor:"#06C295", 
   borderRadius:40, 
   marginTop:13
}
})