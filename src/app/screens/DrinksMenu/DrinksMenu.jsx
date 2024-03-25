import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { drinks } from '../../../data/pizzas'
import DrinkCard from '../../components/DrinkCard/DrinkCard'

const DrinksMenu = () => {
  return (
    <ScrollView>
      {drinks.map( drink => (
        <DrinkCard
          key={drink.id}
          data={drink}
        />
      ) )}
    </ScrollView>
  )
}

export default DrinksMenu