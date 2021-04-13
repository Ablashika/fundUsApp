import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,   
} from 'react-native';
import africanshop from "../../assets/africanshop.jpg"
import * as Progress from 'react-native-progress';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';





function Dashboard ({navigation}){
    
    return(
        
     <View style={styles.container}>            
     
     {/* <View style={styles.redContainer}>            
     <Text style={{ color:"white", fontWeight:"bold"}}>My dashboard</Text>

     </View> */}
  

  <View style={styles.imagebox}>
      <Image source={africanshop}  style={styles.image} >
      </Image>
  </View>
     
  <View style={styles.textbox}>
      <Text  style={{ margin:10, fontWeight:"bold"}}>Helping ISS get back on her feet</Text>
 <Progress.Bar progress={0.4} width={250} color={"#FD513B"} />
  </View>


     
  <View style={styles.lastBox}>
  <TouchableOpacity 
   onPress={()=>{
    navigation.navigate("WallPage")
}}
  ><Entypo name="home" size={24} color="black" /></TouchableOpacity>
  
  <TouchableOpacity onPress={()=>{
                 navigation.navigate("SignUpScreenB")
            }}><FontAwesome5 name="pen" size={24} color="black" /></TouchableOpacity>
 <TouchableOpacity><Ionicons name="md-settings" size={24} color="black" /></TouchableOpacity>
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
       
        flex:0.8
    },
    imagebox:{
        flex:3,
        borderRadius:100,
        marginTop:30,
        height:400,
        width:300,
        backgroundColor:"red"

    },

    image:{
        height:350,
        width:300,
        borderRadius:30,

    },

    textbox:{
        flex:1.4,
        marginTop:20,
        height:20,
        width:400,
        // backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center"
    },

    lastBox:{
        flexDirection:"row",
        flex:0.8,
        alignItems:"center",
        justifyContent:"center",
        width:400,
        justifyContent:"space-evenly",
        borderWidth:0.5,
        borderColor:"grey"
    }

    


      
}) 


export default Dashboard;