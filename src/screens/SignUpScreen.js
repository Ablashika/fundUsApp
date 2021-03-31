import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,  
} from 'react-native';



function SignUpScreen (){
    
    return(
        
     <View style={styles.container}>            
     
     <View style={styles.redContainer}>            
     

  
     </View>

     <View style={styles.textContainer}>            
     
        <Text>WELCOME!</Text>
        <Text>Pleas provide the following details for your new account</Text>
     </View>


     

     <View style={styles. blueContainer}>            
     
     <View>
         <Text>Full name</Text>
         <View  style={styles.placeholder}></View>
     </View>

     <View>
         <Text>Full name</Text>
         <View  style={styles.placeholder}></View>
     </View>
     <View>
         <Text>Full name</Text>
         <View  style={styles.placeholder}></View>
     </View>
     <View>
         <Text>Full name</Text>
         <View  style={styles.placeholder}></View>
     </View>

  
     </View>

     <View style={styles.signUpBox}>
         <View style={styles.signUpText} >
             <Text>SIGN UP</Text>
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

    redContainer:{
        backgroundColor:"#FD513B",
        width:400,
        alignItems:"center",
        justifyContent:"center",
       
        flex:1
    },

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
       
        flex:3,
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
    }


      
}) 


export default SignUpScreen