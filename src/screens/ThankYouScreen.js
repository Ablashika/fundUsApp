import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LottieView } from "lottie-react-native";


export default class ThankYouScreen extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    
                    backgroundColor: 'white'
                }}
            >
                <Text>OBEYE OBEYIE</Text>
                <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Home');
                    }}
                />
            </View>
        )
    }
}