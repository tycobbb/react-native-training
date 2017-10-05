import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Champions extends Component {
  render () {
    return <View style={styles.container}>
      <Text>Champions</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9045FF'
  }
})
