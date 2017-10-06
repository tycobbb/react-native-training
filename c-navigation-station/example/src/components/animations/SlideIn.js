import React from 'react'
import { AnimateIn } from './AnimateIn'

export const SlideIn = (props) => (
  <AnimateIn
    getStyleFromAnimation={(animation) => ({
      opacity: animation,
      marginLeft: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
      })
    })}
    {...props}
  />
)
