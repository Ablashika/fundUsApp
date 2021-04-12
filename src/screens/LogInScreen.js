import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

export default function LogInScreen() {
    return (
        <View style={styles.mainContainer}>
            {/* <Image source={require('/Users/mac/Desktop/reactnative/AmpersandApp/ampersandapp/assets/officesetup.jpg')} style={styles.image} /> */}
        <View style={styles.welcomeText}>
          <Text style={{fontSize:40, fontWeight:'bold',}}> WELCOME BACK!</Text>
          <Text style={{fontSize:25, fontWeight:'200',}}>sign in to continue.</Text>
        </View>

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
             alignSelf: 'center',
             justifyContent: 'center',
             marginHorizontal: 30,
             // marginBottom: 20,
             borderColor: 'gray',
             backgroundColor: '#E2E6EE',
             borderRadius: 10,
             width: 312,
             height: 35,marginBottom:20
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
          >Password
          </Text>

          <TextInput style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginHorizontal: 30,
            // marginBottom: 20,
            borderColor: 'gray',
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
            height: 35
          }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="  Password"
                    secureTextEntry={true}
                />
            </View>
            {/* <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View> */}

            <View>
                <TouchableOpacity  onPress={() => { }}style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>sign in</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.forgotPassword}>
                    <Text style={{ fontSize: 17 }}>Forgot? </Text>
                    <View>
                        <Text style={{ fontSize: 17,marginBottom:5 }}>Reset Password</Text>
                        <View style={{
                            backgroundColor: "#de4f45",
                            height: 2,
                            width: 105,
                            borderRadius: 15,
                        }}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFCF0'
       
    },
    heading: {
        flexDirection: "row",
        backgroundColor: "red",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },

    image: {
        height: 500,
        width: 500,
        flex: 0.5,
        marginBottom: 40
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