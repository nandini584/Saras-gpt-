import {View, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register Your Account</Text>
            <View style={{marginTop: 24}}>
            <TextInput style={styles.field} placeholder="Enter email address" />
            <TextInput style={styles.field} placeholder="Password" />
            <TextInput style={styles.field} placeholder="Confirm Password" />
            </View>
            <View style={styles.button}>
            <Pressable>
        <Text style={{color:"white", fontWeight:"bold", fontSize:14}} >Register</Text>
        </Pressable>

            </View>
            <Text style={{fontSize:12, color:"#2F2A2A", opacity:0.6, marginVertical:16}}>or</Text>
            <View style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center",  fontSize: 14,
    borderRadius: 30,
backgroundColor: "white",
width: 316,
height: 47,
shadowColor: '#171717',
shadowOffset: {width: -2, height: 4},
shadowOpacity: 0.2,
shadowRadius: 30,
paddingLeft:25,
marginTop:12 }}>
                <Image/>
            <Text style={{fontWeight:"bold", color:"#2F2A2A"}}>Signup with Google</Text>
            </View>
        </View>
    )
}
export default Register;
const styles=StyleSheet.create({
heading:{
display: "flex",
flexDirection: "column",
justifyContent: "center",
color: "#2F2A2A",
textAlign: "center",
fontSize: 22,
fontWeight: 700,
marginTop:82
},
field:{
    color: "#8692A6",
    fontSize: 14,
    borderRadius: 30,
backgroundColor: "white",
width: 316,
height: 47,
shadowColor: '#171717',
shadowOffset: {width: -2, height: 4},
shadowOpacity: 0.2,
shadowRadius: 30,
paddingLeft:25,
marginTop:12
},
container:{
    backgroundColor:"#F6F9F8",
    display: "flex",
justifyContent: "center",
alignItems: "center",

},
button:{
    width:316, 
   height: 47, 
   display:"flex", 
   justifyContent:"center", 
   alignItems:"center", 
   backgroundColor:"#06C295", 
   borderRadius:40, 
   marginTop:44
}
})