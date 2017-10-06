import React, { Component } from 'react'
import { Image } from 'react-native'
import { FadeIn } from './animations'

export class FadeInImage extends Component {
  state = {
    isPaused: true
  }

  didFinishLoad = () => {
    this.setState({ isPaused: false })

    // call original callback
    const { onLoad } = this.props
    onLoad && onLoad()
  }

  render () {
    const { onLoad: _, ...imageProps } = this.props

    return <FadeIn isPaused={this.state.isPaused}>
      <Image onLoad={this.didFinishLoad} {...imageProps} />
    </FadeIn>
  }
}
