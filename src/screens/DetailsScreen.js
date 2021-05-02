import React, { useEffect } from 'react'
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList,
} from 'react-native';
import africanshop from "../../assets/africanshop.jpg"
import * as Progress from 'react-native-progress';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Share from "../components/Share3";
import { ScrollView } from 'react-native-gesture-handler';





function DetailsScreen({navigation}) {

    return (

        
        
            <View style={styles.container}>            
            
             <View style={styles.imagebox}>
                 <Image source={africanshop}  style={styles.image} >
                  </Image>
                   </View>
                   <View Style={styles.goal}>
                       <Text style={{ fontSize: 15, fontWeight: "400", alignSelf: 'center', marginTop:20}}>Amount Raised:</Text>
                       <Text style={{fontSize:19,fontWeight: 'bold',alignSelf:'center'}} >150gh</Text>
                       <Progress.Bar style={styles.bar} progress={0.2} width={340} color={"#FD513B"} height={10} />
                       <Text style={{fontSize:15,fontWeight: 'bold',alignSelf:'flex-end'}} >Goal:900gh</Text>
       
                   </View>
        
                       <View style={styles.textbox}>
                       
                          <Text  style={{ fontWeight:'bold',fontSize:22,marginVertical:17 ,alignSelf:'center'}}>{'Support Aunty Siisi get a new sewing machine.'}</Text>
        
                  
                         <Text style={{fontSize:20,fontWeight: "bold",alignSelf:'flex-start',marginLeft:20}}>My Story:</Text>
                         <Text style={{ fontSize:15, marginBottom:0, alignSelf: 'flex-start', marginHorizontal: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at rutrum odio.
                          Fusce convallis ultricies enim a tincidunt. Vivamus porttitor ipsum in turpis convallis,
                          ac pellentesque nunc auctor. Phasellus aliquet gravida risus, quis ornare erat porta in.
                          Cras lectus quam, dapibus euismod lectus quis, fermentum rutrum augue.
                         </Text>
                          
            </View>
            
            <View style={styles.background}>
                   

                   <View style={styles.lastBox}>
                <TouchableOpacity 
                  onPress={()=>{
                    navigation.navigate("PaymentScreen")
                }}
                style={{ height: 40, backgroundColor: "#FD513B", width: 180, justifyContent: "center", alignItems: "center", borderRadius: 15, fontWeight:'bold',marginTop:15 }}><Text style={{color:"white", fontWeight: 'bold',fontSize:15}}>SUPPORT</Text></TouchableOpacity>
                </View>
                <View>
                     <Share/>
                   </View>

            </View>
                    
               
       
        
        
            
        
            
       
            
           
            
       
           
       
           </View>
       
       
       )
       }
       
       const styles = StyleSheet.create({
           container: {
              flex:1, 
             backgroundColor: '#fff',
             alignItems: 'center',
           //   justifyContent: 'center',
           
           },
       
           
           
       
           image:{
               height:200,
               width:370,
               borderRadius: 15,
               marginTop: 12,
               shadowColor: '#202020',
         shadowOffset: {width: 0, height: 0},
         shadowRadius: 5,
       
           },
       
           textbox:{
            //    flex:1,
               // marginTop:2,
               // height:20,
               // width:400,
               // backgroundColor:"blue",
               // justifyContent:"center",
               // alignItems: "flex-start",
               marginBottom: 0,
               
           },
       
           lastBox:{
               flexDirection:"row",
            //    flex:0.5,
               alignItems:"center",
               justifyContent:"center",
               width:400,
               justifyContent:"space-evenly",
               borderWidth:0.5,
               borderColor: "grey",
               // marginTop:-200
           },
           bar: {
               marginTop: 20,
               marginBottom:10
           },
           goal: {
               justifyContent: 'center',
               alignItems: 'center',
               alignContent:'center'
           },
           share: {
               flex:1
           },
           lastBox: {
            flex: 1
           },
           background: {
               marginTop: 20,
               backgroundColor: "#F8ECEA",
               width: 280,
               height: 150,
            //    alignContent: 'center',
            //    justifyContent: 'center',
               alignItems: 'center',
               borderRadius: 15
           }
    
    
    
       
           
       
       
             
       }) 
       
       
       export default DetailsScreen;
