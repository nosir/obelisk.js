// get DOM or jQuery element
// like: $('#canvas-demo')
var canvas = document.getElementById('canvas-demo');

// create pixel view container in point
var point = new obelisk.Point(500, 240);
var pixelView = new obelisk.PixelView(canvas, point);

// create pyramid
//var dimension = new obelisk.PyramidDimension(120, true);
var dimension = new obelisk.PyramidDimension(120);
var color = new obelisk.PyramidColor().getByRightColor(obelisk.ColorPattern.YELLOW);
var pyramid = new obelisk.Pyramid(dimension, color);
pixelView.renderObject(pyramid);
