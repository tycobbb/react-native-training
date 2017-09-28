# you and your command line

you're gonna do a lot more work on the command line relative to traditional native development (at least ios). let's examine some of our tools.

## tools

#### `react-native`
the react-native cli allows you to interact with react-native, simulators, emulators, and much more without having to open xcode or android studio. you probably won't touch it too often, because you also have...

#### `yarn`

it's cool. it's faster and smarter than npm. it'll do a lot for you:

- manages dependencies
- runs tasks
- unifies interface to tools
- is your friend

i recommend wrapping up common tasks with yarn scripts. yarn is smart about running binaries from the correct location, so you don't need to explicitly reference `node_modules` everywhere:

```json
{
  ...
  "scripts": {
    "start": "react-native start",
    "ios": "yarn ios:run",
    "ios:run": "react-native run-ios",
    "ios:log": "react-native log-ios",
    "ios:xcode": "open ios/*.xcodeproj",
    "ios:clean": "rm -rf ios/build",
    "android": "yarn android:run",
    "android:run": "react-native run-android",
    "android:log": "react-native log-android"
  },
  ...
}
```

react-native will start the packager for you, but it's nicer to run it in its own pane (so make sure to start it!). you can use yarn to run any scripts in your package.json by tacking on the script name as a subcommand. give it a shot:

```sh
$ yarn start
$ yarn ios
```

#### `jest`

jest is a test runner and test suite all in one. we'll talk about tests in more depth later, but for now you can add a few yarn script and try them out:

```json
{
  ...,
  "scripts": {
    "test": "jest",
    "test:watch": "yarn test --watch",
    "test:debug": "node --debug-brk --inspect ./node_modules/.bin/jest --runInBand"
  },
  ...
}
```

all the tests should pass right now, which you can see:

```sh
$ yarn test
# a sweet watch mode that re-runs test as you change files
$ yarn test:watch
```

#### `standard` & `snazzy`

javascript doesn't have any compile-time type safety (without tools), so a linter is necessary to not lose your mind.

standard checks your code style and automatically fixes it for you. you can't really configure it, and that's a good thing.

snazzy is a tool that makes standard's output more readable.

let's install and add scripts for them:

```sh
$ yarn add -D standard snazzy
```

```json
{
  ...
  "scripts": {
    "lint": "standard | snazzy",
    "lint:fix": "standard --fix | snazzy"
  },
  ...
}
```

try it out, run the linter and then allow it to auto-fix everything it can:

```sh
$ yarn lint
$ yarn lint:fix
```

you'll notice that it can't fix everything, and there are still some linting errors in the test files. standard will (rightfully) complain if you reference a global variable that it doesn't know about, and tests will usually reference jest globals like `it`.

you can fix this by referencing the globals through the global object

```js
global.it(...)
```

you can also add a header comment at the top of the file:

```js
/* globals name, anotherName */
```

however for jest specifically, you can silence warnings about _all_ of it's globals by specifying a linting environment in the header comment:

```js
/* eslint-env jest */
```

it also complains that the tests assign an unused variable, which you can fix by deleting the assignment `const tree =`.

try another `yarn lint`.

you can also add an atom package `linter-js-standard` that will show you errors in atom as-you-type. i like it, but it's not for everyone.

## seeking validation

i usually add one more script that i'll always run before i push code to the remote repo. you could also make it a pre-commit hook if you want:

```json
{
  ...
  "scripts": {
    "validate": "yarn lint && yarn test"
  }
}
```
