# hello

before getting started, let's make sure you have a functional shell environment get some software installed. if you already have any of this stuff, great, but please make sure it all plays nicely together. if we have relatively uniform environments we can spend less time troubleshooting boring stuff.

## tools

ensure you have the following tools:

- xcode w/ command line tools
- [brew](https://brew.sh/)

if you already have brew, ensure it's up-to-date:

```sh
$ brew update && brew upgrade
$ brew doctor
```

and then let's brew to install the react-native cli and related tools:

```sh
# install yarn (we'll use it instead of npm)
$ brew install yarn

# add the yarn global bin to your path
# (assumes you use bash; if you manage your shell/config differently you know what to do)
$ echo 'export PATH="$PATH:`yarn global bin`"' >> ~/.bashrc
$ source ~/.bashrc

# install brew cask and android studio
$ brew tap caskroom/cask
$ brew cask install android-studio

# install react-native-cli
$ yarn global install react-native
```

init a project make sure everything works:

```sh
$ react-native init TestProject
$ cd TestProject
$ react-native run-ios
```

## editor

i recommend using `atom` for building react-native apps. let's get that going and install some useful atom packages.

```sh
$ brew cask install atom
$ atom
```

we need 'one' package, `nuclide` (it'll install a bunch of others for you):

1. bring up the **command palette** (`⇧⌘P`).
2. search for 'install packages' and hit enter.
3. install nuclide

bear with me, we need to update a few settings. let's fix some atom defaults:

1. open atom settings (`⌘,`)
2. under 'core settings' uncheck 'close empty windows'

and also some nuclide package defaults:

1. open 'installed packages' using the command palette `⌘⇧P`
2. search for 'nuclide'
3. click the settings gear
4. find and check 'install recommended packages on startup'

and finally, some nuclide defaults:

1. open nuclide settings (`⌥⌘,`)
2. uncheck 'show open files'
3. uncheck 'show uncommitted changes'

there are other nice-to-haves, but we can change them as needed.
