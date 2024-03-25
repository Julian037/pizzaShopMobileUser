import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PizzaMenu from '../app/screens/PizzaMenu/PizzaMenu';
import DrinksMenu from '../app/screens/DrinksMenu/DrinksMenu';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="PizzaMenu"
        
        component={PizzaMenu}
        options={{
          title:'Nuestras pizzas',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="pizza-outline" size={30} color="#4F8EF7" />
          ),
        }}
        
      />
      <Tab.Screen
        name="DrinksMenu"
        component={DrinksMenu}
        options={{
          title:'Nuestras bebidas',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="wine-outline" size={30} color="#4F8EF7" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator