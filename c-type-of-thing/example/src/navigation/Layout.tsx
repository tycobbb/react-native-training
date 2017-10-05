import React, { Component, Props } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Layout extends Component {
  props: {
    title: string
  } & Props<Layout>

  // lifecycle
  render () {
    const { title, children } = this.props

    return <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: 60,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  title: {
    color: 'white',
    backgroundColor: 'transparent'
  },
  content: {
    flex: 1
  }
})
