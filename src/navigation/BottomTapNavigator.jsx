import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'
import CartStackNavigator from './CartStackNavigator'
import OrderStackNavigator from './OrderStackNavigator'
import Header from '../components/Header'


import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

const BottomTapNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title={route.name} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="TICKETEK"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="store" size={24} color={focused ? "black" : "white"} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MIS COMPRAS"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="shopping-cart" size={24} color={focused ? "black" : "white"} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ORDENES"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="receipt"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTapNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'rgba(0,172,237,255)',
        height: 60
    }
})
