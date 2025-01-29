import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const HomeScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const { myName, myEmail } = route.params;

  const handleLogin = () => {
    navigation.navigate("Post", {
      myName: myName,
      myEmail: myEmail,
    });
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <View>
        <Text style={styles.title}>Welcome {myName}</Text>
        <Text style={styles.title}>Welcome {myEmail}</Text>
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.font}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: 400,
    fontSize: 23,
    textAlign: "center",
    marginTop: 10,
  },

  button: {
    borderWidth: 3,
    backgroundColor: "grey",
    width: "50%",
    marginHorizontal: "auto",
    marginTop: 10,
    borderRadius: 10,
  },
  font: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});
