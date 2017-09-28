# you and your command line

you're gonna do a lot more work on the command line relative to traditional native development (at least iOS). let's examine some of our tools.

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
    "ios:xcode": "open ios/*.xcworkspace",
    "ios:clean": "rm -rf ios/build",
    "android": "yarn android:run",
    "android": "react-native run-android",
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

#### `standard` & `snazzy`

standard is a linter that will check your code style and automatically fix it for you. you can't really configure it, and that's a good thing.

snazzy is a tool that makes standard's output more readable.

javascript doesn't have any compile-time type safety (without tools), so a linter is necessary to not lose your mind. let's install and add scripts for them:

```sh
$ yarn add -D standard snazzy
```

```json
{
  ...
  "scripts": {
    "lint": "standard | snazzy",
    "lint:fix": "yarn lint --fix"
  },
  ...
}
```

#### jest
"test": "jest",
"test:watch": "jest --watch",
"test:debug": "node --debug-brk --inspect ./node_modules/.bin/jest --runInBand",




skip flow for now
