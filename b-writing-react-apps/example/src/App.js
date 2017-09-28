import React, { Component } from 'react'
import { Layout } from './navigation'
import * as scenes from './scenes'

export class App extends Component {
  render () {
    const { title, component: Scene } = scenes.home

    return <Layout title={title}>
      <Scene />
    </Layout>
  }
}
