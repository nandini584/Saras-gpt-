import {View, Text, ScrollView, Image, StyleSheet, Pressable} from 'react-native'
import DropdownComp from "../../Components/DropdownComp";
import RadioGroup from 'react-native-radio-buttons-group';
import Toggle from '../../Components/Toggle'
import Streak from '../../Components/Streak'
import Field from '../../Components/Field'
import {useMemo, useState} from 'react'
import UploadImage from '../../Components/Uploadprofile';
export default function Settings({navigation}){
    const number = [5,6,7,8,9,10];
    
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Revise all Questions',
            value: 'all'
        },
        {
            id: '2',
            label: 'Revise incorrect Questions',
            value: 'incorrect'
        }
    ]), []);
    const [selectedId, setSelectedId] = useState();
    return(
        
        <View style={{backgroundColor:"#F6F9F8", marginBottom:200}}>
           <Streak/>
           <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
           <View>
                <Text style={{fontWeight:"bold", fontSize:22, color:"#2F2A2A", marginTop:16, marginLeft:24}}>Settings</Text>
                <Text style={{fontWeight:500, fontSize:18, color:"#2F2A2A", marginTop:30, marginLeft:24}}>Personal Info</Text>
                <Text style={{fontWeight:400, fontSize:14, color:"#777E7C", marginTop:4, marginLeft:24}}>Upgrade your Avatar and Personal Information</Text>
           </View>
          
           <View style={{backgroundColor:"white", margin:24, borderRadius:20, paddingBottom:32}}>
            {/* <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingTop:16 }}>
           <Image source={require('../../assets/dummyprofile.png')} style={{marginLeft:32, marginVertical:16, }}/>
           <Text style={{padding:36, marginRight:32,borderWidth:2, borderColor:"#E3E3E3", borderRadius: 12, borderStyle:"dashed", color:"#06C295", fontWeight:"bold"}}>Click to Upload</Text>
            </View> */}
            <View style={{ display:"flex", 
        alignItems:"center", 
        justifyContent:"center", 
    }}>

            <UploadImage />
            </View>
            <Field name="Name" entry="Nandini Arora" />
            <Field name="Email" entry="xyz@gmail.com" />
            <Field name="Username" entry="Dusky_sketchies" />
            <Field name="Password" entry="********" />
           </View>
           <View>
                <Text style={{fontWeight:500, fontSize:18, color:"#2F2A2A", marginTop:20, marginLeft:24}}>Quiz Settings</Text>
                <Text style={{fontWeight:400, fontSize:14, color:"#777E7C", marginTop:4, marginLeft:24}}>Personalize your Experience</Text>
           </View>
           <View style={{backgroundColor:"white", margin:24, borderRadius:20, paddingVertical:24, paddingLeft:32}}>
           <Text style={{color:"#2F2A2A", fontWeight:600, fontSize:15}}>Set Number of Questions</Text>
           <DropdownComp /> 
           <Text style={{color:"#2F2A2A", fontWeight:600, fontSize:15, marginTop:36}}>Revision Status</Text>
           <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            color="#06C295"
        />
            <Toggle name="System Sound" state={true} />
           <Toggle name="Notifications" state={false} />
           <Toggle name="Darkmode" state={true} /> 
           <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-end", marginTop:12, marginRight:32}}>
           <View style={styles.button}>
        <Pressable onPress={()=>navigation.navigate('Quiz')}>
        <Text style={{color:"white", fontWeight:"bold", fontSize:14}} >Log out</Text>
        </Pressable>
        </View>
            </View>
           </View>
           
           </ScrollView>
        </View>
    )
}const styles=StyleSheet.create({
    button:{
    display:"flex",
    paddingVertical:10,
    paddingHorizontal:32,
   
    alignItems:"flex-end", 
    backgroundColor:"#06C295", 
    borderRadius:40, 
 }})