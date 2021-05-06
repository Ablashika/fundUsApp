












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
    width: 150,
    backgroundColor: "#F8ECEA",
    justifyContent: "center",
  alignSelf: "center",
    alignContent:'center',
    borderRadius: 15,

  marginBottom: 30,
  borderWidth: 1,
        borderColor: '#FD513B',
        color: "#FFF",
         marginTop:15

        
  },
  buttonText: {
      color: "#FD513B",
      fontSize: 15,
    alignSelf: 'center',
      fontWeight:'bold'
    },
    title: {
      fontSize:20
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