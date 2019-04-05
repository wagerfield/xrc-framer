# XRC FramerX Project & Components

Use the `xrc` React component library in FramerX.

## Usage

1. Clone or download this repo
2. Open the `xrc.framerfx` project
3. Navigate to the components panel
4. Drag a component onto the stage
5. Play around with the component controls in the property panel
6. Make something great

## Development

1. Clone both the [`xrc`][xrc-repository] and [`xrc-framer`][xrc-framer-repository] repositories
2. Run `yarn` from the project roots to install the dependencies
3. From within `xrc-framer` run `cd xrc.framerfx`
4. Run `yarn` again to install the FramerX project dependencies
5. From within the `xrc` repository run `yarn link`
6. From within the `xrc-framer/xrc.framerfx` directory run `yarn link xrc`
7. The `xrc.framerfx` project will now use your local `xrc` package
8. From within the `xrc` repository run `yarn watch` to start the TypeScript compiler in watch mode

When you make any changes to either the `xrc` or `xrc-framer` components, they will be instantly reflected inside the FramerX project. Hack away and enjoy!

[xrc-repository]: https://github.com/wagerfield/xrc
[xrc-framer-repository]: https://github.com/wagerfield/xrc-framer
