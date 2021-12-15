import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Categories from './pages/Categories/Categories';
import Detail from './pages/Detail/Detail';
import Meals from './pages/Meals/Meals';


export default function App() {

  const Stack=createStackNavigator();

  return(
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen 
    name="CatogoriesPage" 
    component={Categories}
    options={{
      title:'Categories',
      headerTitleAlign:'center',
      headerTintColor:'	#006400',
      headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:26,
      fontFamily: "Cochin",
    }}}/>
    <Stack.Screen 
    name="MealsPage" 
    component={Meals}
    options={{
      title:'Meals',
      headerTitleAlign:'center',
      headerTintColor:'#006400',
      headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:26,
      fontFamily: "Cochin",
    }}}
    />
    <Stack.Screen
     name="DetailPage" 
     component={Detail}
     options={{
      title:'Detail',
      headerTitleAlign:'center',
      headerTintColor:'#800000',
      headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:26,
      fontFamily: "Cochin",
    }}}/>
  </Stack.Navigator>
</NavigationContainer>
  )
  
}

