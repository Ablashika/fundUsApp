import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, StyleSheet,Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from "../components/Share";

export default class ThankYouScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 100);
  };
  
  

  render() {
    return (
      
        
          
      <View style={styles.mainContainer}>
        <View style={styles.Container}>
          <Text style={styles.thanksLabel}>
            THANK YOU FOR SUPPORTING!
          </Text>
          <Text style={styles.medal}>
            you just earned yourself a gold medal
          </Text>
        </View>
        <View>
          <LottieView style={styles.LottieView}
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../../assets/medal.json')}
        />
        </View>
        
        
        
        <View style={styles.Share}>
          <Share/>
        </View>
        
        

             
              
      </View>

      
      
        
        
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
    backgroundColor: '#FFFCF0',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    alignItems: 'center',

    
      
      
         
      },
    
  thanksLabel: {
    fontSize: 25,
    fontWeight:'bold'
      
  },
  LottieView: {
    // justifyContent: "center",
    // alignContent: 'center',
    // alignSelf: 'center',
    // marginLeft:20,
    height: 300,
    marginVertical:10
  },
  buttonContainer: {
   
  },
  buttonContainer: {
    height: 40,
    width: 217,
    backgroundColor: "#FFFCF0",
    justifyContent: "center",
  alignSelf: "center",
    alignContent:'center',
    borderRadius: 100,
    // marginLeft: 20,
    marginTop:60,
  marginBottom: 20,
  borderWidth: 1,
    borderColor:'#FD513B'
  },
  buttonText: {
      color: "#FD513B",
      fontSize: 18,
    alignSelf: 'center',
      fontWeight:'bold'
  },
  medal: {
    fontSize: 20,
    fontWeight: '100',
    alignSelf: 'center',
    marginBottom:5
  }
})