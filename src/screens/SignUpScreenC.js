import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

export default function SignUpScreenC() {
    return (
        <View style={styles.mainContainer}>
            {/* <Image source={require('/Users/mac/Desktop/reactnative/AmpersandApp/ampersandapp/assets/officesetup.jpg')} style={styles.image} /> */}
       

            <View style={{
                flexDirection:"column",
                 alignItems: "flex-start",
                justifyContent: "space-between"
            }}>
          <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            marginHorizontal: 35, 
            marginBottom: 7
          }}>Email</Text>
          <TextInput style={{
            //  alignSelf: 'center',
             justifyContent: 'center',
             marginHorizontal: 30,
             // marginBottom: 20,
             borderColor: 'gray',
             backgroundColor: '#E2E6EE',
             borderRadius: 10,
             width: 312,
             height: 60,
             marginBottom: 20
          }}
                    placeholderTextColor="gray"
                    placeholder="  magnacarter@gmail.com"
                />
            </View>

            {/* <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View> */}

            <View style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between"
            }}>
          <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            marginHorizontal: 35, 
            marginBottom: 7,
            alignContent: 'stretch'
          }}
          >STORY
          </Text>

          <TextInput style={{
            alignSelf: 'center',
            justifyContent:'flex-start',
            marginHorizontal: 30,
            // marginBottom: 20,
            borderColor: 'gray',
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
            height: 350
          }}
                    placeholderTextColor="#aaaaaa"
                    placeholder=""
                    
                />
            </View>
            {/* <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View> */}

            <View>
                <TouchableOpacity  onPress={() => { }}style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>sign in</Text>
                </TouchableOpacity>
            </View>

           
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
   
       
    },
  


    buttonContainer: {
        height: 40,
        width: 217,
        backgroundColor: "#FFFCF0",
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
    forgotPassword: {
        flexDirection: "row",
        marginLeft: 20
  },
  welcomeText:{
    alignSelf: 'center',
    marginVertical: 60,
    justifyContent: 'center',
    alignItems: "center",
    marginTop:30
    
    
    }
})