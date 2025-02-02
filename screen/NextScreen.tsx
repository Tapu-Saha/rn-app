import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NewPost from '../components/NewPost';


const NextScreen = () => {
  const navigation = useNavigation();
   const [postList, setPostList] = useState([]);
  const getDataFromAPi = () => {
    fetch("https://jsonplaceholder.org/users").then(
      async (response) => {
        const dataFromAPi = await response.json();
        setPostList(dataFromAPi);
      }
    );
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          width: "20%",
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
      {postList.map((item, index) => {
        return <NewPost name={item} serial={index} />;
      })}
    </ScrollView>
  );
};

export default NextScreen;
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
});
