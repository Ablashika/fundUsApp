import React from 'react';
import LottieView from 'lottie-react-native';
import {  View,Text,StyleSheet } from 'react-native';

export default class ThankYouScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
      return (
          <View styles={styles.mainContainer}>
              <Text>
                  THANK YOU FOR SUPPORTING!
              </Text>
              <LottieView styles={styles.lottie}
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../../assets/medal.json')}
              />
              
              
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        // alignContent: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'blue'
    },
    lottie: {
        height: 200,
        width:400
    }
})