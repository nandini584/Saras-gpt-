import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import Streak from "../../Components/Streak"
export default function Dashboard({navigation}){
    return(
        <View style={{backgroundColor:"#F6F9F8"}}>
            <View>
           <Streak />
            </View>
            <ScrollView contentContainerStyle={{flexgrow:1}}>
                <View style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

                <Image source={require('../../assets/dashbdprofile.png')} style={{marginTop:32}}/>
                <Text style={{color:"#2F2A2A", fontSize:20, fontWeight:700, marginTop:16 }}>Pratiksha Goel</Text>
                </View>
                <View style={{dispaly:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white", width: 180, height: 180, borderRadius: 20, marginTop:30, marginRight:12}}>
                    <Text style={{color:"white", fontSize:18, fontWeight:700,color: "#373737", textAlign: "center"}}>Quiz Attempted</Text>
                    <Text style={{color:"white", fontSize:45, fontWeight:900,color: "#06C295", textAlign: "center", marginTop:32}}>45</Text>
                </View>
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white", width: 180, height: 180, borderRadius: 20, marginTop:30}}>
                    <Text style={{color:"white", fontSize:18, fontWeight:700,color: "#373737", textAlign: "center"}}>Avg acuracy</Text>
                    <Text style={{color:"white", fontSize:45, fontWeight:900,color: "#06C295", textAlign: "center", marginTop:32}}>65%</Text>
                </View>
                </View>
                <View>
                    
                </View>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({

})