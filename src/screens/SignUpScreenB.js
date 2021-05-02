import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/userActions";

function SignUpScreenB({ navigation, addUser }) {
  const [users, setUser] = useState({
    name: "",
    location: "",
    title: "",
    story: "",
    goal: "",
    // password:"",
  });

  const handleUpdateState = (name, value) => {
    setUser({ ...users, [name]: value });
  };

  const handleOnsubmit = () => {
    addUser(users.name, users.location, users.title, users.story, users.goal);
  };

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 210,
          width: 400,
          // flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button title="upload a picture" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 0, height: 150 }} />
        )}
      </View>

      <ScrollView>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              // marginHorizontal: 35,
              marginBottom: 7,
            }}
          >
            Project Name
          </Text>
          <TextInput
            value={users.name}
            onChangeText={(text) => {
              handleUpdateState("name", text);
            }}
            style={{
              marginTop: 10,
              backgroundColor: "#E2E6EE",
              borderRadius: 10,
              width: 312,
              height: 35,
              // marginBottom: 20
            }}
          ></TextInput>
        </View>

        <View>
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 15,
              // marginHorizontal: 35,
              marginBottom: 7,
            }}
          >
            Title
          </Text>
          <TextInput
            value={users.title}
            onChangeText={(text) => {
              handleUpdateState("title", text);
            }}
            style={{
              marginTop: 10,
              backgroundColor: "#E2E6EE",
              borderRadius: 10,
              width: 312,
              height: 35,
              // marginBottom: 20
            }}
          ></TextInput>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 10,
              // marginHorizontal: 35,
              marginVertical: 3,
            }}
          >
            Location
          </Text>
          <TextInput
            value={users.location}
            onChangeText={(text) => {
              handleUpdateState("location", text);
            }}
            placeholderTextColor="gray"
            placeholder=" magnacarter@gmail.com"
            style={{
              marginTop: 10,
              backgroundColor: "#E2E6EE",
              borderRadius: 10,
              width: 312,
              height: 35,
              marginVertical: 3,
              // marginBottom: 20
            }}
          ></TextInput>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 10,
              marginVertical: 3,
            }}
          >
            Tell your story
          </Text>
          <TextInput
            placeholderTextColor="gray"
            placeholder="tell your story"
            value={users.story}
            onChangeText={(text) => {
              handleUpdateState("story", text);
            }}
            style={{
              marginTop: 10,
              backgroundColor: "#E2E6EE",
              borderRadius: 10,
              width: 312,
              height: 35,
              marginVertical: 3,
              // marginBottom: 20
            }}
          ></TextInput>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 10,
              marginVertical: 3,
            }}
          >
            goal
          </Text>
          <TextInput
            placeholderTextColor="gray"
            placeholder="goal"
            value={users.goal}
            onChangeText={(text) => {
              handleUpdateState("goal", text);
            }}
            style={{
              marginTop: 10,
              backgroundColor: "#E2E6EE",
              borderRadius: 10,
              width: 312,
              height: 35,
              marginVertical: 3,
              // marginBottom: 20
            }}
          ></TextInput>
        </View>

        <View></View>
      </ScrollView>

      <View
        style={{
          marginBottom: 50,
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            handleOnsubmit(handleOnsubmit);
            navigation.navigate("DashBoard");
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    height: 40,
    width: 217,

    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    borderRadius: 100,
    // marginLeft: 20,
    // marginTop: 0,
    // marginBottom: 20,
    borderWidth: 2,
    borderColor: "#FD513B",
  },
  buttonText: {
    color: "#FD513B",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => {
  return {
    //  auth:state,
    user: state,
  };
};
export default connect(mapStateToProps, { addUser })(SignUpScreenB);
