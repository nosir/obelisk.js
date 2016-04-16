/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var SideX = require('./SideX');
var SideXDimension = require('../dimensions/SideXDimension');
var SideColor = require('../colors/SideColor');
var PixelObject = require('../display/PixelObject');

var SlopeNorth, p;
SlopeNorth = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeNorth.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.yAxis * 3 / 2 + this.dimension.xAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.yAxis - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight, colorBorderHighlight,
        sideX, poX, ctx, bmd,
        i, j, n;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.right;
    colorBorderHighlight = this.border ? this.color.borderHighlight : this.color.left;

    sideX = new SideX(
        new SideXDimension(this.dimension.xAxis, this.h - this.dimension.xAxis / 2),
        new SideColor(colorBorderLeft, this.color.left)
    );

    poX = new PixelObject(sideX);

    ctx = this.bitmapData.context;
    ctx.drawImage(poX.canvas, poX.x, poX.y + this.h - this.dimension.xAxis / 2);

    bmd = new BitmapData(this.w, this.h);

    // close the path for floodfill
    for (i = this.h - this.dimension.yAxis * 3 / 2 + 2; i < this.h; i += 1) {
        bmd.setPixel(this.dimension.xAxis - 1, i, colorBorderRight);
    }

    // y axis
    for (j = 1; j < this.dimension.yAxis; j += 1) {
        bmd.setPixel(this.dimension.xAxis + j - 2, this.h - Math.floor(j / 2) - 1, colorBorderRight);
        bmd.setPixel(this.dimension.xAxis + j - 2, this.dimension.xAxis / 2 - 2 + j, colorBorderRight);
    }

    // flood fill
    bmd.floodFill(this.dimension.xAxis + 1, this.h - 3, this.color.right);

    //highlight
    for (n = this.dimension.xAxis / 2; n < this.h - 1; n += 1) {
        bmd.setPixel(this.dimension.xAxis - 1, n, this.color.right);
        bmd.setPixel(this.dimension.xAxis - 2, n, colorBorderHighlight);
    }

    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return "[SlopeNorth]";
};

module.exports = SlopeNorth;
