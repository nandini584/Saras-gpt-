import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function UploadImage() {
  const [image, setImage] = useState(null);
 
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  const  checkForCameraRollPermission=async()=>{
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert("Please grant camera roll permissions inside your system's settings");
    }else{
      console.log('Media Permissions are granted')
    }
}
useEffect(() => {
    checkForCameraRollPermission()
  }, []);
  return (
            <View style={styles.container}>
                {
                    image  && <Image source={{ uri: image }} style={{ width: 100, height: 100, marginLeft:32, marginTop:32, borderWidth:5, borderColor:"#06C295" }} />
                }
                    <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={styles.uploadBtn} >
                            <Text style={{fontSize:12}}>{image ? 'Edit' : 'Upload'} Image</Text>
                            <AntDesign name="camera" size={15} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>
  );
}
const styles=StyleSheet.create({
    container:{
        elevation:2,
        backgroundColor:'#efefef',
        width:120,
        height:120,
        borderRadius:999,
        overflow:'hidden',
        borderWidth:5,
        borderColor:"#06C295",
        marginTop:24
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})