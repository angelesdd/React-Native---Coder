import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

import ItemListCategory from './ItemListCategory'

const Home = () => {
  return (
  <View>
    <Header title='Categories'/>
    <ItemListCategory/>
  </View>
  )
}



export default Home
