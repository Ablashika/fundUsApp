import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList, ImageBackground, ScrollView,  
} from 'react-native';
import afrcan from "../../assets/africanshop.jpg";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';




function WallPage ({navigation}){
    
    return(
        
     <View style={styles.container}>            
     
       
      <ScrollView>
        <View style={{ flex:4, justifyContent:"center", alignItems:"center", marginTop:-10}}>

 
           
   <View style={styles.imagebox}>
    
    <ImageBackground source={afrcan}  style={styles.image} imageStyle={{ borderRadius: 20}} >

  
   </ImageBackground> 
   <View style={styles.textShow}>
    
         <Text style={styles.textOp}>Fashion Design</Text>
         <Text style={styles.textO}>Help iss get back on her feet</Text>

         <TouchableOpacity style={styles.containerText}><Text style={styles.text}>View Project</Text></TouchableOpacity>
         
    
  </View>
  
   
  
            </View>
            <View style={styles.imagebox}>
    
    <ImageBackground source={afrcan}  style={styles.image} imageStyle={{ borderRadius: 20}} >

  
   </ImageBackground> 
   <View style={styles.textShow}>
    
         <Text style={styles.textOp}>Fashion Design</Text>
         <Text style={styles.textO}>Help iss get back on her feet</Text>

         <TouchableOpacity style={styles.containerText}><Text style={styles.text}>View Project</Text></TouchableOpacity>
         
    
  </View>
  
   
  
            </View>
            <View style={styles.imagebox}>
    
    <ImageBackground source={afrcan}  style={styles.image} imageStyle={{ borderRadius: 20}} >

  
   </ImageBackground> 
   <View style={styles.textShow}>
    
         <Text style={styles.textOp}>Fashion Design</Text>
         <Text style={styles.textO}>Help iss get back on her feet</Text>

         <TouchableOpacity style={styles.containerText}><Text style={styles.text}>View Project</Text></TouchableOpacity>
         
    
  </View>
  
   
  
    </View> 

     
    
  
   
     
 
  </View>  

  </ScrollView>
        <View elevation={5} style={{
           backgroundColor: "#FFFCF0", marginTop: -80, justifyContent: "center",
          borderRadius: 15,
          shadowColor: "#000000",
          shadowOpacity: 3,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          }}}>
  <View style={styles.lastBox}>
  <View><Entypo name="home" size={24} color="black" /></View>
  <View><Entypo name="share" size={24} color="black" /></View>
  <View><Ionicons name="md-search" size={24} color="black" /></View>
  <View><Ionicons name="ios-settings" size={24} color="black" /></View>
  </View>
  </View> 
    </View>


)
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFCF0',
      alignItems: 'center',
      justifyContent: 'center',
      flex:5
      
    
    },

   


    image:{
        
        height:350,
        width:320,
        // justifyContent:"center",
        // resizeMode: "cover",
       
      opacity: 0.5,
      marginTop:17
      },

      imagebox:{
        height:360,
        width:320,
        // justifyContent:"center",
        // margin:20,
        // alignContent:"center",
       
        

         
      },

    

      textShow:{
          height:300,
        //   backgroundColor:"blue",
         marginTop:-110,
         marginLeft:20,
        //  flexDirection:"column",
         borderRadius:30,
         alignContent:"center",
          
      },
    

      textOp:{
          color:"white",
          // marginLeft:20,
          // marginTop:30

      },
   

      textO:{
        color:"white",
        // marginLeft:20,
        // marginTop:30,
        fontWeight: "bold",
        fontSize:20
    },

    containerText:{
        backgroundColor:"#FD513B",
        // marginLeft:4,
        marginTop:10,
        height:40,
        width:100,
        borderRadius:30,
        justifyContent:"center",
      alignItems: "center",
        color:'white',
    },

    lastBox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:'100%',
        height:50,
      justifyContent: "space-evenly",
      marginVertical:10
        
        
       
  },
  text: {
    color: 'white',
    fontWeight:"bold",
    }
    
   
    

      
}) 


export default WallPage;