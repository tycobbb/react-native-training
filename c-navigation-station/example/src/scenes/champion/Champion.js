import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Champion extends Component {
  render () {
    return <View style={styles.champion}>
      <Text>Champion</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  champion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
