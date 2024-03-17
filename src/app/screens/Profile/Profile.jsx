import React from 'react';
import { ScrollView,SafeAreaView } from 'react-native'
import { Button, ButtonText, FormControlLabel, Input, InputField , VStack, View} from '@gluestack-ui/themed';
import { FormControlLabelText } from '@gluestack-ui/themed';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View  p="$6">
          <VStack space="xs" mt="$4">
            <FormControlLabel mb="$1" >
              <FormControlLabelText >Nombre</FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="underlined"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Ingresa tu nombre" />
            </Input>
          </VStack>
          <VStack space="xs" mt="$4">
            <FormControlLabel mb="$1" >
              <FormControlLabelText >Apellido</FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="underlined"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Ingresa tu apellido" />
            </Input>
          </VStack>
          <VStack space="xs" mt="$4">
            <FormControlLabel mb="$1" >
              <FormControlLabelText >Correo</FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="underlined"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Ingresa tu correo" />
            </Input>
          </VStack>
          <VStack space="xs" mt="$4">
            <FormControlLabel mb="$1" >
              <FormControlLabelText >Celular</FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="underlined"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Ingresa tu celular" />
            </Input>
          </VStack>
          <VStack space="xs" mt="$4">
            <FormControlLabel mb="$1" >
              <FormControlLabelText >Dirección</FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="underlined"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Ingresa tu dirección" />
            </Input>
          </VStack>
          <Button
            mt='$16'
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>Actualizar </ButtonText>
          </Button>
          <Button
            mt='$4'
            size="md"
            variant="outline"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>Cambiar contraseña </ButtonText>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile