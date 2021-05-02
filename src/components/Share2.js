import React from 'react';
import { Share, View, Button,StyleSheet,TouchableOpacity,Text } from 'react-native';

export default function share() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'support my business by donating on the fundUs mobile App',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    
      <View>
      <TouchableOpacity onPress={onShare}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SHARE</Text>
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 217,
    backgroundColor: "#FFF",
    justifyContent: "center",
  alignSelf: "center",
    alignContent:'center',
    borderRadius: 15,
    // marginLeft: 20,
    // marginTop:60,
  marginBottom: 20,
  borderWidth: 1,
        borderColor: '#FD513B',
        color: "#FFF",
        marginTop: 90,
        
  },
  buttonText: {
      color: "#FD513B",
      fontSize: 18,
    alignSelf: 'center',
      fontWeight:'bold'
    },
    title: {
      fontSize:20
  }
})