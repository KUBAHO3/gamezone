import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../assets/styles/globalStyles'

function Home() {
  return (
    <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleText}>Home</Text>
    </View>
  )
}

export default Home

