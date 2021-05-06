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
import Share from "../components/Share3";




function DetailsScreen({
  navigation,
  businesses,
  route: {
    params: { item_details },
  },
}) {
  const dispatch = useDispatch();
  console.log("Details => ", item_details);

  useEffect(() => {
    console.log(dispatch);
    getBusinesses(dispatch);
  }, []);

  return (
      <View style={styles.container}>
          
      <View style={styles.imagebox}>
        <Image source={africanshop} style={styles.image}></Image>
      </View>
      <View >
        <View
          style={{
            height: 100,
            width: 370,
            // justifyContent: "center",
                      alignItems: "flex-start",
                      marginLeft: 25
            
          }}
        >
          <View >
            <Text style={{  fontWeight:'bold',fontSize:18,marginVertical:10 ,alignSelf:'flex-start',color:'#FD513B',  }}>
              {item_details.title}
            </Text>
            <Text style={{ fontSize:15, marginBottom:0, alignSelf: 'flex-start' }}>{item_details.story}</Text>
            {/* <Text
              style={{fontSize:15,fontWeight: 'bold',alignSelf:'flex-end'}} 
            >
              goal:{item_details.goal}
            </Text> */}
          </View>
        </View>

        {/* <FlatList
          numColumns={1}
          horizontal={false}
          data={businesses}
          renderItem={({ item }) => (
           
          )}
          keyExtractor={(item) => item.name}
        /> */}
      </View>
      <View Style={styles.goal}>
                       <Text style={{ fontSize: 15, fontWeight: "400", alignSelf: 'center', marginTop:20}}>Amount Raised:</Text>
                       <Text style={{fontSize:19,fontWeight: 'bold',alignSelf:'center'}} >1500gh</Text>
                       <Progress.Bar style={styles.bar} progress={0.2} width={340} color={"#FD513B"} height={10} />
                       <Text
              style={{fontSize:25,fontWeight: 'bold',alignSelf:'flex-end',color:'green'}} 
            >
              goal:{item_details.goal}
            </Text>
                   </View>
        
                   <View style={styles.background}>
                   

                   <View style={styles.lastBox}>
                <TouchableOpacity 
                  onPress={()=>{
                    navigation.navigate("PaymentScreen")
                }}
                style={{ height: 40, backgroundColor: "#FD513B", width: 180, justifyContent: "center", alignItems: "center", borderRadius: 15, fontWeight:'bold',marginTop:35 }}><Text style={{color:"white", fontWeight: 'bold',fontSize:15}}>SUPPORT</Text></TouchableOpacity>
                </View>
                <View>
                     <Share/>
                   </View>

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
    // width: 340,
    // width: 400,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 200,
    width: 350,
    justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
    
  },

  textbox: {
    flex: 1.4,
    // marginTop: 20,
    // height: 20,
    // width: 400,
    // justifyContent: "center",
    // alignItems: "center",
  },

  sissBox: {
    backgroundColor: "white",
    // flex: 1,
    // width: 250,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: -100,
    // flexDirection: "column",
  },

  
    background: {
        marginTop: 10,
        backgroundColor: "#F8ECEA",
        width: 280,
        height: 150,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        alignSelf:'center'
    },
    bar: {
       marginVertical:10
    },
    // goal: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     alignContent:'center'
    // },
    share: {
        flex:1
    },
    lastBox: {
        
    }
   
    


});

const mapStateToProps = (state) => {
  return {
    auth: state,
    user: state,
    businesses: state.businesses,
  };
};

export default connect(mapStateToProps)(DetailsScreen);
