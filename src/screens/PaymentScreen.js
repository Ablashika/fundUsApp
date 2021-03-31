import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,  
} from 'react-native';



function PaymentScreen (){
    
    return(
        
     <View style={styles.container}>            
     
     <View style={styles.redContainer}>            
       
     <Text>Payment Info</Text>

  
     </View>



     

     <View style={styles. blueContainer}>            
     
     <View>
         <Text>Full name</Text>
         <View  style={styles.placeholder}></View>
     </View>

     <View>
         <Text>Credit Card</Text>
         <View  style={styles.placeholder}></View>
     </View>

    
     <View style={styles.dateCvvBox}>
         <View style={styles.boxbox}>
         <Text style={styles.texBox} >Credit Card</Text>
         <View  style={styles.placeholderTwo}></View>
         </View>
         <View style={styles.boxbox}>
         <Text style={styles.texBox}>Credit Card</Text>
         <View  style={styles.placeholderTwo}></View>
         </View>
     </View>
     <View>
         <Text>Zip Code</Text>
         <View  style={styles.placeholder}></View>
     </View>

  
     </View>

     <View style={styles.signUpBox}>
         <View style={styles.signUpText} >
             <Text>Confirm Payment</Text>
         </View>

         <Text>Verify that thus info is correct</Text>
     </View>

    

    </View>


)
}

const styles = StyleSheet.create({
    container: {
      
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

   
    blueContainer:{
        backgroundColor:"#fff",
        
        alignItems:"center",
        justifyContent:"center",
       
        flex:4.2,
    },

    placeholder:{
        backgroundColor:"#E2E6EE",
        height:40,
        width:300,
        marginBottom:20,
        borderRadius:30,
        marginTop:10
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

    dateCvvBox : {
        flexDirection:"row",
        
    },

    placeholderTwo :{
        height:40,
        width:100,
        backgroundColor:"#E2E6EE",
        borderRadius:30,
        marginRight:50,
        marginLeft:50,
        marginTop:10

    },

    boxbox:{
        flexDirection:"column"
    },

    texBox:{
        marginLeft:50,
        
    }



      
}) 


export default PaymentScreen