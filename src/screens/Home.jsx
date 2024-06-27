import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'

const Home = () => {
  return (
  <View>
    <Header title='Categories'/>
    <Categories/>
  </View>
  )
}

export default Home
