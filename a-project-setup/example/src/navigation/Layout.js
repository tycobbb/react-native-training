import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TabBar } from './TabBar'
import * as scenes from '../scenes'

const routes = Object.values(scenes)
  .sort((left, right) => left.tab.index > right.tab.index)

export class Layout extends Component {
  state = {
    selectedTab: 0
  }

  // events
  didSelectTab = (index) => {
    this.setState({ selectedTab: index })
  }

  // lifecycle
  render () {
    const { selectedTab } = this.state

    const route = routes[selectedTab]
    const { title, component: RouteComponent } = route

    return <View style={styles.container}>
      <View style={styles.content}>
        <RouteComponent />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TabBar
        tabs={routes.map((route) => route.tab.name)}
        selectedTab={selectedTab}
        onSelect={this.didSelectTab}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: 60,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  title: {
    color: 'white',
    backgroundColor: 'transparent'
  },
  content: {
    flex: 1
  }
})
