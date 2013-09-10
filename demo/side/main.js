// get DOM or jQuery element
// like: $('#canvas-demo')
var canvas = document.getElementById('canvas-demo');

// create pixel view container in point
var point = new obelisk.Point(500, 200);
var pixelView = new obelisk.PixelView(canvas, point);

// create brick
var colorX = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.PINK);
var colorY = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.GRASS_GREEN);
var dimensionX = new obelisk.SideXDimension(300, 100);
var dimensionY = new obelisk.SideYDimension(300, 100);
var sideX = new obelisk.SideX(dimensionX, colorX);
var sideY = new obelisk.SideY(dimensionY, colorY);

// render in view
pixelView.renderObject(sideX);

var p3DY = new obelisk.Point3D(0, 30, 0);
pixelView.renderObject(sideY, p3DY);