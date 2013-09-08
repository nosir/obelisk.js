// get DOM or jQuery element
// like: $('#canvas-demo')
var canvas = document.getElementById('canvas-demo');

// create pixel view container in point
var point = new obelisk.Point(500, 20);
var pixelView = new obelisk.PixelView(canvas, point);

// create brick
var color = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.PINK);
var dimension = new obelisk.BrickDimension(300, 400);
var brick = new obelisk.Brick(dimension, color);

// render in view
pixelView.renderObject(brick);
//var p3D = new obelisk.Point3D(20, 20, 0);
//pixelView.renderObject(brick, p3D);
