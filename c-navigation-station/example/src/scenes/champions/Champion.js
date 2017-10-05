import React, { Component } from 'react'
import { TouchableOpacity, Text, Animated, StyleSheet } from 'react-native'
import { FadeInImage } from './FadeInImage'

function imageUrl (endpoint) {
  return { uri: `https://ddragon.leagueoflegends.com/cdn/${endpoint}` }
}

function iconUrl ({ full }) {
  return imageUrl(`/7.10.1/img/champion/${full}`)
}

export class Champion extends Component {
  state = {
    animation: new Animated.Value(0)
  }

  // events
  didTapChampion = () => {
    const { champion, onPress } = this.props
    onPress(champion)
  }

  // lifecycle
  componentDidMount () {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 200
    }).start()
  }

  render () {
    const { style, champion } = this.props

    const { animation } = this.state
    const textStyle = {
      opacity: animation,
      marginLeft: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
      })
    }

    return <TouchableOpacity onPress={this.didTapChampion} style={[styles.champion, style]}>
      <FadeInImage style={styles.icon} source={iconUrl(champion.image)} />
      <Animated.View style={textStyle}>
        <Text style={styles.name}>{champion.name}</Text>
        <Text style={styles.subtitle}>{champion.title}</Text>
      </Animated.View>
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
