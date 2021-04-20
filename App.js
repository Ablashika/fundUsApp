import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import SignUpScreen from './src/screens/SignUpScreen'
import DashBoard from './src/screens/DashBoard';
import SignUpScreenB from './src/screens/SignUpScreenB'
import LandingPage from './src/screens/LandingPage';
import LogInScreen from './src/screens/LogInScreen';
import WallPage from './src/screens/WallPage'
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import ThankYouScreen from './src/screens/ThankYouScreen';


export default function App() {
  
const  Stack = createStackNavigator()
  return (
    <NavigationContainer> 
      <Stack.Navigator>

      <Stack.Screen 
     options={{header:()=>null}}
   
   name="LandingPage" component={LandingPage}/> 

    <Stack.Screen 
   
   options={{
    title:"Log In",
    headerStyle:{
      backgroundColor:"#FD513B",
     
    },
    headerTintColor:"white",
    
  
           
  }}
   
   name="LogInScreen" component={LogInScreen}/>      
   <Stack.Screen 
   
   options={{
    title:"Sign Up",
    headerStyle:{
      backgroundColor:"#FD513B"
    },
    headerTintColor:"white",
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
