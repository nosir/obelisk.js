# Obelisk.js

Obelisk.js is a JavaScript Engine for building isometric pixel objects.

With the simple and flexible API provided by it, you can easily add isometric pixel element like brick, cube, pyramid onto HTML5 canvas. Obelisk.js strictly follows the pixel neat pattern: lines with 1:2 pixel dot arrangement, leading to an angle of 22.6 degrees. 

You should know this is not for vector isometric graphics drawing. In fact it is not using any canvas graphic drawing API at all, instead, it manipulates all the things in pixel level to obtain typical pixel arrangement. Just try it out to pixelate something. Have fun.

<img width="112" height="109" src="http://nosir.github.io/obelisk.js/images/logo.png"/>

## Showcase

Origin:
- GIF Animation Rendering: http://codepen.io/nosir/details/mdiHe (WebKit browser only - Chrome, Safari)
- Input Text Rendering: http://codepen.io/nosir/details/IxBJn
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


## Getting started

Simply include obelisk.js in your project
```html
<script src="//path/to/obelisk.min.js"></script>
```

Create pixel world
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
You can find out more details in tutorial part 1: [To build the first cube](https://github.com/nosir/obelisk.js/wiki/Tutorial-Part-1%3A-To-build-the-first-cube) or [try the code yourself](http://jsfiddle.net/nosir/ygWEW/)

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
- Brick: http://jsfiddle.net/nosir/6MuVr/
- SideX & SideY: http://jsfiddle.net/nosir/bLsew/

## Roadmap

To add more pixel primitives - 4 directions [slopes](http://nosir.github.io/obelisk.js/images/slope.gif) will be the first

## Get in Touch

- Build any cool stuff? Please feel free to add it here: [User Contributed Showcase](https://github.com/nosir/obelisk.js/wiki/User-Contributed-Showcase) I prefer you not to send PR to update README.md, someone will update it at some point:)
- Bugs & Suggestions: [open an issue](https://github.com/nosir/obelisk.js/issues)
- Twitter: [@rison](https://twitter.com/rison)

## Changelog

See details in the [release notes](https://github.com/nosir/obelisk.js/releases).

## References
Pixel art is a form of digital art, where images are edited and displayed on the pixel level. The isometric projection is commonly seen in games to provide a 3D view without using any real 3D processing.

- Isometric projection http://en.wikipedia.org/wiki/Isometric_projection
- Flood fill implementation http://en.wikipedia.org/wiki/Flood_fill
- Pixel grapic - Eboy http://eboy.com

## License

Obelisk.js is released under the [MIT License](http://opensource.org/licenses/MIT)
