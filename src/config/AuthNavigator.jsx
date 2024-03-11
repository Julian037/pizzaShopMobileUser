
import React from 'react'
import { Button, View, Text , ScrollView, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import OrdersHistory from '../app/screens/OrdersHistory/OrdersHistory';
import NewOrder from '../app/screens/NewOrder/NewOrder';
import { Heading } from "@gluestack-ui/themed"
import Icon from 'react-native-vector-icons/Ionicons';
import FoodMenu from '../app/screens/FoodMenu/FoodMenu';
import TabsNavigator from './TabsNavigator';

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
  // const [state, dispatch] = useContext(Context)
  // const isAdminUser = (state.clientModules?.adminUser && state.clientModules?.adminUser.length > 0) ?
  //   state.clientModules?.adminUser.some((id) => id === state.user.id) : false
  const { navigation } = props

  const logOut = () => {
    // dispatch({ type: 'REMOVE_USER' })
  }

  const closeSession = () => {
    return (
      <TouchableOpacity style={styles.container} onPress={logOut}>
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
        onPress={logOut}
        inactiveBackgroundColor="#267FC9"
      />
    </View>
  )
}

const AuthNavigator = () => {

  return (
    <Auth.Navigator
      // screenOptions={{headerTitle:'Emma Pizzería'}}
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