import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'

export const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.message}>Home screen</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: '#000',
  },
})
