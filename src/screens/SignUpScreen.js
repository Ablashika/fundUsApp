import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { createEmailAccount } from "../redux/actions/authActions";

function SignUpScreen({ navigation }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    // passwordAgain:""
  });

  const handleUpdateState = (name, value) => {
    setDetails({ ...details, [name]: value });
  };

  const handleOnsubmit = () => {
    createEmailAccount(details.email, details.password);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.welcomeText}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}> WELCOME!</Text>
        <Text style={{ fontSize: 25, fontWeight: "200" }}>
          sign up to continue.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginHorizontal: 35,
            marginBottom: 7,
          }}
        >
          Email
        </Text>
        <TextInput
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginHorizontal: 30,
            // marginBottom: 20,
            borderColor: "gray",
            backgroundColor: "#E2E6EE",
            borderRadius: 10,
            width: 312,
            height: 35,
            marginBottom: 20,
          }}
          value={details.email}
          onChangeText={(text) => {
            handleUpdateState("email", text);
          }}
          placeholderTextColor="#aaaaaa"
          placeholder="  magnacarter@gmail.com"
        />
      </View>

      {/* <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View> */}

      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginHorizontal: 35,
            marginBottom: 7,
            alignContent: "stretch",
          }}
        >
          Password
        </Text>

        <TextInput
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginHorizontal: 30,
            // marginBottom: 20,
            borderColor: "gray",
            backgroundColor: "#E2E6EE",
            borderRadius: 10,
            width: 312,
            height: 35,
          }}
          value={details.password}
          placeholderTextColor="#aaaaaa"
          placeholder="  Password"
          onChangeText={(text) => {
            handleUpdateState("password", text);
          }}
          secureTextEntry={true}
        />
      </View>
      {/* <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View> */}

      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginHorizontal: 35,
            marginBottom: 8,
            alignContent: "stretch",
          }}
        >
          {" "}
          Confirm Password
        </Text>

        <TextInput
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginHorizontal: 30,
            // marginBottom: 20,
            borderColor: "gray",
            backgroundColor: "#E2E6EE",
            borderRadius: 10,
            width: 312,
            height: 35,
          }}
          placeholderTextColor="#aaaaaa"
          placeholder="confirm Password"
          value={details.confirmPassword}
          onChangeText={(text) => {
            handleUpdateState("passwordAgain", text);
          }}
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            handleOnsubmit(handleOnsubmit);
            navigation.navigate("DashBoard");
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* <View>
                <View style={styles.forgotPassword}>
                    <Text style={{ fontSize: 17 }}>already have an account? </Text>
                    <View>
                        <Text style={{ fontSize: 17,marginBottom:5 }}> sign in</Text>
                        <View style={{
                            backgroundColor: "#FD513B",
                            height: 2,
                            width: 48,
                            borderRadius: 10,
                        }}></View>
                    </View>
                </View>
          </View> */}
      <View style={styles.DonthaveanAccountContainer}>
        <Text style={styles.NoAccountText}>already have an account?</Text>

        <TouchableOpacity
          onPress={() => {
            handleOnSubmit(handleOnSubmit);
            navigation.navigate("DashBoard");
          }}
        >
          <Text style={styles.SignUpText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCF0",
  },
  heading: {
    flexDirection: "row",
    backgroundColor: "red",
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
  },

  image: {
    height: 500,
    width: 500,
    flex: 0.5,
    marginBottom: 40,
  },
  buttonContainer: {
    height: 40,
    width: 217,
    backgroundColor: "#FFFCF0",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    borderRadius: 100,
    // marginLeft: 20,
    marginTop: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#FD513B",
  },
  buttonText: {
    color: "#FD513B",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
  forgotPassword: {
    flexDirection: "row",
    marginLeft: 20,
  },
  welcomeText: {
    alignSelf: "center",
    marginVertical: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  NoAccountText: {
    marginRight: 10,
    fontSize: 17,
  },
  SignUpText: {
    fontSize: 17,
    color: "#067EED",
    borderBottomColor: "#FD513B",

    borderBottomWidth: 2,

    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    // borderColor:'blue'
  },
  DonthaveanAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state,
    user: state,
  };
};

export default connect(mapStateToProps)(SignUpScreen);
