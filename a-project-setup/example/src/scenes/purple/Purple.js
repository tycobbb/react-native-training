import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Purple extends Component {
  render () {
    return <View style={styles.container}>
      <Text>...don't give a hoot.</Text>
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
