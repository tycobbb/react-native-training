# squashing your beefs

you're gonna write broken code (especially if you don't use flowtype or typescript). debugging in react-native is thankfully fairly easy, and has been getting better recently.

## choppin' logs

as always, you can log information via `console.log` and watch the output as you go about your business. you can view the logs one of two ways.

you can view it in the terminal, using `yarn ios:log`. this gets really noisy, as it spits out a lot of system information as well. i'd recommend piping its output through grep to make it more readable:

```sh
$ yarn ios:log | grep <filter>
```

you can also view it in the debugger. this will only output your application logs (as well as any react-native warnings / errors), so it's a lot cleaner. the debugger can be a resouce hog though, since its a chrome browser. it's a trade-off.

## cooking step-by-step

you can launch the interactive debugger launching the developer menu from the simulator (`⌘D`) or emulator (`⌘M`) and clicking 'debug js remotely'.

this will open up a chrome window, attached to the app. i recommend clicking the 'maintain priority' checkbox, and then launch the developer console using `⇧⌘J`. you can either add breakpoints in your code by adding a line that says `debugger`, or by finding the source file in the chrome developer console (`⌘P` to search) and clicking on a line in the gutter.

the debugger works like any other, though you can add breakpoints by clicking in certain places due to babel transpilation. just click around.
