// get DOM or jQuery element
// like: $('#canvas-demo')
var canvas = document.getElementById('canvas-demo');

// create pixel view container in point
var point = new obelisk.Point(400, 200);
var pixelView = new obelisk.PixelView(canvas, point);

// create brick
var colorX = new obelisk.LineColor(obelisk.ColorPattern.PINK);
var colorY = new obelisk.LineColor(obelisk.ColorPattern.BLACK);
var colorZ = new obelisk.LineColor(obelisk.ColorPattern.BLUE);

var dimensionX = new obelisk.LineXDimension(100);
var dimensionY = new obelisk.LineYDimension(100);
var dimensionZ = new obelisk.LineZDimension(100);

var lineX = new obelisk.LineX(dimensionX, colorX);
var lineY = new obelisk.LineY(dimensionY, colorY);
var lineZ = new obelisk.LineZ(dimensionZ, colorZ);

// render in view
var p3D = new obelisk.Point3D(0, 0, 0);
pixelView.renderObject(lineX, p3D);
pixelView.renderObject(lineY, p3D);
pixelView.renderObject(lineZ, p3D);



