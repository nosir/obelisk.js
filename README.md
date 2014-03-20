# Obelisk.js

Obelisk.js is an open source JavaScript engine to build pixel isometric objects.

With this engine, you can easily add isometric pixel element like brick, cube, pyramid onto HTML5 canvas.

This is not just for game, step into and try to pixelate something. Have fun.

## Showcase

- Input Text Rendering: http://codepen.io/nosir/details/IxBJn

- GIF Animation Rendering: http://codepen.io/nosir/details/mdiHe (Webkit Browser Only)

- Pixel Isometirc Flappy Bird: http://codepen.io/nosir/details/rzaLA

- Cube Generator: http://codepen.io/nosir/details/ganrh

## Getting started

Include obelisk.js in your project
```html
<script src="//your-path/obelisk.min.js"></script>
```

Create pixel world
```javascript
// create pixel isometric 2.5D axis zero point instance
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

## Tutorials - to build basic elements one by one

- Cube: http://jsfiddle.net/nosir/ygWEW/
- Pyramid : http://jsfiddle.net/nosir/ZVURu/
- Brick: http://jsfiddle.net/nosir/6MuVr/
- SideX & SideY: http://jsfiddle.net/nosir/bLsew/

## Roadmap

To add more primitives - 4 directions slopes will be the first

## Get in Touch

- Bugs & Suggestions: [open an issue](https://github.com/nosir/obelisk.js/issues)
- Twitter: [@obeliskjs](https://twitter.com/obeliskjs)

## References

- Isometric projection http://en.wikipedia.org/wiki/Isometric_projection
- Flood fill implementation http://en.wikipedia.org/wiki/Flood_fill
- Pixel grapic - Eboy http://eboy.com

## License

[MIT](http://opensource.org/licenses/MIT)
