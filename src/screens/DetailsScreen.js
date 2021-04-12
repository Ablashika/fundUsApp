import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,   
} from 'react-native';
import africanshop from "../../assets/africanshop.jpg"
import * as Progress from 'react-native-progress';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';





function DetailsScreen (){
    
    return(
        
     <View style={styles.container}>            
     
     <View style={styles.redContainer}>            
     <Text style={{ color:"white", fontWeight:"bold"}}>My dashboard</Text>

     </View>
  

  <View style={styles.imagebox}>
      <Image source={africanshop}  style={styles.image} >
      </Image>
  </View>

      <View style={styles.sissBox}>
      <Text style={{ marginTop:20, fontWeight:"bold"}}>SISS Fashion</Text>
      <Text >Soliciting funds for a new mwchanical sewing machine</Text>
      </View>
     
  <View style={styles.textbox}>
      <Text  style={{ margin:10}}>amount raised</Text>
      <Text style={{ marginTop:10, fontWeight:"bold"}}> 150gh</Text>
 <Progress.Bar style={{ marginTop:10}}  progress={0.4} width={250} color={"#FD513B"} />
 <Text style={{ marginTop:5,}}>Goal:5000ghc</Text>
  </View>


     
  <View style={styles.lastBox}>
 
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
        flex:2,
        marginTop:10,
        height:200,
        width:360,   
        width:400,
        alignItems:"center",
        justifyContent:"center",
       

    },

    image:{
        height:200,
        width:350,
        justifyContent:"center",
        alignItems:"center"

    },

    textbox:{
        flex:1.6,
        marginTop:20,
        height:20,
        width:400,
        justifyContent:"center",
        alignItems:"center"
    },

    sissBox:{
        flex:0.8,
        width:250,
        justifyContent:"flex-end",
        alignItems:"flex-start",
        marginLeft:-100
    },
   

    lastBox:{
        flex:1
    }


   

    


      
}) 


export default DetailsScreen;