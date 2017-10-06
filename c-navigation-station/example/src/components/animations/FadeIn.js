import React from 'react'
import { AnimateIn } from './AnimateIn'

export const FadeIn = (props) => (
  <AnimateIn
    getStyleFromAnimation={(animation) => ({
      opacity: animation
    })}
    {...props}
  />
)
