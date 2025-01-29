import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SecondScreen = () => {
   const navigation = useNavigation();
    const handleStartButton = () => {
     
      navigation.navigate("SignUp");
     };
     
     const handleButton = () => {
      navigation.navigate("Login");
     
     };

  return (
    <View style={{
      backgroundColor:'black',
      flex:1
    }}>
    <View style={styles.container}>
      <View style={{
       marginVertical:'auto'
      }}>
      <View>
        <Text style={styles.title}>If you are new here,please</Text>
      </View>
      <TouchableOpacity onPress={handleStartButton}>
      <View style={styles.button}>
        <Text style={styles.font}>Sign Up</Text>
      </View>
      </TouchableOpacity>
      
      <View>
        <Text style={styles.title}>If you have an account already</Text>
      </View>
      <TouchableOpacity onPress={handleButton}>
      <View style={styles.button}>
        <Text style={styles.font}>Login</Text>
      </View>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default SecondScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C2C",
    borderWidth: 5,
    height:'70%',
    //flex: 1,
    marginTop:'30%',
   marginBottom:'30%',
   marginLeft:'5%',
  marginRight:'5%',
  borderRadius:30,
  },
  title: {
    color: "white",
    fontWeight: 200,
    fontSize: 23,
    textAlign:'center',
    marginTop:10

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
