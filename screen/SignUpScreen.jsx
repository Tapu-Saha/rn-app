import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const handleButton = () => {
    navigation.navigate("Login");
   
   };
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
        //flex: 1,
      }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Sign Up</Text>
        </View>
        <View>
          <TextInput
            placeholder="First Name"
            style={styles.inputContainer}
            // placeholderTextColor={'white'}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.inputContainer}
            // placeholderTextColor={'white'}
          />
          <TextInput
            placeholder="Enter your Email"
            style={styles.inputContainer}
            // placeholderTextColor={'white'}
          />
          <TextInput
            placeholder="New Password:"
            style={styles.inputContainer}
            // placeholderTextColor={'white'}
          />
          <TextInput
            placeholder="Confirm Password:"
            style={styles.inputContainer}
            // placeholderTextColor={'white'}
          />
        </View>
        <TouchableOpacity onPress={handleButton}>
        <View style={styles.button}>
                <Text style={styles.font}>Submit</Text>
              </View>
              </TouchableOpacity>
      </View>
      </ScrollView>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C2C",
    borderWidth: 5,
    height: "70%",
    //flex: 1,
    marginTop: "30%",
    marginBottom: "30%",
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 30,
  },
  title: {
    color: "white",
    fontWeight: 400,
    fontSize: 23,
    textAlign: "center",
    marginTop: 10,
  },

  inputContainer: {
    borderWidth: 1,
    //height:50,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 3,
  },
  button: {
    borderWidth: 3,
    backgroundColor: "grey",
    width: "50%",
    marginHorizontal: "auto",
    marginTop:10,
    borderRadius:10
  },
  font: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});
