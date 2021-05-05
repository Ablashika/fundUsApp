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
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { getBusinesses } from "../redux/actions/userActions";
import { connect, useDispatch } from "react-redux";
import Share from "../components/Share2";
import { ScrollView } from "react-native-gesture-handler";

function Dashboard({ navigation, businesses }) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(dispatch);
    getBusinesses(dispatch);
  }, []);
  return (
    <View style={styles.container}>
      {/* <View style={styles.redContainer}>
     <Text style={{ color:"white", fontWeight:"bold"}}>My dashboard</Text>

     </View> */}

      <View style={styles.imagebox}>
        <Image source={africanshop} style={styles.image}></Image>
      </View>
      <View></View>

      <View style={styles.share}>
        <FlatList
          numColumns={1}
          horizontal={false}
          data={businesses}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  alignSelf: "flex-start",
                  marginHorizontal: 20,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                  marginLeft: 20,
                }}
              >
                My Story:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginBottom: 30,
                  alignSelf: "flex-start",
                  marginHorizontal: 20,
                }}
              >
                {item.story}
              </Text>
              <Text
                style={{
                  marginTop: -20,
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                  marginHorizontal: 20,
                }}
              >
                Goal:{item.goal}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={{ margin: 5 }}>amount raised</Text>
        <Text style={{ marginTop: 5, fontWeight: "bold" }}> 150gh</Text>
        <Progress.Bar
          style={{ marginTop: 10 }}
          progress={0.4}
          width={250}
          color={"#FD513B"}
        />
      </View>

      <View></View>

      <View
        style={{
          marginBottom: 50,
          height: 30,
          width: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Share />
      </View>

      <View style={styles.lastBox}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WallPage");
          }}
        >
          <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUpScreenB");
          }}
        >
          <FontAwesome5 name="pen" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="md-settings" size={24} color="black" />
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

  share: {
    flex: 1.2,
    marginTop: 140,
    height: 80,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },

  imagebox: {
    flex: 1,
    borderRadius: 100,
    marginTop: 30,
    height: 180,
    width: 300,
    // backgroundColor: "red",
  },

  image: {
    height: 200,
    width: 300,
    borderRadius: 30,
  },

  textbox: {
    // backgroundColor: "red",
    flex: 1.1,
    // marginTop: 80,
    height: 120,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  lastBox: {
    flexDirection: "row",
    backgroundColor: "white",
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    justifyContent: "space-evenly",
    borderWidth: 0.5,
    borderColor: "grey",
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state,
    user: state,
    businesses: state.businesses,
  };
};

export default connect(mapStateToProps)(Dashboard);

// import React, { useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import africanshop from "../../assets/africanshop.jpg";
// import * as Progress from "react-native-progress";
// import { Entypo } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";
// import Share from "../components/Share2";

// function Dashboard({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imagebox}>
//         <Image source={africanshop} style={styles.image}></Image>
//       </View>
//       <View Style={styles.goal}>
//         <Text
//           style={{
//             fontSize: 15,
//             fontWeight: "400",
//             alignSelf: "center",
//             marginTop: 20,
//           }}
//         >
//           Amount Raised:
//         </Text>
//         <Text style={{ fontSize: 19, fontWeight: "bold", alignSelf: "center" }}>
//           150gh
//         </Text>
//         <Progress.Bar
//           style={styles.bar}
//           progress={0.2}
//           width={340}
//           color={"#FD513B"}
//           height={10}
//         />
//         <Text
//           style={{ fontSize: 15, fontWeight: "bold", alignSelf: "flex-end" }}
//         >
//           Goal:900gh
//         </Text>
//       </View>

//       <View style={styles.textbox}>
//         <Text
//           style={{
//             fontWeight: "bold",
//             fontSize: 22,
//             marginVertical: 20,
//             alignSelf: "center",
//           }}
//         >
//           {"Support Aunty Siisi get a new sewing machine."}
//         </Text>

//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: "bold",
//             alignSelf: "flex-start",
//             marginLeft: 20,
//           }}
//         >
//           My Story:
//         </Text>
//         <Text
//           style={{
//             fontSize: 15,
//             marginBottom: 10,
//             alignSelf: "flex-start",
//             marginHorizontal: 20,
//           }}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
//           rutrum odio. Fusce convallis ultricies enim a tincidunt. Vivamu
//         </Text>
//       </View>
//       <View style={styles.share}>
//         <Share />
//       </View>

//       <View
//         elevation={5}
//         style={{
//           backgroundColor: "#FFFCF0",
//           marginTop: -80,
//           justifyContent: "center",
//           borderRadius: 15,
//           shadowColor: "#000000",
//           shadowOpacity: 3,
//           shadowRadius: 2,
//           shadowOffset: {
//             height: 1,
//             width: 0,
//           },
//         }}
//         style={styles.lastBox}
//       >
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("WallPage");
//           }}
//         >
//           <Entypo name="home" size={24} color="black" />
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("SignUpScreenB");
//           }}
//         >
//           <FontAwesome5 name="pen" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="md-settings" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     //   justifyContent: 'center',
//   },

//   image: {
//     height: 250,
//     width: 370,
//     borderRadius: 15,
//     marginTop: 12,
//     shadowColor: "#202020",
//     shadowOffset: { width: 0, height: 0 },
//     shadowRadius: 5,
//   },

//   textbox: {
//     flex: 1,
//     // marginTop:2,
//     // height:20,
//     // width:400,
//     // backgroundColor:"blue",
//     // justifyContent:"center",
//     // alignItems: "flex-start",
//     marginBottom: 0,
//   },

//   lastBox: {
//     flexDirection: "row",
//     flex: 0.5,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 400,
//     justifyContent: "space-evenly",
//     borderWidth: 0.5,
//     borderColor: "grey",

//     // marginTop:-200
//   },
//   bar: {
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   goal: {
//     justifyContent: "center",
//     alignItems: "center",
//     alignContent: "center",
//   },
//   share: {
//     flex: 1,
//   },
// });

// export default Dashboard;
