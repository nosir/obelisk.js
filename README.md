# Obelisk.js

[![Join the chat at https://gitter.im/nosir/obelisk.js](https://badges.gitter.im/nosir/obelisk.js.svg)](https://gitter.im/nosir/obelisk.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Travis](https://img.shields.io/travis/nosir/obelisk.js.svg?maxAge=2592000)](https://travis-ci.org/nosir/obelisk.js)
[![GitHub release](https://img.shields.io/github/release/nosir/obelisk.js.svg?maxAge=2592000)](https://github.com/nosir/obelisk.js)
[![Codacy](https://img.shields.io/codacy/dea18e66031141a39d4549b170343aa9.svg?maxAge=2592000)](https://www.codacy.com/app/nosir/obelisk-js/dashboard)

obelisk.js is a JavaScript library for building isometric pixel objects.

With the simple and flexible API provided, you can easily add isometric pixel elements like brick, cube, pyramid and slope in HTML5 canvas. Obelisk.js strictly follows pixel neat pattern: lines with 1:2 pixel dot arrangement, leading to an angle of 22.6 degrees.

Also you should know obelisk.js is not for vector isometric graphics drawing and rendering. Internally it does not use any canvas graphic drawing API, instead, it manipulates all the rendering in pixel level to obtain precise pixel arrangement. Just try it out to pixelate something. Have fun.

<img width="112" height="109" src="http://nosir.github.io/obelisk.js/images/logo.png"/>

## 1.2.0 Release
The newest version is written by CommonJS style, which means you can easily use it in browserify project. [See details here](#development-browser)

## Showcase

Origin:
- Input Text Rendering: http://codepen.io/nosir/details/IxBJn
- GIF Animation Rendering: http://codepen.io/nosir/details/mdiHe (Safari only)
- Pixel Isometirc Flappy Bird: http://codepen.io/nosir/details/rzaLA
- Cube Generator: http://codepen.io/nosir/details/ganrh

User Contributed:
- Github Contribution Chart Isometric View Chrome Extension: [Github Project URL](https://github.com/jasonlong/isometric-contributions) by  [@jasonlong](https://twitter.com/jasonlong)
- Online Voxel Builder: http://ngryman.sh/obelisk-buildr by [@ngryman](https://twitter.com/ngryman)
- Snake Game: http://codepen.io/sfaedo/full/AwGjg (Use &larr; &rarr; Key) by [@Sebastian Faedo](http://codepen.io/sfaedo)
- Mario 3D voxel: http://jsdo.it/cx20/bQtQ by [@cx20](https://twitter.com/cx20)
- Conway's Game of Life: http://codepen.io/safx/full/Ewcym by [@safxdev](https://twitter.com/safxdev)
- Node Server-side Image Rendering with [node-canvas](https://github.com/learnboost/node-canvas): [Github Project URL](https://github.com/pose/node-obelisk-example) by [@pose](https://github.com/pose)
- Animations with Angular.js: [Github Project URL](https://github.com/Wildhoney/ngObelisk) by [@Wildhoney](https://github.com/Wildhoney)
- Perlin Noise Map: http://codepen.io/slobaum/pen/zhmFL by [@slobaum](https://twitter.com/slobaum)
- [More on CodePen](http://codepen.io/search/pens/?depth=everything&limit=all&order=newest&page=1&q=obelisk.js&show_forks=false)

## Getting started

Simply include obelisk.js in your project
```html
<script src="//path/to/obelisk.min.js"></script>
```
In JavaScript
```javascript
// create a canvas 2D point for pixel view world
var point = new obelisk.Point(200, 200);

// create view instance to nest everything
// canvas could be either DOM or jQuery element
var pixelView = new obelisk.PixelView(canvas, point);

// create cube dimension and color instance
var dimension = new obelisk.CubeDimension(80, 100, 120);
var gray = obelisk.ColorPattern.GRAY;
var color = new obelisk.CubeColor().getByHorizontalColor(gray);

// build cube with dimension and color instance
var cube = new obelisk.Cube(dimension, color, true);

// render cube primitive into view
pixelView.renderObject(cube);
```
For more details, check the tutorial [part 1](https://github.com/nosir/obelisk.js/wiki/Tutorial-Part-1%3A-To-build-the-first-cube): To build the first cube, or [try the code yourself](http://jsfiddle.net/nosir/ygWEW/)

## Tutorials
Step by step:
- Part 1: [To build the first cube](https://github.com/nosir/obelisk.js/wiki/Tutorial-Part-1%3A-To-build-the-first-cube)
- Part 2: [Coordinate system](https://github.com/nosir/obelisk.js/wiki/Tutorial-Part-2%3A-Coordinate-system)
- Part 3: [Primitives](https://github.com/nosir/obelisk.js/wiki/Tutorial-Part-3%3A-Primitives)
- Part 4: [Color](https://github.com/nosir/obelisk.js/wiki/Tutorial-Part-4%3A-Color)
- Part 5: [Dimension](https://github.com/nosir/obelisk.js/wiki/Tutorial-Part-5%3A-Dimension)

Sample code for building all primitives:
- Cube: http://jsfiddle.net/nosir/ygWEW/
- Pyramid : http://jsfiddle.net/nosir/ZVURu/
- LineX, LineY, LineZ: http://jsfiddle.net/nosir/gnbqwr2L/
- Brick: http://jsfiddle.net/nosir/6MuVr/
- SideX, SideY: http://jsfiddle.net/nosir/bLsew/
- SlopeNorth, SlopeEast, SlopeSouth, SlopeEast: http://jsfiddle.net/nosir/28B9G/

## Development (Browser)
### Browserify

Obelisk.js can be used from [browserify](https://github.com/substack/node-browserify) project. Simply:

```sh
$ npm install obelisk.js
```

In your JavaScript

```javascript
var obelisk = require('obelisk.js');

// Now you can do the same as above
```

### Want to build the project locally?

```
$ git clone https://github.com/nosir/obelisk.js.git
$ npm install
```

Build
```
$ gulp build
```

Develop
```
$ gulp browserify:watch
```

## Advanced Usage (Node.js)
### Node.js

Also you can use it in your Node.js canvas project

> As node.js `canvas` dependency can be tricky to install (binary dependency on Cairo) we are not adding it as a project dependency. You will need to add the `canvas` dependency explicitly on your project:

```sh
$ npm install canvas
```

```sh
$ npm install obelisk.js
```

In your JavaScript

```js
// load Node Canvas dependency
var Canvas = require('canvas');

// load obelisk.js module
// here we need the Canvas as a module parameter
var obelisk = require('obelisk.js')(Canvas);

// create a Node Canvas instance
var canvas = new Canvas(600,450);

// Use obelisk the same way you will use it in the browser ...

// Save canvas to a file
canvas.createPNGStream().pipe(fs.createWriteStream('./figure.png'));
```

For more details, check the [Node.js Canvas example](https://github.com/pose/node-obelisk-example).

## Get in Touch

- Build any cool stuff? Please feel free to add it here: [User Contributed Showcase](https://github.com/nosir/obelisk.js/wiki/User-Contributed-Showcase)
- Bugs & Suggestions: [open an issue](https://github.com/nosir/obelisk.js/issues)
- Twitter: [@rison](https://twitter.com/rison)

## Changelog

See details here: [release notes](https://github.com/nosir/obelisk.js/releases).

## References
Pixel art is a form of digital art, where images are edited and displayed on the pixel level. The isometric projection is commonly seen in games to provide a 3D view without using any real 3D processing.

- Isometric projection http://en.wikipedia.org/wiki/Isometric_projection
- Flood fill implementation http://en.wikipedia.org/wiki/Flood_fill
- Pixel grapic - Eboy http://eboy.com

## License

Obelisk.js is released under the [MIT License](http://opensource.org/licenses/MIT)
