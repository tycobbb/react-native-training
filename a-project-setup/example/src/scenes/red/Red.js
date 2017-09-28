import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Red extends Component {
  render () {
    return <View style={styles.container}>
      <Text>...than purple.</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4547'
  }
})
