/*jslint node: true*/
/*global window:true*/

'use strict';

/**
 * @namespace obelisk
 **/
var obelisk = {};

obelisk.Cube = require('./primitives/Cube');
obelisk.Brick = require('./primitives/Brick');
obelisk.Pyramid = require('./primitives/Pyramid');
obelisk.SideX = require('./primitives/SideX');
obelisk.SideY = require('./primitives/SideY');
obelisk.SlopeEast = require('./primitives/SlopeEast');
obelisk.SlopeNorth = require('./primitives/SlopeNorth');
obelisk.SlopeSouth = require('./primitives/SlopeSouth');
obelisk.SlopeWest = require('./primitives/SlopeWest');

obelisk.ColorPattern = require('./utils/ColorPattern');
obelisk.ColorGeom = require('./utils/ColorGeom');
obelisk.CanvasManager = require('./utils/CanvasManager');
obelisk.CanvasTool = require('./utils/CanvasTool');

obelisk.Matrix = require('./geom/Matrix');
obelisk.Point = require('./geom/Point');
obelisk.Point3D = require('./geom/Point3D');

obelisk.PixelView = require('./display/PixelView');
obelisk.PixelObject = require('./display/PixelObject');
obelisk.BitmapData = require('./display/BitmapData');

obelisk.BrickDimension = require('./dimensions/BrickDimension');
obelisk.CubeDimension = require('./dimensions/CubeDimension');
obelisk.PyramidDimension = require('./dimensions/PyramidDimension');
obelisk.SideXDimension = require('./dimensions/SideXDimension');
obelisk.SideYDimension = require('./dimensions/SideYDimension');
obelisk.SlopeDimension = require('./dimensions/SlopeDimension');

obelisk.CubeColor = require('./colors/CubeColor');
obelisk.PyramidColor = require('./colors/PyramidColor');
obelisk.SideColor = require('./colors/SideColor');
obelisk.SlopeColor = require('./colors/SlopeColor');

window.obelisk = obelisk;

module.exports = obelisk;

