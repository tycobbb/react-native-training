import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Home extends Component {
  render () {
    return <View style={styles.container}>
      <Text>Good to be here.</Text>
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
