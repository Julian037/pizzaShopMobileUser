import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pizza from '../PizzaMenu/PizzaMenu';
import DrinksMenu from '../DrinksMenu/DrinksMenu';

const Tab = createBottomTabNavigator();

const FoodMenu = () => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen Pizza="Pizza" component={Pizza} />
        <Tab.Screen name="DrinksMenu" component={DrinksMenu} />
      </Tab.Navigator>
    </View>
  )
}

export default FoodMenu