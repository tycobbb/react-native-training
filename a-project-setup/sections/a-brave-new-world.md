# a brave new world

let's spin up a project

```sh
$ react-native init <project>
$ cd <project>
```

## a configuration for all seasons

`package.json` is your core config file, and it can configure most things. if it can configure it, it generally should.

`app.json` configures yout react-native app. you can specify things like your app's name here.

`yarn.lock` is your dependency lockfile. it records the canonical versions for the packages you install, and makes sure you and the person next to you installs those same versions.

`.babelrc` configures babel, the tool that allows you to use es6 (and future) javascript syntax. babel transpiles your code down to es-whatever-is-needed-by-your-platform. if you need to add new javascript language features, you would add them here.

`.flowconfig` configures flow-type, a static type-checker for javascript. we'll skip this one for now.

`.buckconfig` configures buck, a task runner that uses a language called 'bucklescript'. we'll skip this one forever?

## keep it together

let's delete .babelrc:

```sh
$ rm .babelrc
```

you can configure babel through your package.json, and i think it's better there. copy over .babelrc's contents, like this:

```json
{
  ...
  "babel": {
    "presets": ["react-native"]
  },
  ...
}
```
