import React, { Component } from 'react'
import { Animated } from 'react-native'

export class FadeInImage extends Component {
  static defaultProps = {
    duration: 200
  }

  state = {
    animation: new Animated.Value(0)
  }

  didFinishLoad = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: this.props.duration
    }).start()

    const { onLoad } = this.props
    onLoad && onLoad()
  }

  render () {
    const { style, onLoad: _, ...imageProps } = this.props

    const imageStyle = [
      style,
      { opacity: this.state.animation }
    ]

    return <Animated.Image
      style={imageStyle}
      onLoad={this.didFinishLoad}
      {...imageProps}
    />
  }
}
