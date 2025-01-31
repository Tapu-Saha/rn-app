import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Post from "../components/Post";

const HomeScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const { myName, myEmail } = route.params;

  const handleLogin = () => {
    navigation.navigate("Post");
  };

  const [postList, setPostList] = useState([]);
  const getDataFromAPi = () => {
    fetch("https://jsonplaceholder.typicode.com/pos").then(
      async (res) => {
        const dataFromAPi = await res.json();
        setPostList(dataFromAPi)
      }
    );
  };


  

  return (
    <ScrollView
      style={{
        backgroundColor: "black",
        // flex: 1,
      }}
    >
      <View>
        <Text style={styles.title}>{myName}</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          width: "30%",
          marginHorizontal: "auto",
        }}
        onPress={getDataFromAPi}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Get Data
        </Text>
      </TouchableOpacity>

      <Image
        style={styles.image}
        source={{
          uri: "https://cdn.britannica.com/84/203584-050-57D326E5/speed-internet-technology-background.jpg?w=600&q=60",
        }}
      />
      {postList.map((item, index) => {
        return <Post abc={item} def={index} />;
      })}
      {/* <View
        style={{
          marginBottom: "90%",
        }}
      ></View> */}
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: 500,
    fontSize: 20,
    //textAlign: "center",
    marginTop: 10,
    textAlign: "right",
    marginLeft: 10,
  },

  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
});
