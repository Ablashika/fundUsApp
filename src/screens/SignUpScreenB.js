import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,Text,StyleSheet,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function SignUpScreenB({navigation}) {
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
      <View style={{
        // flex: 1,
        alignItems: 'center', justifyContent: 'center'
      }}>
      <Button title="upload a picture" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      <View>
         <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            // marginHorizontal: 35, 
            marginBottom: 7
          }}>Full name</Text>
         <View  style={{
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
            height: 35,
          // marginBottom: 20
        }}>
          
            </View>
      </View>

      <View>
         <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            // marginHorizontal: 35, 
            marginVertical:3
          }}>Location</Text>
         <View  style={{
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
          height: 35,
          marginVertical:3,
          // marginBottom: 20
        }}>
          
            </View>
      </View>
      
      <View>
                <TouchableOpacity  onPress={() => { }}style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>sign in</Text>
                </TouchableOpacity>
       </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    
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

