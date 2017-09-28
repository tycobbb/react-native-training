# a tale of two (+) libraries

javascript apps use a lot more 3rd party packages than ios and android apps do. you don't have a single organization providing you all the tools you need to build an application (well, facebook) like you do on either of the native platforms, so you have to pull them together yourself. at the moment, we really only have two packages

## react

react is the backbone of a react-native application. it provides you the structural tool, the component, to build an application out of whatever-you-want. it also provides the building blocks for managing the flow of data through the application. that's about it.

## react-native

react-native provides the whatever-you-wants that we need for our application. it provides many specific components to be rendered on native devices. it also provides some of the core structural elements of a mobile application such timers, storage, animation, navigation (maybe), and more.

## and the rest of 'em

these two tools alone are rarely sufficient to build a whole application, and there are a lot of other packages out there we will (hopefully) explore.

#### expo

expo is like a kitchen sink for a lot of native modules that didn't make it into core react-native. it's really handy and we're going to integrate to cut down on the time we spend pulling in other native dependencies. having to pull them in one-by-one is really painful.

#### react-router-native

a string-matching router for defining your application's structure ("site map") and navigating around by changing the current url. it's pretty useful, it gives you features like deep-linking essentially for free, but it has some of its own drawbacks.

#### redux

redux is a application state container. it simplifies tasks that require more persistent, cross-cutting application state. or all of your application state, if you choose to use it that way. it can be a pretty heavyweight dependency, as it forces you to change the way you think about state changes and how to respond to application events. however, it also can enforce much better separation-of-concerns and make it easier to reason about your application's correctness.
