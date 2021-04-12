import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from '../fundUsApp/src/screens/SignUpScreen'
import Dashboard from './src/screens/DashBoard';
import PaymentScreen from './src/screens/PaymentScreen';
import LandingPage from './src/screens/LandingPage';
import ProgressBar from './src/screens/ProgressBar';
import WallPage from './src/screens/WallPage';
import LogInScreen from './src/screens/LogInScreen'
import SignUpScreenB from './src/screens/SignUpScreenB';
import SignUpScreenC from './src/screens/SignUpScreenC';
import ThankYouScreen from './src/screens/ThankYouScreen'



export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUpScreenB/> */}
      {/* <LogInScreen/> */}
      {/* <WallPage/> */}
     {/* <ProgressBar/> */}
     {/* <Dashboard/> */}
     {/* <PaymentScreen/> */}
     {/* <SignUpScreen/> */}
      {/* <LandingPage/> */}
      {/* <LogInScreen/> */}
      {/* <SignUpScreenB /> */}
      {/* <SignUpScreenC/> */}
      <ThankYouScreen/>
      <StatusBar style="auto" />
    </View>
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
