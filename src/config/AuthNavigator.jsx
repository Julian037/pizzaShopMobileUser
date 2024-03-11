
import React, { useContext } from 'react'
import { View, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import OrdersHistory from '../app/screens/OrdersHistory/OrdersHistory';
import NewOrder from '../app/screens/NewOrder/NewOrder';
import { Heading } from "@gluestack-ui/themed"
import Icon from 'react-native-vector-icons/Ionicons';
import FoodMenu from '../app/screens/FoodMenu/FoodMenu';
import TabsNavigator from './TabsNavigator';
import { AuthContext } from '../context';

const Auth = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#267FC9',
  },
  exitIcon: {
    color: 'white',
    marginRight: 16,
  },
})

const DrawerFooter = (props) => {
  const {logout} = useContext(AuthContext)
  const { navigation } = props

  const closeSession = () => {
    return (
      <TouchableOpacity style={styles.container} onPress={logout}>
        <Icon name="exit-outline" size={20} style={styles.exitIcon} />
        <Heading style={{ color: 'white' }}>
          Cerrar sesión
        </Heading>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView>
          <DrawerItem
            label={() => <Heading style={{ color: 'blue' }}>Nuevo pedido</Heading>}
            onPress={() => navigation.navigate('NewOrder')}
          />
          <DrawerItem
            label={() => <Heading style={{ color: 'blue' }}>Historial de pedidos</Heading>}
            onPress={() => navigation.navigate('OrdersHistory')}
          />
          <DrawerItem
            label={() => <Heading style={{ color: 'blue' }}>Sabores de casa</Heading>}
            onPress={() => navigation.navigate('TabsNavigator')}
          />
          <DrawerItem
            label={() => <Heading style={{ color: 'blue' }}>Mi cuenta</Heading>}
            onPress={() => navigation.navigate('TabsNavigator')}
          />
        </SafeAreaView>
      </ScrollView>
      <DrawerItem
        label={() => closeSession()}
        inactiveBackgroundColor="#267FC9"
      />
    </View>
  )
}

const AuthNavigator = () => {

  return (
    <Auth.Navigator
      screNavigatorenOptions={{ drawerPosition: 'left' }}
      initialRouteName="OrdersHistory"
      drawerContent={props => <DrawerFooter {...props} />}
      screenOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        headerTitle:'Emma Pizzería'
      }}
      drawerStyle={{
        backgroundColor: '#2EA1E8',
        width: '100%'
      }}
    >
      <Auth.Screen name="OrdersHistory" component={OrdersHistory} />
      <Auth.Screen name="NewOrder" component={NewOrder} />
      <Auth.Screen name="FoodMenu" component={FoodMenu} />
      <Auth.Screen name="TabsNavigator" component={TabsNavigator} />
    </Auth.Navigator>
  )
}

export default AuthNavigator