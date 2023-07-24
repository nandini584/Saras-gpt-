import {View, Text} from 'react-native'
export default function Field(props){
    return(
        <View style={{paddingVertical:16, paddingHorizontal:36}}>
           <Text style={{color:"#2F2A2A", fontWeight:600, fontSize:15}}>{props.name}</Text>
           <Text style={{color:"#2F2A2A", borderWidth:1.5, borderColor:"#2E2D2D" , opacity:0.45, borderRadius:8, paddingVertical:10, paddingHorizontal:16, marginTop:8}}>{props.entry}</Text>
        </View>
    )
}