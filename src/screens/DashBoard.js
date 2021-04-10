import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,   
} from 'react-native';
import africanshop from "../../assets/africanshop.jpg"





function Dashboard (){
    
    return(
        
     <View style={styles.container}>            
     
     <View style={styles.redContainer}>            
     

  
     </View>
  

  <View style={styles.imagebox}>
      <Image source={africanshop}  style={styles.image} >

      </Image>
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
    },
    imagebox:{
        flex:5,
        borderRadius:100,
        marginTop:30,
        height:400,
        width:300,

    },

    image:{
        height:350,
        width:300,
        borderRadius:30,

    }


      
}) 


export default Dashboard;