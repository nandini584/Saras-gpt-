import {View, Text, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native'
import Streak from "../../Components/Streak"
import {useState} from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
import {BarChart, ContributionGraph, } from "react-native-chart-kit";
import { Calendar } from 'react-native-calendars';
export default function Dashboard({navigation}){
  const commitsData = [
    { date: "2023-01-02", count: 1 },
    { date: "2023-01-03", count: 2 },
    { date: "2023-01-04", count: 3 },
    { date: "2023-01-05", count: 4 },
    { date: "2023-01-06", count: 5 },
    { date: "2023-01-30", count: 2 },
    { date: "2023-01-31", count: 3 },
    { date: "2023-03-01", count: 2 },
    { date: "2023-04-02", count: 4 },
    { date: "2023-03-05", count: 2 },
    { date: "2023-02-30", count: 4 }
  ];
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
    const [circularProgressValue, setCircularProgressValue] = useState(0);
      const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0,
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
  style={{marginHorizontal:24, borderRadius:12}}
/>
                </View>
              <View style={{dispaly:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <View style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", backgroundColor:"white", width: 160, height: 160, borderRadius: 20, marginTop:30, marginRight:24}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:700, color: "#373737", textAlign: "center"}}>Daily Acuracy</Text>
                    <CircularProgress
                        radius={44}
                        value={circularProgressValue}
                        textColor="#222"
                        fontSize={22}
                        valueSuffix={'%'}
                        inActiveStrokeColor='#83EFD5'
                        inActiveStrokeOpacity={0.2}
                        activeStrokeWidth={12}
                        progressValueColor={'#06C295'}/>
                </View>
                <View style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white", width: 160, height: 160, borderRadius: 20, marginTop:30}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:700, color: "#373737", textAlign: "center", marginBottom:2}}>Quiz Attempted</Text>
                    <Image source={require('../../assets/hat.png')} />
                    <Text style={{color:"#373737", fontWeight:"bold", fontSize:20}}>3 days</Text>
                    <Text style={{color:"#373737", fontSize:10, boderWidth:0, backgroundColor:"#F4F4F4", paddingVertical:8, borderRadius:20, paddingHorizontal:10}}>From June 5, 2023</Text>
                </View>
                </View>
            <SafeAreaView style={styles.container}>
            <Calendar  style={{
    borderRadius: 20,
    marginHorizontal: 32,
    marginVertical: 16,
  }}
  theme={{
    calendarBackground: 'white',
    
    monthTextColor: '#888'
  }}/>

            </SafeAreaView>
            <ContributionGraph
  values={commitsData}
  endDate={new Date("2023-04-01")}
  numDays={105}
  style={{marginHorizontal:24, borderRadius:20, marginTop:16, backgroundColor:"white"}}
  height={220}
  chartConfig={chartConfig}
/>
                
                </View>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})