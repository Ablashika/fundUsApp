import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import SignUpScreen from './src/screens/SignUpScreen'
import DashBoard from './src/screens/DashBoard';


export default function App() {
  
const  Stack = createStackNavigator()
  return (
    <NavigationContainer> 
      <Stack.Navigator>
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
   {/* <Stack.Screen name="SignInScreen" component={SignInScreen}/>
   <Stack.Screen
      options={({ navigation }) => ({
        title:"Notifaction",
        headerStyle:{
          backgroundColor:"white"
        },
        headerTintColor:"black",
        headerTitleAlign:"center",
        headerRight:()=>(
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("ProfileDetails")
        }}
          style={styles.profileContainer}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>  
         )
         ,
               
      })} 
   name="NotificationScreen" component={NotificationScreen}/>
   <Stack.Screen name="ProfileDetails" component={ProfileDetails}/>
   <Stack.Screen name="ProfileScreen" component={ProfileScreen}/> */}

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
