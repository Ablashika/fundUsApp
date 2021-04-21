import React, { useState, useEffect, Component } from 'react';
import { Button, Image, View, Platform,Text,StyleSheet,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {  connect} from "react-redux";

 function SignUpScreenB({navigation}) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
    
      <Text>Set your profile</Text>
      <View style={{ height:250, width:400,
        // flex: 1,
        alignItems: 'center', justifyContent: 'center'
      }}>
      <Button title="upload a picture" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

      <ScrollView>
      <View>
         <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            // marginHorizontal: 35, 
            marginBottom: 7
          }}>Project Name</Text>
         <TextInput  style={{
           marginTop:10,
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
            height: 35,
          // marginBottom: 20
        }}>
          
            </TextInput>
      </View>

      <View>
         <Text style={{
           marginTop:10,
            fontWeight: "bold",
            fontSize: 15,
            // marginHorizontal: 35, 
            marginBottom: 7
          }}>Title</Text>
         <TextInput style={{
           marginTop:10,
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
            height: 35,
          // marginBottom: 20
        }}>
          
            </TextInput>
      </View>

      <View>
         <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            marginTop:10,
            // marginHorizontal: 35, 
            marginVertical:3
          }}>Location</Text>
         <TextInput  style={{
           marginTop:10,
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
          height: 35,
          marginVertical:3,
          // marginBottom: 20
        }}>
          
            </TextInput>
      </View>

      <View>
         <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            marginTop:10,
            // marginHorizontal: 35, 
            marginVertical:3
          }}>Tell your story</Text>
         <TextInput style={{
           marginTop:10,
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
          height: 50,
          marginVertical:3,
          // marginBottom: 20
        }}>
          
            </TextInput>
      </View>
      
      
      <View
      style={{
        marginTop:-50,
     }}>
                <TouchableOpacity     onPress={()=>{
                navigation.navigate("DashBoard")
           }} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>submit</Text>
                </TouchableOpacity>
       </View>
      
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
justifyContent:"center",
alignItems:"center"
    
  },
  buttonContainer: {
    height: 40,
    width: 217,
    
    justifyContent: "center",
  alignSelf: "center",
    alignContent:'center',
    borderRadius: 100,
    // marginLeft: 20,
    marginTop:60,
  marginBottom: 20,
  borderWidth: 2,
    borderColor:'#FD513B'
},
buttonText: {
    color: "#FD513B",
    fontSize: 18,
  alignSelf: 'center',
    fontWeight:'bold'
},
});


export default connect({}, {}) (SignUpScreenB)
