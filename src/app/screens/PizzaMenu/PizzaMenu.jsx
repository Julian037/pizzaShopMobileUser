import { View, ScrollView } from 'react-native'
import React from 'react'
import PizzaCard from '../../components/PizzaCard/PizzaCard';
import { pizzas } from '../../../data/pizzas';

const PizzaMenu = () => {
  return (
    <ScrollView>
      {pizzas.map( pizza => (
        <PizzaCard
          key={pizza.id}
          data={pizza}
        />
      ) )}
    </ScrollView>
  )
}

export default PizzaMenu