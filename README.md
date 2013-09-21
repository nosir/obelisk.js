# Obelisk.js

Obelisk.js is an open source JavaScript engine to build pixel isometric objects.

With this engine, you can easily add isometric pixel element like brick, cube, pyramid onto the canvas.

It is isometric graphic based, but not designed as an game engine. Just dive into it and try to pixelate something.

## Showcase

Cube Generator: http://jsdo.it/nosir/ttQD

GIF Animation Render: http://jsdo.it/nosir/meAL

## Getting started

1. Include obelisk.js on your page

    ```html
    <script src="//your-path/obelisk.min.js"></script>
    ```

2. Create pixel world

    ```javascript
    // create pixel isometric 2.5D axis zero point
    var point = new obelisk.Point(200, 200);

    // create world instance to nest everything
    // canvas could be either DOM or jQuery element
    var pixelView = new obelisk.PixelView(canvas, point);

    // create cube dimension and color instance
    var dimension = new obelisk.CubeDimension(80, 100, 120);
    var gray = obelisk.ColorPattern.GRAY;
    var color = new obelisk.CubeColor().getByHorizontalColor(gray);

    // build cube with dimension and color instance
    var cube = new obelisk.Cube(dimension, color, true);

    // render primitive into view
    pixelView.renderObject(cube);
    ```

## Demo tutorials

Cube: http://jsfiddle.net/nosir/ygWEW/

Pyramid : http://jsfiddle.net/nosir/ZVURu/

Brick: http://jsfiddle.net/nosir/6MuVr/

SideX & SideY: http://jsfiddle.net/nosir/bLsew/

## Roadmap

It is migrated from the ActionScript engine [Pixas](https://github.com/rison/pixas)

(All kinds of other primitive migration is still ongoing...)

## References

[Isometric projection](http://en.wikipedia.org/wiki/Isometric_projection)

[Isometric graphics in video games and pixel art](http://en.wikipedia.org/wiki/Isometric_graphics_in_video_games_and_pixel_art)

[Flood fill](http://en.wikipedia.org/wiki/Flood_fill)
