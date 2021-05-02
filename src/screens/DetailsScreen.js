import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import africanshop from "../../assets/africanshop.jpg";
import * as Progress from "react-native-progress";
import { getBusinesses } from "../redux/actions/userActions";
import { connect, useDispatch } from "react-redux";

function DetailsScreen({ navigation, businesses }) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(dispatch);
    getBusinesses(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imagebox}>
        <Image source={africanshop} style={styles.image}></Image>
      </View>
      <View style={{ height: 100, width: 400 }}>
        <FlatList
          numColumns={1}
          horizontal={false}
          data={businesses}
          renderItem={({ item }) => (
            <View
              style={{
                height: 100,
                width: 400,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.sissBox}>
                <Text style={{ marginTop: 20, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text>{item.story}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={{ margin: 10 }}>amount raised</Text>
        <Text style={{ marginTop: 10, fontWeight: "bold" }}> 150gh</Text>
        <Progress.Bar
          style={{ marginTop: 10 }}
          progress={0.4}
          width={250}
          color={"#FD513B"}
        />
        <Text style={{ marginTop: 5 }}>Goal:5000ghc</Text>
      </View>
      <View style={styles.lastBox}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PaymentScreen");
          }}
          style={{
            height: 40,
            backgroundColor: "#FD513B",
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  redContainer: {
    backgroundColor: "#FD513B",
    width: 400,
    alignItems: "center",
    justifyContent: "center",

    flex: 0.8,
  },
  imagebox: {
    flex: 2,
    marginTop: 10,
    height: 200,
    width: 360,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 200,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  },

  textbox: {
    flex: 1.6,
    marginTop: 20,
    height: 20,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  sissBox: {
    backgroundColor: "white",
    flex: 0.8,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -100,
  },

  lastBox: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state,
    user: state,
    businesses: state.businesses,
  };
};

export default connect(mapStateToProps)(DetailsScreen);
