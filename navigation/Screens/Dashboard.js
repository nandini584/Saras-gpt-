import {View, Text} from 'react-native'
import Streak from "../../Components/Streak"
export default function Dashboard({navigation}){
    return(
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
           <Streak />
        </View>
    )
}