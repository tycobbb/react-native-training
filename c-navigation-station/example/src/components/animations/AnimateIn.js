import React, { Component } from 'react'
import { Animated } from 'react-native'

export class AnimateIn extends Component {
  static defaultProps = {
    isPaused: false,
    duration: 200
  }

  state = {
    hasAnimated: false,
    animation: new Animated.Value(0)
  }

  // actions
  animate () {
    if (this.props.isPaused || this.state.hasAnimated) {
      return
    }

    this.setState({ hasAnimated: true })

    Animated
      .timing(this.state.animation, {
        toValue: 1,
        duration: this.props.duration
      })
      .start()
  }

  // lifecycle
  componentDidMount () {
    this.animate()
  }

  componentDidUpdate () {
    this.animate()
  }

  render () {
    const { style, isPaused: _p, duration: _d, ...otherProps } = this.props

    const viewStyle = [
      style,
      this.props.getStyleFromAnimation(this.state.animation)
    ]

    return <Animated.View style={viewStyle} {...otherProps}>
      {this.props.children}
    </Animated.View>
  }
}
