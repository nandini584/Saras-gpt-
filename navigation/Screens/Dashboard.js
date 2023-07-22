import {View, Text} from 'react-native'
export default function Dashboard({navigation}){
    return(
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text onPress={()=> navigation.navigate('Home')} style={{fontSize: 26, fontWeight:"bold"}}>Dashboard Screen</Text>
        </View>
    )
}