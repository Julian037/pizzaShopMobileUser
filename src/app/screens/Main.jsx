import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Main = () => {

  const navigation = useNavigation();
  return (
    <View>
      <Text>Main</Text>
      <Button title='hola' onPress={() => navigation.navigate('Home')}></Button>
    </View>
  )
}

export default Main