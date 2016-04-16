/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var SideY = require('./SideY');
var SideYDimension = require('../dimensions/SideYDimension');
var SideColor = require('../colors/SideColor');
var PixelObject = require('../display/PixelObject');

var SlopeWest, p;
SlopeWest = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeWest.prototype = new AbstractPrimitive();

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
    this.h = this.dimension.xAxis * 3 / 2 + this.dimension.yAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.xAxis - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight, colorBorderHighlight,
        sideY, poY, ctx, bmd,
        i, j, n;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.right;
    colorBorderHighlight = this.border ? this.color.borderHighlight : this.color.left;

    sideY = new SideY(
        new SideYDimension(this.dimension.yAxis, this.h - this.dimension.yAxis / 2),
        new SideColor(colorBorderRight, this.color.right)
    );

    poY = new PixelObject(sideY);

    ctx = this.bitmapData.context;
    ctx.drawImage(poY.canvas, poY.x + this.w - 2, poY.y + this.h - this.dimension.yAxis / 2);

    bmd = new BitmapData(this.w, this.h);

    // close the path for floodfill
    for (i = this.h - this.dimension.xAxis * 3 / 2 + 2; i < this.h; i += 1) {
        bmd.setPixel(this.dimension.xAxis - 2, i, colorBorderLeft);
    }

    //x axis
    for (j = 0; j < this.dimension.xAxis - 1; j += 1) {
        bmd.setPixel(j, this.dimension.xAxis + this.dimension.yAxis / 2 - 3 + Math.floor(j / 2), colorBorderLeft);
        bmd.setPixel(j, this.dimension.xAxis + this.dimension.yAxis / 2 - 3 - j, colorBorderLeft);
    }

    // flood fill
    bmd.floodFill(this.dimension.xAxis - 3, this.h - 3, this.color.left);

    //highlight
    for (n = this.dimension.yAxis / 2; n < this.h - 1; n += 1) {
        bmd.setPixel(this.dimension.xAxis - 2, n, colorBorderHighlight);
    }

    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return "[SlopeWest]";
};

module.exports = SlopeWest;
