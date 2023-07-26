import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';
import Streak from "../../Components/Streak"
import {BarChart} from "react-native-chart-kit";
export default function Dashboard({navigation}){
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
      
      const chartConfig = {
       backgroundColor:"white",
       boderRadius:20,
        color: (opacity = 1) => "#06C295",
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
      };
    return(
        <View style={{backgroundColor:"#F6F9F8"}}>
            <View >
           <Streak />
            </View>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{marginBottom:200}}>

                
                <View style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

                <Image source={require('../../assets/dashbdprofile.png')} style={{marginTop:32}}/>
                <Text style={{color:"#2F2A2A", fontSize:20, fontWeight:700, marginTop:16 }}>Pratiksha Goel</Text>
                </View>
                 <View style={{dispaly:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white", width: 160, height: 160, borderRadius: 20, marginTop:30, marginRight:24}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:700,color: "#373737", textAlign: "center"}}>Quiz Attempted</Text>
                    <Text style={{color:"white", fontSize:42, fontWeight:800,color: "#06C295", textAlign: "center", marginTop:32}}>45</Text>
                </View>
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white", width: 160, height: 160, borderRadius: 20, marginTop:30}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:700,color: "#373737", textAlign: "center"}}>Avg acuracy</Text>
                    <Text style={{color:"white", fontSize:42, fontWeight:800,color: "#06C295", textAlign: "center", marginTop:32}}>65%</Text>
                </View>
                </View> 
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white",width:380, height:230, borderRadius: 20, marginTop:30}}>
                <BarChart
  data={data}
  width={380}
  height={230}
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>
                </View>
                <View style={{dispaly:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white", width: 160, height: 160, borderRadius: 20, marginTop:30, marginRight:24}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:700,color: "#373737", textAlign: "center"}}>Daily Acuracy</Text>
                    <CircularProgress
  value={60}
  radius={44}
  progressValueColor={'#06C295'}
  activeStrokeColor={'#06C295'}
  inActiveStrokeColor={'#06C295'}
  inActiveStrokeOpacity={0.5}
  inActiveStrokeWidth={30}
  activeStrokeWidth={15}
/>
                </View>
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white", width: 160, height: 160, borderRadius: 20, marginTop:30}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:700,color: "#373737", textAlign: "center"}}>Quiz Attempted</Text>
                    <Text style={{color:"white", fontSize:42, fontWeight:800,color: "#06C295", textAlign: "center", marginTop:32}}>45</Text>
                </View>
                </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({

})