import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PizzaMenu from '../app/screens/PizzaMenu/PizzaMenu';
import DrinksMenu from '../app/screens/DrinksMenu/DrinksMenu';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="PizzaMenu"
        component={PizzaMenu}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DrinksMenu"
        component={DrinksMenu}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator