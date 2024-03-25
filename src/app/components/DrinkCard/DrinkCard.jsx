import { View } from 'react-native'
import React from 'react'
import { Box, Button, ButtonText, Card, Heading, Image,Text, VStack } from '@gluestack-ui/themed';

const DrinkCard = ({data}) => {

  let pizzaImage;
  switch (data.img) {
    case 1:
      pizzaImage = require('../../../assets/juice1.png');
      break;
    case 2:
      pizzaImage = require('../../../assets/juice2.png');
      break;
    default:
      pizzaImage = require('../../../assets/juice1.png');
      break;
  }

  return (
      <View style={{ fontSize: 30, alignItems: 'center'}}>
        <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
        <View  style={{ alignItems: 'center'}}>
          <Image
            size="2xl"
            source={pizzaImage}
            alt='Pizza'
          />
        </View>
        <VStack mb="$3">
          <Heading size="md" fontFamily="$heading" >
            {data.name} 
          </Heading>
        </VStack>
        <Text mb="$3">Precio: ${data.price}</Text>
        <Box
          flexDirection="column"
          sx={{
            "@sm": {
              flexDirection: "row",
            },
          }}
        >
          <Button
            px="$4"
            py="$2"
            fontFamily="$heading"
            mr="$0"
            mb="$3"
            sx={{
              "@sm": {
                mr: "$3",
                mb: "$0",
                flex: 1,
              },
            }}
          >
            <ButtonText size="sm">Agregar al pedido</ButtonText>
          </Button>
        </Box>
      </Card>
      </View>
  )
}

export default DrinkCard