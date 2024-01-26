import React from 'react'
import { StyleSheet, Text } from 'react-native'

function Home() {
  return (
    <Text style={styles.text}>Home</Text>
  )
}

export default Home

const styles = StyleSheet.create({
    text: {
        paddingTop: 24,
        fontFamily: 'nunito-bold',
        fontSize: 18,
    }
})