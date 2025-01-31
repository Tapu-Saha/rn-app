import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Post = ({abc, def}) => {

  console.log('abc', abc.title);
  console.log('def', def);


  return (
    <View>
      <View>
        <Text style={styles.title2}>{def} {abc.title}</Text>
        {/* <Image  source={{
          uri: abc.photo,
        }}
        style={{
          height: 100,
          width: '100%'
        }}
        /> */}
        <Text style={styles.title2}>
          {abc.body}
        </Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  title2: {
    color: "white",
    fontWeight: 500,
    fontSize: 20,
    //textAlign: "center",
    marginTop: 10,
    // textAlign: "l",
    marginLeft: 10,
  },
});
