import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const PostScreen = () => {
  const route = useRoute();
  console.log('route.params', route.params);
  const { myName, myEmail } = route.params;
  console.log('myName', myName);
  
  return (
    <View>
      <Text>{myName}</Text>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({})