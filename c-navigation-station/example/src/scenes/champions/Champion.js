import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { SlideIn, FadeInImage } from '../../components'

function imageUrl (endpoint) {
  return { uri: `https://ddragon.leagueoflegends.com/cdn/${endpoint}` }
}

function iconUrl ({ full }) {
  return imageUrl(`/7.10.1/img/champion/${full}`)
}

export class Champion extends Component {
  // events
  didTapChampion = () => {
    const { champion, onPress } = this.props
    onPress(champion)
  }

  // lifecycle
  render () {
    const { style, champion } = this.props

    return <TouchableOpacity onPress={this.didTapChampion} style={[styles.champion, style]}>
      <FadeInImage style={styles.icon} source={iconUrl(champion.image)} />
      <SlideIn>
        <Text style={styles.name}>{champion.name}</Text>
        <Text style={styles.subtitle}>{champion.title}</Text>
      </SlideIn>
    </TouchableOpacity>
  }
}

const height = 80
const styles = StyleSheet.create({
  champion: {
    flexDirection: 'row',
    alignItems: 'center',
    height
  },
  icon: {
    height,
    width: height,
    marginRight: 10
  },
  name: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600'
  }
})
