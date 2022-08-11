![Frame 8](https://user-images.githubusercontent.com/45830699/183249361-8a8f62d8-d671-41c9-81af-24ee8cd20e05.png)

[Screenshot Resizer](https://www.figma.com/community/plugin/1107993996626134259) is a Figma Plugin that allows you to downscale your screenshots from physical size to logical size. Screenshot Resizer is able to handle multiple selections and downscale to their logical size at the same time.

Why would we need to have a logical size? We design by using the logical sizes of the devices and on Figma under the Prototype tab all the devices are located with their logical sizes. When you need to import a screenshot, you do not need to downscale manually your screenshot according to the device's scale factor anymore. 

Select the screenshot frame and run the plugin, enjoy! 

You may download the plugin from [here.](https://www.figma.com/community/plugin/1107993996626134259)

## Objective 

When developing a mobile product, it is essential to have the outcome matching with the design. By this Figma Plugin, you will be able to check easily your device / simulator screenshot with the design on Figma. 

## How to contribute 

Currently, the plugin supports **only iOS** device screen resolutions. I would be glad if you may add some Android device support.
If you find any bug or mistake about the resolutions, feel free to share it with me via **hi@iremkaraoglu.com** , open an issue or open a PR.

## Installation

This plugin uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, in the directory of your plugin, get the third party libraries by using the command:

  ```npm install```

## How to run the plugin

In the directory of your plugin, run typescript compiler in watch mode by using the command:

  ```npm run start```

For the Figma connection, you can find instructions at:

https://www.figma.com/plugin-docs/setup/
