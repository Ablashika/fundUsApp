import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import SignUpScreen from '../screens/SignUpScreen'
import DashBoard from '../screens/DashBoard';
import SignUpScreenB from '../screens/SignUpScreenB'
import LandingPage from '../screens/LandingPage';
import LogInScreen from '../screens/LogInScreen';
import WallPage from '../screens/WallPage'
import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ThankYouScreen from '../screens/ThankYouScreen';


export default function AppContainer() {
  
const  Stack = createStackNavigator()
  return (
   
      <NavigationContainer> 
      <Stack.Navigator>

      <Stack.Screen 
   
   options={{
    header:()=>null
    
  
           
  }}
   
   name="LandingPage" component={LandingPage}/> 

    <Stack.Screen 
   
   options={{
    // title:"",
    // headerStyle:{
    //   backgroundColor:"#FD513B"
    // },
    
  
           
  }}
   
   name="LogInScreen" component={LogInScreen}/>      
   <Stack.Screen 
   
   options={{
    title:"Sign Up",
    headerStyle:{
      backgroundColor:"#FD513B"
    },
    // headerTintColor:"white",
    headerTitleAlign:"center",
  
           
  }}
   
   name="SignUpScreen" component={SignUpScreen}/>
   
   <Stack.Screen 
   options={{
    title:"My DashBoad",
    headerStyle:{
      backgroundColor:"#FD513B"
    },
    headerTintColor:"white",
    headerTitleAlign:"center",
  
           
  }}
   name="DashBoard" component={DashBoard}/>
    <Stack.Screen 
   options={{
    // title:"My DashBoad",
    headerStyle:{
      backgroundColor:"#FD513B"
    },
    headerTintColor:"white",
    headerTitleAlign:"center",
  
           
  }}
   name="SignUpScreenB" component={SignUpScreenB}/>

<Stack.Screen 
   options={{
    // title:"My DashBoad",
    headerStyle:{
      backgroundColor:"#FD513B"
    },
    headerTintColor:"white",
    headerTitleAlign:"center",
  
           
  }}
   name="WallPage" component={WallPage}/>
   
<Stack.Screen 
   options={{
    // title:"My DashBoad",
    headerStyle:{
      backgroundColor:"#FD513B"
    },
    headerTintColor:"white",
    headerTitleAlign:"center",
  
           
  }}
   name="DetailsScreen" component={DetailsScreen}/>
      
<Stack.Screen 
   options={{
    // title:"My DashBoad",
    headerStyle:{
      backgroundColor:"#FD513B"
    },
    headerTintColor:"white",
    headerTitleAlign:"center",
  
           
  }}
   name="PaymentScreen" component={PaymentScreen}/>

      
<Stack.Screen 
   options={{
    
    headerStyle:{
      backgroundColor:"#FD513B"
    },
    headerTintColor:"white",
    headerTitleAlign:"center",
  
           
  }}
   name="ThankYouScreen" component={ThankYouScreen}/>

</Stack.Navigator>

        </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
