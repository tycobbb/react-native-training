# do you have enough flair?

react-native uses a css like language for styling, so if you already know css it should be a pretty simple transition. if you don't, there's lots of information out there.

the react-native [docs](https://facebook.github.io/react-native/docs/layout-props.html) and [mdn](https://developer.mozilla.org/en-US/) is a great resources.

## sheets of it

react native styles are usually defined per-component ("local" styles) using `StyleSheet`. styles can be passed to components using the `style` prop:

```js
const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  }
})
```

you can cascade and apply conditional styles by passing arrays of style objects to your component:

```js
const Alert = ({ children, visible }) => {
  const alertStyle = [
    styles.text,
    styles.alert,
    visible && styles.visible
  ]

  <Text style={alertStyle}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'white'
  },
  alert: {
    fontSize: 64,
    opacity: 0
  },
  visible: {
    opacity: 1
  }
})
```

you can also use style object literals for dynamic re-styling:

```js
const ColorableText = ({ color }, => (
  <Text style={[styles.text, { color }]} />
)

const styles = StyleSheet.create({
  text: {
    fontSize: 14
  }
})
```

you can also pass in style objects from other components as props to add further style customizations. this is particularly useful to position styled components.

## flex your way there

the primary layout mechanism for react native is flexbox, which is a relatively new addition to the world of css. it's fairly intuitive, and there is also plenty of good information / good diagrams on the web. we can talk about it as we go.

a minor quirk relative to web-flexbox is that, by default, react native lays out flex elements in a column instead of a row. you can change this if you want using the `flexDirection` style property.

## in be-tween your ears

animations are slightly trickier in react-native than they are in ios, but they also easier to re-use. i don't know how they compare to android.

their explanation is best left to the docs, and to examples:
