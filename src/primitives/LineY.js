/*jslint node: true*/

'use strict';

var LineYDimension = require('../dimensions/LineYDimension');
var LineColor = require('../colors/LineColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var LineY, p;
LineY = function (dimension, color, useDefaultCanvas) {
    this.initialize(dimension, color, useDefaultCanvas);
};
p = LineY.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, useDefaultCanvas) {
    this.initRender(dimension, color, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.dimension = dimension === undefined ? new LineYDimension() : dimension;
    this.color = color === undefined ? new LineColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.yAxis;
    this.h = this.dimension.yAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = 0;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};

p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetBorder, yOffsetBorder, i, borderColor;

    xOffsetBorder = this.dimension.yAxis - 1;
    yOffsetBorder = 0;
    borderColor = this.color.border;

    //y axis
    for (i = 0; i < this.dimension.yAxis; i += 1) {
        console.log(i);
        this.bitmapData.setPixel(xOffsetBorder - i, yOffsetBorder + Math.floor(i / 2), borderColor);
    }
};

// public methods
p.toString = function () {
    return '[LineY]';
};

module.exports = LineY;
