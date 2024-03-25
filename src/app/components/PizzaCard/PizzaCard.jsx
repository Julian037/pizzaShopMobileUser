import { View } from 'react-native'
import React from 'react'
import { Accordion, AccordionContent, AccordionTitleText, AccordionTrigger, Box, Button, ButtonText, Card, Divider, HStack, Heading, Image,Text, VStack } from '@gluestack-ui/themed';
import { AccordionItem } from '@gluestack-ui/themed';
import { AccordionHeader } from '@gluestack-ui/themed';
import { AccordionContentText } from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

const PizzaCard = ({data}) => {

  let pizzaImage;
  switch (data.img) {
    case 1:
      pizzaImage = require('../../../assets/pizza1.png');
      break;
    case 2:
      pizzaImage = require('../../../assets/pizza2.png');
      break;
    default:
      pizzaImage = require('../../../assets/pizza1.png');
      break;
  }

  return (
      <View style={{ fontSize: 30, alignItems: 'center'}}>
        <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
        <View  style={{ alignItems: 'center'}}>
          <Image
            size="2xl"
            // source={require(data.img)}
            source={pizzaImage}
            alt='Pizza'
          />
        </View>
        <VStack mb="$6">
          <Heading size="md" fontFamily="$heading" mb="$4">
            {data.name}
          </Heading>
          <Accordion
            m="$2"
            mb='$0'
            mt='$0'
            width="90%"
            size="md"
            variant="unfilled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
          >
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>Ingredientes</AccordionTitleText>
                        {isExpanded ? (
                          <Icon name="chevron-up-outline" size={30} color="#4F8EF7" />
                        ) : (
                          <Icon name="chevron-down-outline" size={30} color="#4F8EF7" />
                        )}
                      </>
                    )
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                {data.ingredients.map( (ingredient, index) => (
                  <AccordionContentText key={index}>
                    - {ingredient}
                  </AccordionContentText>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </VStack>
        <VStack
          space="md"
          justifyContent='center'
          alignItems='center'
          mb='$5'
        >
          <HStack
            h='$10'
            justifyContent='center'
            alignItems='center'
          > 
            <VStack
              w={100}
              justifyContent='center'
              alignItems='center'
            >
              <Text>{data.prices[0].size}</Text>
              <Divider
                w={55}
                variant="horizontal"
                bg="#4F8EF7"
              />
              <Text>$ {data.prices[0].price}</Text>
            </VStack>
          
              <Divider
                orientation="vertical"
                mx='$2.5'
                bg='#4F8EF7'
                h={15}
              />
            <VStack
              w={100}
              justifyContent='center'
              alignItems='center'
            >
              <Text>{data.prices[1].size}</Text>
              <Divider
                w={55}
                variant="horizontal"
                bg="#4F8EF7"
              />
              <Text>$ {data.prices[1].price}</Text>
            </VStack>
            <Divider
                orientation="vertical"
                mx='$2.5'
                bg='#4F8EF7'
                h={15}
              />
            <VStack
              w={100}
              justifyContent='center'
              alignItems='center'
            >
              <Text>{data.prices[2].size}</Text>
              <Divider
                w={55}
                variant="horizontal"
                bg="#4F8EF7"
              />
              <Text>$ {data.prices[2].price}</Text>
            </VStack>
          </HStack>
        </VStack>
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

export default PizzaCard