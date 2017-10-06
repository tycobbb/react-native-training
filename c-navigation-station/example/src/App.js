import './fetch'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import * as scenes from './scenes'

const Navigator = StackNavigator(scenes, {
  initialRouteName: 'champions'
})

export class App extends Component {
  render () {
    return <View style={styles.container}>
      <Navigator />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
