import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList, ImageBackground, ScrollView,  
} from 'react-native';
import afrcan from "../../assets/africanshop.jpg";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';




function WallPage ({navigation}){
    
    return(
        
     <View style={styles.container}>            
     
     <View style={styles.redContainer}>            
       
     <Text style={{ color:"white", fontWeight:"bold"}}>Find A cause</Text>

  
     </View>
      <ScrollView>
    <View style={{ flex:4, justifyContent:"center", alignItems:"center", marginTop:-10}}>

 
  <View style={styles.imagebox}>
    
    <ImageBackground source={afrcan}  style={styles.image} imageStyle={{ borderRadius: 20}} >

  
   </ImageBackground> 
   <View style={styles.textShow}>
    
         <Text style={styles.textOp}>Fashion Design</Text>
         <Text style={styles.textO}>Help iss get back on her feet</Text>

         <TouchableOpacity 
            onPress={()=>{
              navigation.navigate("DetailsScreen")
          }}
         
         style={styles.containerText}><Text>View Project</Text></TouchableOpacity>
         
    
  </View>
  
   
  
    </View> 
   <View style={styles.imagebox}>
    
    <ImageBackground source={afrcan}  style={styles.image} imageStyle={{ borderRadius: 20}} >

  
   </ImageBackground> 
   <View style={styles.textShow}>
    
         <Text style={styles.textOp}>Fashion Design</Text>
         <Text style={styles.textO}>Help iss get back on her feet</Text>

         <TouchableOpacity style={styles.containerText}><Text>View Project</Text></TouchableOpacity>
         
    
  </View>
  
   
  
    </View> 
  <View style={styles.imagebox}>
    
    <ImageBackground source={afrcan}  style={styles.image} imageStyle={{ borderRadius: 20}} >

  
   </ImageBackground> 
   <View style={styles.textShow}>
    
         <Text style={styles.textOp}>Fashion Design</Text>
         <Text style={styles.textO}>Help iss get back on her feet</Text>

         <TouchableOpacity style={styles.containerText}><Text>View Project</Text></TouchableOpacity>
         
    
  </View>
  
   
  
    </View> 
  

     <View style={styles.imagebox}>
    
    <ImageBackground source={afrcan}  style={styles.image} imageStyle={{ borderRadius: 20}} >

  
   </ImageBackground> 
   <View style={styles.textShow}>
    
         <Text style={styles.textOp}>Fashion Design</Text>
         <Text style={styles.textO}>Help iss get back on her feet</Text>

         <TouchableOpacity style={styles.containerText}><Text>View Project</Text></TouchableOpacity>
         
    
  </View>
  
   
  
    </View>

    
  
   
     
 
  </View>  

  </ScrollView>
<View style={{flex:2, backgroundColor:"white", marginTop:-80, justifyContent:"center"}}>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex:1
      ,
    
    },

    redContainer:{
      flex:1
    },



    image:{
        
        height:350,
        width:320,
        justifyContent:"center",
        // resizeMode: "cover",
       
        opacity:0.5
      },

      imagebox:{
        height:380,
        width:320,
        justifyContent:"center",
        margin:20,
        alignContent:"center",
       
        

         
      },

    

      textShow:{
          height:300,
        //   backgroundColor:"blue",
         marginTop:-200,
         marginLeft:20,
        //  flexDirection:"column",
         borderRadius:30,
         alignContent:"center",
          
      },
    

      textOp:{
          color:"white",
          marginLeft:20,
          // marginTop:30

      },
   

      textO:{
        color:"white",
        marginLeft:20,
        marginTop:30,
        fontWeight:"bold"
    },

    containerText:{
        backgroundColor:"#FD513B",
        marginLeft:20,
        marginTop:30,
        height:40,
        width:100,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
    },

    lastBox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:400,
        // height:100,
        justifyContent:"space-evenly",
        
       
    }
    
   
    

      
}) 


export default WallPage;