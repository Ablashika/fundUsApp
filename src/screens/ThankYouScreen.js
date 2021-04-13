import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LottieView } from "lottie-react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


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


            ><TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate('PaymentScreen')
                
           }}><Text>OBEYE</Text></TouchableOpacity>
                <Text>OBEYE OBEYIE</Text>
                {/* <LottieView
                    source={require('../../assets/afri')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Home');
                    }}
                /> */}
            </View>
        )
    }
}