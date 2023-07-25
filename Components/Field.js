import {View, Text} from 'react-native'
export default function Field(props){
    return(
        <View style={{paddingVertical:10, paddingHorizontal:32}}>
           <Text style={{color:"#2F2A2A", fontWeight:600, fontSize:15}}>{props.name}</Text>
           <Text style={{color:"#2F2A2A", borderWidth:1.5, borderColor:"#E3E3E3" , borderRadius:8, paddingVertical:10, paddingHorizontal:16, marginTop:8}}>{props.entry}</Text>
        </View>
    )
}