import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { fetchChampions } from './fetchChampions'

export class Champions extends Component {
  state = {
    isLoading: true,
    champions: []
  }

  async componentDidMount () {
    const champions = await fetchChampions()
    this.setState({ isLoading: false, champions })
  }

  render () {
    const { isLoading, champions } = this.state

    return <View style={styles.container}>
      {isLoading
        ? <Text>Loading...</Text>
        : champions.map(({ name }) => <Text>{name}</Text>)
      }
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
