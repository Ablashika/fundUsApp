import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import afrcan from "../../assets/africanshop.jpg"




function LandingPage (){

    const image = { uri: "https://reactjs.org/logo-og.png" };
    return(
        
     <View style={styles.container}>            
     
     <ImageBackground source={african} style={styles.image}>


     </ImageBackground>
     <Text style={styles.fundusText}>FundUs</Text>
     
     <View style={styles.boxContainer}>

         
         

             <TouchableOpacity style={styles.signUpBox}>
                 <Text>
                     I am a business owner
                 </Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.signUpBox}>
                 <Text>
                    here to support!s
                 </Text>
             </TouchableOpacity>
         </View>

         <Text style={styles.learnMoreText}>Learn more</Text>

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
        resizeMode: "cover",
        justifyContent: "center",
        height:800,
        width:400,
        opacity:0.5,
        
        
      },

        
   boxContainer: {
       flexDirection:"column",

      height:300,
      width:300,
      flex: 5,
      justifyContent:"center",
      alignItems:"center"

   },

   signUpBox: {
       height:40,
       width:250,
       backgroundColor:"#aaaaaa",
       marginTop:10,
       justifyContent:"center",
       borderRadius:30,
       alignItems:"center"
   },

   fundusText:{
       marginTop:-30,
       fontWeight:"bold",
       color:"#ffffff",
       fontSize:30
   },

   learnMoreText :{
       color:"white",
       marginBottom:30,
       fontWeight:"bold",
   }
   


      
}) 


export default LandingPage