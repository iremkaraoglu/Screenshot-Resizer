![Frame 8](https://user-images.githubusercontent.com/45830699/183249361-8a8f62d8-d671-41c9-81af-24ee8cd20e05.png)

[Screenshot Resizer](https://www.figma.com/community/plugin/1107993996626134259) is a Figma Plugin that allows you to downscale your screenshots from physical size to logical size. Screenshot Resizer is able to handle multiple selections and downscale to their logical size at the same time.

Why would we need to have a logical size? We design by using the logical sizes of the devices and on Figma under the Prototype tab all the devices are located with their logical sizes. When you need to import a screenshot, you do not need to downscale manually your screenshot according to the device's scale factor anymore. 

Select the screenshot frame and run the plugin, enjoy! 

You may download the plugin from [here.](https://www.figma.com/community/plugin/1107993996626134259)

## OBJECTIVE 

When developing a mobile product, it is essential to have the outcome matching with the design. By this Figma Plugin, you will be able to check easily your device / simulator screenshot with the design on Figma. 

## HOW TO CONTRIBUTE 

Currently, the plugin supports **only iOS** device screen resolutions. I would be glad if you may add some Android device support.
If you find any bug or mistake about the resolutions, feel free to share it with me via **hi@iremkaraoglu.com** , open an issue or open a PR.


## INSTALLATION (Taken from the documentation)

Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/setup/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "tsc: watch - tsconfig.json". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
