import {View, Text, ScrollView} from 'react-native'
import Streak from '../../Components/Streak'
import Field from '../../Components/Field'
export default function Settings({navigation}){
    return(
        <View style={{backgroundColor:"#F6F9F8"}}>
           <Streak/>
           <View>
                <Text style={{fontWeight:"bold", fontSize:22, color:"#2F2A2A", marginTop:16, marginLeft:24}}>Settings</Text>
                <Text style={{fontWeight:500, fontSize:18, color:"#2F2A2A", marginTop:30, marginLeft:24}}>Personal Info</Text>
                <Text style={{fontWeight:400, fontSize:14, color:"#777E7C", marginTop:4, marginLeft:24}}>Upgrade your Avatar and Personal Information</Text>
           </View>
           <View style={{backgroundColor:"white", margin:24, borderRadius:20}}>
           <ScrollView>
            <Field name="Name" entry="Nandini Arora" />
            <Field name="Email" entry="xyz@gmail.com" />
            <Field name="Username" entry="Dusky_sketchies" />
            <Field name="Password" entry="********" /></ScrollView>
           </View>
        </View>
    )
}