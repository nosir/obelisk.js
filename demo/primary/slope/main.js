var canvas = document.getElementById('canvas-demo');

// create pixel view container in point
var point = new obelisk.Point(550, 50);
var pixelView = new obelisk.PixelView(canvas, point);

// create brick
var colorBrick = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.GRAY);
var dimension = new obelisk.BrickDimension(150, 400);
var brick = new obelisk.Brick(dimension, colorBrick);
//// render brick in view
pixelView.renderObject(brick);


// create slope color instance
var color = new obelisk.SlopeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);

// create slope dimension instance
var dimensionNorth = new obelisk.SlopeDimension(50, 40);
var dimensionEast = new obelisk.SlopeDimension(40, 50);
var dimensionSouth = new obelisk.SlopeDimension(50, 40);
var dimensionWest = new obelisk.SlopeDimension(40, 50);

// create cube primitive wihtout border
//var slopeNorth = new obelisk.SlopeNorth(dimension, color, false);

// create primitive with border
var slopeNorth = new obelisk.SlopeNorth(dimensionNorth, color);
var slopeEast = new obelisk.SlopeEast(dimensionEast, color);
var slopeSouth = new obelisk.SlopeSouth(dimensionSouth, color);
var slopeWest = new obelisk.SlopeWest(dimensionWest, color);

// render primitive to view
var p3dNorth = new obelisk.Point3D(50, 50, 0);
var p3dEast = new obelisk.Point3D(50, 200, 0);
var p3dSouth = new obelisk.Point3D(50, 125, 0);
var p3dWest = new obelisk.Point3D(50, 275, 0);

pixelView.renderObject(slopeNorth, p3dNorth);
pixelView.renderObject(slopeSouth, p3dSouth);
pixelView.renderObject(slopeEast, p3dEast);
pixelView.renderObject(slopeWest, p3dWest);
