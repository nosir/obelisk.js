var canvas = document.getElementById('canvas-demo');

// create pixel view container in point
var point = new obelisk.Point(500, 20);
var pixelView = new obelisk.PixelView(canvas, point);

// create brick
var color = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.PINK);
var dimension = new obelisk.BrickDimension(400, 400);
var brick = new obelisk.Brick(dimension, color);

// render in view
pixelView.renderObject(brick);




