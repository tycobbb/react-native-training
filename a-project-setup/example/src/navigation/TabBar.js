import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import T from 'prop-types'

export class TabBar extends Component {
  static propTypes = {
    tabs: T.arrayOf(T.string).isRequired,
    selectedTab: T.number.isRequired,
    onSelect: T.func.isRequired
  }

  // events
  didTapTab = (index) => () => {
    this.props.onSelect(index)
  }

  // lifecycle
  render () {
    return <View style={styles.container}>
      {this.props.tabs.map(this.renderTab)}
    </View>
  }

  renderTab = (tab, index) => {
    const textStyle = [
      index === this.props.selectedTab && styles.selected
    ]

    return <TouchableOpacity
      key={`tab-${tab}`}
      style={styles.tab}
      onPress={this.didTapTab(index)}
    >
      <Text style={textStyle}>{tab}</Text>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    textDecorationLine: 'underline'
  }
})
