import React, { Component } from 'react'
import { Animated } from 'react-native'

export class FadeIn extends Component {
  static defaultProps = {
    duration: 200
  }

  state = {
    animation: new Animated.Value(0)
  }

  componentDidMount () {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: this.props.duration
    }).start()
  }

  render () {
    return <Animated.View style={{opacity: this.state.animation}}>
      {this.props.children}
    </Animated.View>
  }
}
