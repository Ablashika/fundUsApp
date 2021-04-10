import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,  
} from 'react-native';



function SignUpScreen (){
    
    return(
        
     <View style={styles.container}>            
     
     
     <View style={styles.textContainer}>            
     
        <Text style={{fontSize:40, fontWeight:'bold',}}> WELCOME!</Text>
        <Text>Please provide the following details for your new account</Text>
     </View>


     

     <View style={styles. blueContainer}>            
     
     
     
                
     <View>
         <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            // marginHorizontal: 35, 
            marginBottom: 7
          }}>Email Address</Text>
         <View  style={{
            backgroundColor: '#E2E6EE',
            borderRadius: 10,
            width: 312,
            height: 35,
            marginBottom:20}}></View>
     </View>
     
     <View style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between"
            }}>
          <Text style={{
            fontWeight: "bold",
            fontSize: 15,
            marginHorizontal: 35, 
            marginBottom: 7
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


  
     </View>

     <View style={styles.signUpBox}>
     <View>
                <TouchableOpacity  onPress={() => { }}style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>

                <Text>Already have an account?</Text>
                
     </View>

    

    </View>


)
}

const styles = StyleSheet.create({
    container: {
       flex:1, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    },

    // redContainer:{
    //     backgroundColor:"#FD513B",
    //     width:400,
    //     alignItems:"center",
    //     justifyContent:"center",
       
    //     flex:1
    // },

    textContainer:{
        backgroundColor:"#fff",
        
        alignItems:"center",
        justifyContent:"center",
       
        flex:1,
    },

   
    blueContainer:{
        backgroundColor:"#fff",
        
        alignItems:"center",
        justifyContent:"center",
       
        // flex:3,
    },

    placeholder:{
        backgroundColor:"#E2E6EE",
        height:40,
        width:300,
        marginBottom:20,
        borderRadius:30,
    },

    signUpBox:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
       

    },

    signUpText:{
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#FD513B",
        borderWidth:2,
        height:50,
        width:250,
      borderRadius:30,
    },
    buttonText: {
        
        fontSize: 18,
      alignSelf: 'center',
        fontWeight:'bold'
    },buttonContainer: {
        height: 40,
        width: 217,
        // backgroundColor: "#FFFCF0",
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


      
}) 


export default SignUpScreen