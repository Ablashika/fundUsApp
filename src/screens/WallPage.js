// import React, { useEffect, useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   ImageBackground,
//   ScrollView,
// } from "react-native";
// import afrcan from "../../assets/africanshop.jpg";
// import { Entypo } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { getBusinesses } from "../redux/actions/userActions";
// import { connect, useDispatch } from "react-redux";

// function WallPage({ navigation, user, businesses }) {
//   // const {story} = user
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getBusinesses(dispatch);
//   }, []);

//   return (
//     <FlatList
//       numColumns={1}
//       horizontal={false}
//       data={businesses}
//       renderItem={({ item }) => (
//         <View style={styles.container}>
//           <View style={styles.redContainer}>
//             {/* <Text style={{ color:"white", fontWeight:"bold"}}>Find A cause</Text> */}
//           </View>
//           <ScrollView>
//             <View
//               style={{
//                 flex: 4,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: -10,
//               }}
//             >
//               <View style={styles.imagebox}>
//                 <ImageBackground
//                   source={afrcan}
//                   style={styles.image}
//                   imageStyle={{ borderRadius: 20 }}
//                 ></ImageBackground>
//                 <View style={styles.textShow}>
//                   <Text style={styles.textOp}>{item.title}</Text>
//                   <Text style={styles.textO}>{item.story}</Text>

//                   <TouchableOpacity
//                     onPress={() => {
//                       navigation.navigate("DetailsScreen");
//                     }}
//                     style={styles.containerText}
//                   >
//                     <Text>View Project</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </ScrollView>
//           <View
//             elevation={5}
//             style={{
//               flex: 2,
//               backgroundColor: "#FFFCF0",
//               marginTop: -80,
//               justifyContent: "center",
//               borderRadius: 100,
//               shadowColor: "#000000",
//               shadowOpacity: 3,
//               shadowRadius: 2,
//               shadowOffset: {
//                 height: 1,
//                 width: 0,
//               },
//             }}
//           >
//             <View style={styles.lastBox}>
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.navigate("SignUpScreenB");
//                 }}
//               >
//                 <Entypo name="home" size={24} color="black" />
//               </TouchableOpacity>
//               <View>
//                 <Entypo name="share" size={24} color="black" />
//               </View>
//               <View>
//                 <Ionicons name="md-search" size={24} color="black" />
//               </View>
//               <View>
//                 <Ionicons name="ios-settings" size={24} color="black" />
//               </View>
//             </View>
//           </View>
//         </View>
//       )}
//       keyExtractor={(item) => item.name}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#FFFCF0",
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 5,
//   },

//   redContainer: {
//     flex: 1,
//   },

//   image: {
//     height: 350,
//     width: 320,
//     justifyContent: "center",
//     // resizeMode: "cover",

//     opacity: 0.5,
//   },

//   imagebox: {
//     height: 360,
//     width: 320,
//     justifyContent: "center",
//     // margin:20,
//     alignContent: "center",
//   },

//   textShow: {
//     height: 300,
//     //   backgroundColor:"blue",
//     marginTop: -200,
//     marginLeft: 20,
//     //  flexDirection:"column",
//     borderRadius: 30,
//     alignContent: "center",
//   },

//   textOp: {
//     color: "white",
//     // marginLeft:20,
//     // marginTop:30
//   },

//   textO: {
//     color: "white",
//     // marginLeft:20,
//     // marginTop:30,
//     fontWeight: "bold",
//     fontSize: 20,
//   },

//   containerText: {
//     backgroundColor: "#FD513B",
//     marginLeft: 20,
//     marginTop: 30,
//     height: 40,
//     width: 100,
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     // color:'white',
//   },

//   lastBox: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 400,
//     height: 100,
//     justifyContent: "space-evenly",
//   },
//   project: {
//     color: "blue",
//   },
// });

// const mapStateToProps = (state) => {
//   return {
//     auth: state,
//     user: state,
//     businesses: state.businesses,
//   };
// };

// export default connect(mapStateToProps)(WallPage);
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import afrcan from "../../assets/africanshop.jpg";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getBusinesses } from "../redux/actions/userActions";
import { connect, useDispatch } from "react-redux";

function WallPage({ navigation, businesses }) {
  // const {story} = user
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(dispatch);
    getBusinesses(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.redContainer}>
        {/* <Text style={{ color:"white", fontWeight:"bold"}}>Find A cause</Text> */}
      </View>
      <View>
        <FlatList
          numColumns={1}
          horizontal={false}
          data={businesses}
          renderItem={({ item }) => (
            <View>
              <ScrollView>
                <View
                  style={{
                    flex: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -10,
                  }}
                >
                  <View style={styles.imagebox}>
                    <ImageBackground
                      source={afrcan}
                      style={styles.image}
                      imageStyle={{ borderRadius: 20 }}
                    ></ImageBackground>
                    <View style={styles.textShow}>
                      <Text style={styles.textOp}>{item.name}</Text>
                      <Text style={styles.textO}>{item.title}</Text>

                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("DetailsScreen", {
                            item_details: item,
                          });
                        }}
                        style={styles.containerText}
                      >
                        <Text>View Project</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
      <View
        elevation={5}
        style={{
          flex: 2,
          backgroundColor: "#FFFCF0",
          marginTop: -80,
          justifyContent: "center",
          borderRadius: 100,
          shadowColor: "#000000",
          shadowOpacity: 3,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0,
          },
        }}
      >
        <View style={styles.lastBox}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Landing Page");
            }}
          >
            <Entypo name="home" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Entypo name="share" size={24} color="black" />
          </View>
          <View>
            <Ionicons name="md-search" size={24} color="black" />
          </View>
          <View>
            <Ionicons name="ios-settings" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFCF0",
    alignItems: "center",
    justifyContent: "center",
    flex: 5,
  },

  redContainer: {
    flex: 1,
  },

  image: {
    height: 350,
    width: 320,
    justifyContent: "center",
    // resizeMode: "cover",
    borderRadius: 20,
    opacity: 0.6,
  },

  imagebox: {
    borderRadius: 20,
    backgroundColor: "white",
    height: 320,
    width: 320,
    justifyContent: "center",
    margin: 10,
    alignContent: "center",
  },

  textShow: {
    height: 300,
    //   backgroundColor:"blue",
    marginTop: -200,
    marginLeft: 20,
    //  flexDirection:"column",
    borderRadius: 30,
    alignContent: "center",
  },

  textOp: {
    color: "black",
    // marginLeft:20,
    // marginTop:30
  },

  textO: {
    color: "black",
    // marginLeft:20,
    // marginTop:30,
    fontWeight: "bold",
    fontSize: 20,
  },

  containerText: {
    backgroundColor: "white",
    marginLeft: 20,
    marginTop: 30,
    height: 40,
    width: 100,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    // color:'white',
  },

  lastBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 100,
    justifyContent: "space-evenly",
  },
  project: {
    color: "blue",
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state,
    user: state,
    businesses: state.businesses,
  };
};

export default connect(mapStateToProps)(WallPage);
