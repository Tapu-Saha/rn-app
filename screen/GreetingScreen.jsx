import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//import AntDesign from '@expo/vector-icons/AntDesign';
const GreetingScreen = () => {
  const navigation = useNavigation();
  const handleStartButton = () => {
    navigation.navigate("Second");
  };
  

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'black'
      }}
    >
      <View
        style={{
          flex: 1.4,
          //backgroundColor: "black",
          // height:'55%'
        }}
      >
        <Image
          style={{
            marginHorizontal: "auto",
            marginVertical: "auto",
            width: "80%",
            height: "80%",
            resizeMode: "contain",
          }}
          source={{
            uri: "https://media.istockphoto.com/id/465869410/photo/computer-software-apps.jpg?s=1024x1024&w=is&k=20&c=cG96-6HALV_pWokgKwTvrGk6o0ssq1fvBtLi_b-Vb3A=",
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
        // backgroundColor: "red",
        }}>
        <Text style={{
          color:'white',
          fontWeight:'bold',
          marginTop:25,
          textAlign:'center',
          fontSize: 40,
         // backgroundColor:'blue'
          
        }}>
        Welcome To The Dark World
        </Text>
        <TouchableOpacity onPress={handleStartButton}>
        <View style={{
          backgroundColor:'grey',
          height:50,
          marginTop:60,
          borderWidth:3,
          marginHorizontal:70,
          borderRadius:10
        }}>
          
          <Text style={{
            color:'white',
            fontWeight:'bold',
            fontSize:25,
            textAlign:'center',
            marginTop:4
          }}>
            ENTER
          </Text>

        </View>
        </TouchableOpacity>

      </View>
      
    </View>
  );
};

export default GreetingScreen;
