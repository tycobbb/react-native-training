# good housekeeping

we've learned a little bit about our tools, so let's turn to our code--namely how we organize it. let's look at what init gives us.

## the scaffolding

#### `./index.(ios|android).js`

this is the entry point for your javascript code, and you're required to have a different entry point for each platform. you can move them, but it's easier not to.

#### `./ios`

this directory contains all the native ios code, as well as the .xcodeproj and all the other ios artifacts you're familiar with.

one notable difference is that react-native builds the ios project to `./ios/build`, so there's no need to go digging through dervied data. if you run into a problem with the module cache or otherwise stale native ios code, you'll want to wipe out this directory using `yarn ios:clean`


#### `./android`

same thing here for android. the android project and all its attendant build files live in this directory, and they should look exactly like android projects you're used to.

## a blueprint for the future

you can pick whatever directory structure for your javascript you want, react-native is not particular. some advocate for a flat structure with all components at the same level, but i find that as projects grow and you add different layers to the application this becomes a mess.

react-native is all about co-location, and grouping modules by feature rather is both in-line with that philosophy and makes it easier to reason about your code as you would see it on screen.

i personally advocate for and use something like this:

```
project/
  ...native code
  src/
    scenes/
      scene-a/
        ...scene-a files
        index.js
      scene-b/
        ...scene-b files
        index.js
      index.js
    navigation/
      ...navigation / layout files
      index.js
    analytics.js
    App.js
  index.ios.js
  index.android.js
```

the general idea is that each scene or screen should have its own directory underneath ./src/scenes that contains all non-shared code for that scene.

shared code lives at the top level of the source directory. if a module warrants more than a single file (like navigation), it should be grouped into a directory.

for any module / scene that is grouped into a directory, you should define an index.js file that acts as the public interface to that module, generally doing nothing more than exporting just functions / types that other parts of the application need to consume.

this is the my plan for keeping things neat, and it's worked for me so far. let's tidy what we have up.

## clearing the entryway

i treat App.js as the real entry point for my application, and update the platform-specific index files to do nothing but render the app. i haven't yet found a need to use those indices for anything else.

let's update our examples to render a shared hello world:

```js
// App.js
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class App extends Component {
  render () {
    return <View style={styles.container}>
      <Text>Hello, world</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
```

```js
// index.(ios|android).js
import React from 'react'
import { AppRegistry } from 'react-native'
import { App } from './src/App.js'

AppRegistry.registerComponent('example', () => () => <App />)
```

## throwing up a few walls

for the rest of this section let's build a simple app to fill out the directory structure. see how the pieces fit together.

we'll build a very simple tab bar app that can hop between two components with red and purple backgrounds, respectively.

in the interest of not dumping the whole project in a markdown document, the end result will live in the [example](../example) directory for reference.
