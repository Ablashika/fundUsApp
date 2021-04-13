// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native'
// import {createStackNavigator} from '@react-navigation/stack'
// import SignUpScreen from '../fundUsApp/src/screens/SignUpScreen'
// import Dashboard from './src/screens/DashBoard';
// import PaymentScreen from './src/screens/PaymentScreen';
// import LandingPage from './src/screens/LandingPage';
// import DetailsScreen from './src/screens/DetailsScreen';


// const  Stack = createStackNavigator()

// export default function Navigation() {
//     return (
//         <NavigationContainer> 
//       <Stack.Navigator
//   screenOptions={{
//     title:"Notification",
//     headerStyle:{
//       backgroundColor:"white"
//     },
//     headerRight:()=>(
//       <TouchableOpacity
//       onPress={()=>{
//         navigation.navigate("ProfileDetails")
//     }}
//       style={styles.profileContainer}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>  
//      ),
//     headerTintColor:"black",
//     headerTitleAlign:"center"

    
//   }}
// >
//    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
   
//    <Stack.Screen name="DashBoard" component={Dashboard}/>
//    {/* <Stack.Screen name="SignInScreen" component={SignInScreen}/>
//    <Stack.Screen
//       options={({ navigation }) => ({
//         title:"Notifaction",
//         headerStyle:{
//           backgroundColor:"white"
//         },
//         headerTintColor:"black",
//         headerTitleAlign:"center",
//         headerRight:()=>(
//           <TouchableOpacity
//           onPress={()=>{
//             navigation.navigate("ProfileDetails")
//         }}
//           style={styles.profileContainer}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>  
//          )
//          ,
               
//       })} 
//    name="NotificationScreen" component={NotificationScreen}/>
//    <Stack.Screen name="ProfileDetails" component={ProfileDetails}/>
//    <Stack.Screen name="ProfileScreen" component={ProfileScreen}/> */}

// </Stack.Navigator>

//         </NavigationContainer>
//     )
// }
