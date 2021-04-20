import React, { useState } from 'react'
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList,
} from 'react-native';
import RNWeb from '../screens/RNWeb'



function PaymentScreen() {

    const  [momoUri, setMomoUri] = useState(null);



    function handleOnchangeText(text) {

        if (text.length === 10) {

            let data = {
                tx_ref: "AW-15" + (1000 + Math.floor(Math.random * 100000)),
                amount: "150",
                currency: "GHS",
                network: "MTN",
                email: "kofoworola203@gmail.com",
                phone_number: text,
                fullname: "John Madakin",
                redirect_url: "https://codetraingh.com",

            };


            fetch('https://api.flutterwave.com/v3/charges?type=mobile_money_ghana', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer FLWSECK-fa78c54835861c84a79271fc6d9b95fe-X',
                    
                },

                body: JSON.stringify(data),

            })

                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    setMomoUri(data.meta.authorization.redirect)  
                })
                .catch((error) => {
                    console.error('Error:', error);
                  });



        }

    }

    function closeWebView() {
        setMomoUri(null);
    }






    return (

        <View style={styles.container}>

            {/* <View style={styles.redContainer}>            
       
     <Text>Payment Info</Text>

  
     </View>  */}





            <View style={styles.blueContainer}>

                <View>
                    <Text>Full name</Text>
                    <TextInput style={styles.placeholder}></TextInput>
                </View>

                <View>
                    <Text>Enter Mobile Money Number</Text>
                    <TextInput
                        onChangeText={handleOnchangeText}
                        style={styles.placeholder}></TextInput>
                </View>


                {/* <View style={styles.dateCvvBox}>
         <View style={styles.boxbox}>
         <Text style={styles.texBox} >Credit Card</Text>
         <View  style={styles.placeholderTwo}></View>
         </View>
         <View style={styles.boxbox}>
         <Text style={styles.texBox}>Credit Card</Text>
         <View  style={styles.placeholderTwo}></View>
         </View>
     </View> 
     <View>
         <Text>Zip Code</Text>
         <View  style={styles.placeholder}></View>
     </View> */}


            </View>
{/* 
            <View style={styles.signUpBox}>
                <TouchableOpacity
                    //        onPress={()=>{
                    //         navigation.navigate("ThankYouScreen")
                    //    }}
                    style={styles.signUpText} >
                    <Text>Confirm Payment</Text>
                </TouchableOpacity>
   
                
            </View> */}

            {momoUri !== null && <RNWeb uri={momoUri}  closeWebView={closeWebView} />}

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:30

        

    },

    // redContainer:{
    //     backgroundColor:"#FD513B",
    //     width:400,
    //     alignItems:"center",
    //     justifyContent:"center",

    //     flex:0.8
    // },


    blueContainer: {
    
         alignItems: "center",
      


    },

    placeholder: {
        backgroundColor: "#E2E6EE",
        height: 40,
        width: 300,
        marginBottom: 20,
        borderRadius: 30,
        marginTop: 10
    },

    signUpBox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",


    },

    signUpText: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#FD513B",
        borderWidth: 2,
        height: 50,
        width: 250,
        borderRadius: 30,
    },

    dateCvvBox: {
        flexDirection: "row",

    },

    placeholderTwo: {
        height: 40,
        width: 100,
        backgroundColor: "#E2E6EE",
        borderRadius: 30,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 10

    },

    boxbox: {
        flexDirection: "column"
    },

    texBox: {
        marginLeft: 50,

    }




})


export default PaymentScreen;