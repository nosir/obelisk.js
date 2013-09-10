// get DOM or jQuery element
// like: $('#canvas-demo')
var canvas = document.getElementById('canvas-demo');

// create pixel view container in point
var point = new obelisk.Point(500, 240);
var pixelView = new obelisk.PixelView(canvas, point);

// create cube
var dimension = new obelisk.CubeDimension(120, 200, 60);
var color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);
var cube = new obelisk.Cube(dimension, color);
//var cube = new obelisk.Cube(dimension, color, false);
pixelView.renderObject(cube);
