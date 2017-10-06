import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { fetchChampions } from './fetchChampions'
import { Champion } from './Champion'
import { FadeIn } from '../../components'

export class Champions extends Component {
  state = {
    isLoading: true,
    champions: []
  }

  // events
  didTapChampion = (champion) => {
    this.props.navigation.navigate('champion', {
      id: champion.id
    })
  }

  // lifecycle
  async componentDidMount () {
    const champions = await fetchChampions()
    this.setState({ isLoading: false, champions })
  }

  render () {
    return <View style={styles.container}>
      {this.renderChampions()}
    </View>
  }

  renderChampions () {
    const { isLoading, champions } = this.state
    if (isLoading) {
      return <View style={styles.loading}>
        <ActivityIndicator size='large' />
      </View>
    }

    return <FadeIn>
      <FlatList
        style={styles.list}
        data={champions}
        renderItem={this.renderChampion}
      />
    </FadeIn>
  }

  renderChampion = ({ item: champion }) => (
    <Champion
      key={champion.key}
      style={styles.champion}
      champion={champion}
      onPress={this.didTapChampion}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  champion: {
    marginBottom: 5
  }
})
