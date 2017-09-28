# you get a component

and you get a component.

keeping state synchronized in complex uis with asynchronous behavior is a pain. as a discipline we've spent lots of time and energy inventing acronymical architectural patterns and complex state synchronization mechanisms to try and ease the burden. occasionally we hand-roll libraries to make reactivity a first-class component of the system ;).

in react you don't do any of that. there is not necessarily a grand concept like mvc or mvvm or mvp or viper or any other pile of unpronounceable letters, there's just the component.

a component can receive data as props and render some ui as a function of those props. if it receives new props, it renders again. it can also maintain its own internal state, and if that state changes it renders again. that's about it. this pattern is sufficient to solves many state problems, but it may not solve _all_ of them gracefully.

a component can need only be a function that receives props and renders them:

```js
const BlueText = ({ children }) => (
  <Text style={{ color: 'blue' }}>
    {text}
  <Text>
)

...
<BlueText>Yep, blue.</BlueText>
```

## it probably won't live forever

componets have a lifecycle that's similar to `UIViewController` or `Fragment`, but with data changes baked into its very core. you can use these hooks to do similar things to what you might do in plain old native apps, like load data, make network requests, run animations, etc.

you can read in depth about it [here](https://facebook.github.io/react/docs/react-component.html), but in short it looks like:

##### when mounting
this is the lifecycle on a component's first render.

```
constructor()
componentWillMount()
render()
componentDidMount()
```

##### when updating
this is the lifecycle on subsequent renders. this will happen whenever props or state change.

```
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()
```

##### when unmounting
this is the lifecycle when a component is being removed

```
componentWillUnmount()
```

## and it might not be smart

the lack of acronymical structure does not mean react apps are bereft of architecture, but the distinctions are much fuzzier.

it's less about if such-and-such behavior is model, controller, or view logic, and more about how smart or how dumb such-and-such component should be in the system. smartness in this case typically refers to how much state and how non-rendering logic the component is responsible for.

a simple and relevant example of this separation is splitting up a components into one that makes a network request and manages state view state, and other components that the smart component passes its data as props to that simply render styled ui.
