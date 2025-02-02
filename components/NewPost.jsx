import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const NewPost = ({name, serial}) => {

  console.log('name', name.title);
  console.log('serial', serial);


  return (
    <View style={styles.container}>
    <View style={{
      flex:1,
      flexDirection:'row'
    }} >
      
        <View >
        <Text style={styles.title2

        }>{'Name: '}{name.firstname}</Text>
        </View>
        <View style={{
          //flex:1
        }}>
        <Text style={styles.title2}>{name.lastname}</Text>
        </View>
       
        
        </View>
        <View>
        <Text style={styles.title2}>{'Email: '}{name.email}</Text>
        <Text style={styles.title2}>{'Birthdate:'}{name.birthDate}</Text>
        
        </View>
        </View>
        
       
        
      
    
  );
};

export default NewPost;

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
  container: {
    backgroundColor: "#2C2C2C",
    borderWidth: 5,
    
  },
});
