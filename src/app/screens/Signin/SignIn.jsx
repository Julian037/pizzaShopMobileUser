import { View, Text,ScrollView,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import {
  Button,
  ButtonText,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Image,
  Input,
  InputField,
  InputSlot,
  VStack,
} from '@gluestack-ui/themed';
import styles from './SignInStyle';

import Icon from 'react-native-vector-icons/Ionicons';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{flex: 1}}>
        <ScrollView>
          <View 
            style={styles.imgContainer} 
          >
            <Image
              source={require('../../../assets/logo.jpg')}
              style={styles.imgLogo} 
              alt='company logo'
            />
          </View>
          <VStack style={styles.content} space="xl">
            <Heading lineHeight="$md">
              Ingresa a tu cuenta
            </Heading>
            <VStack space="xs">
              <FormControlLabel mb="$1" >
                <FormControlLabelText >Correo</FormControlLabelText>
              </FormControlLabel>
              <Input variant='underlined'>
                <InputField type="text" placeholder="ejemplo@gmail.com"/>
              </Input>
            </VStack>
            <VStack space="xs">
              <FormControlLabel mb="$1" >
                <FormControlLabelText >Password</FormControlLabelText>
              </FormControlLabel>
              <Input variant='underlined'>
                <InputField type={showPassword ? "text" : "password"} placeholder="************"/>
                <InputSlot pr="$3" onPress={handleState}>
                  {showPassword
                    ? <Icon name="eye-off" size={30} color="#4F8EF7" />
                    : <Icon name="eye" size={30} color="#4F8EF7" /> 
                  }
                </InputSlot>
              </Input>
            </VStack>
            <Text style={styles.text}>
              ¿Olvidaste tu contraseña?
              <Text onPress={() => navigation.navigate('Password')}>
                <Text style={styles.link}>Haz clic aquí</Text>
              </Text>
            </Text>
            <Text style={styles.text}>
              ¿No tienes cuenta?
              <Text onPress={() => navigation.navigate('Password')}>
                <Text style={styles.link}>Regístrate</Text>
              </Text>
            </Text>
          </VStack>
        </ScrollView>
      </View>
      <View>
        <Button m="$3">
          <ButtonText color="$white">Ingresar</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default SignIn