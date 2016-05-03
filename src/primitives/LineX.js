/*jslint node: true*/

'use strict';

var LineXDimension = require('../dimensions/LineXDimension');
var LineColor = require('../colors/LineColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var LineX, p;
LineX = function (dimension, color, useDefaultCanvas) {
    this.initialize(dimension, color, useDefaultCanvas);
};
p = LineX.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new LineXDimension() : dimension;
    this.color = color === undefined ? new LineColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis;
    this.h = this.dimension.xAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = 0;
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

    xOffsetBorder = 0;
    yOffsetBorder = 0;
    borderColor = this.color.border;

    //x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetBorder + i, yOffsetBorder + Math.floor(i / 2), borderColor);
    }
};

// public methods
p.toString = function () {
    return '[LineX]';
};

module.exports = LineX;
