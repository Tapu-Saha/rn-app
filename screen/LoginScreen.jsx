import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [name,setName] = useState();
  const [email, setEmail] = useState();
  const handleLogin = () => {
    navigation.navigate("Home", {
      myName: name,
      myEmail: email
    });
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Login</Text>
        </View>
        <View>
          <TextInput
            placeholder="Name"
            style={styles.inputContainer}
            value={name}
            onChangeText={setName}
            
            // placeholderTextColor={'white'}
          />

          <TextInput
            placeholder="Email"
            style={styles.inputContainer}
            value={email}
            onChangeText={setEmail}
            // placeholderTextColor={'white'}
          />

          <TextInput
            placeholder="Password:"
            style={styles.inputContainer}
            secureTextEntry

            // placeholderTextColor={'white'}
          />
        </View>
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.font}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C2C",
    borderWidth: 5,
    height: "50%",
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
    marginBottom: 10,
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
