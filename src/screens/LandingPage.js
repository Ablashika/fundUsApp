import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import afrcan from "../../assets/africanshop.jpg"




function LandingPage ({navigation}){

    const image = { uri: "https://reactjs.org/logo-og.png" };
    return(
        
     <View style={styles.container}>            
     
     <ImageBackground source={afrcan} style={styles.image}>


     </ImageBackground>
     <Text style={styles.fundusText}>FundUs</Text>
     
     <View style={styles.boxContainer}>

         
         

             <TouchableOpacity
              onPress={()=>{
                navigation.navigate("LogInScreen")
           }}
             style={styles.signUpBox}>
                 <Text style={{fontWeight:"bold"}}>
                     I am a business owner
                 </Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.signUpBox}>
                 <Text style={{fontWeight:"bold"}}>
                    Here to support!
                 </Text>
             </TouchableOpacity>
         </View>

        <TouchableOpacity>
        <Text style={styles.learnMoreText}>Learn more</Text>
        </TouchableOpacity>

    </View>



)
}

const styles = StyleSheet.create({
    container: {
       flex:1,    
      backgroundColor: "#FD513B",
      alignItems: 'center',
      justifyContent: 'center',
    
    
    },

    image: {
        flex: 1,
        // resizeMode:"center",
        justifyContent: "center",
        height:820,
        width:410,
        opacity:0.4,
        
        
      },

        
   boxContainer: {
       flexDirection:"column",

      height:300,
      width:300,
      flex: 5,
      justifyContent:"center",
       alignItems: "center",
      marginTop:40,

   },

   signUpBox: {
       height:40,
       width:250,
       backgroundColor:"#FFFFFF",
       marginTop:8,
       justifyContent:"center",
       borderRadius:30,
       alignItems: "center",
       opacity: 40,
       fontWeight:"700"
   },

   fundusText:{
       
       fontWeight:"400",
       color:"#ffffff",
       fontSize: 70,
       marginTop:10
   },

   learnMoreText :{
       color:"white",
       marginBottom:30,
       fontWeight:"bold",
   }
   


      
}) 


export default LandingPage