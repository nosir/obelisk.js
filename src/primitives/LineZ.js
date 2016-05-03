/*jslint node: true*/

'use strict';

var LineZDimension = require('../dimensions/LineZDimension');
var LineColor = require('../colors/LineColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var LineZ, p;
LineZ = function (dimension, color, useDefaultCanvas) {
    this.initialize(dimension, color, useDefaultCanvas);
};
p = LineZ.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new LineZDimension() : dimension;
    this.color = color === undefined ? new LineColor() : color;
};

p.initRectangle = function () {
    this.w = 1;
    this.h = this.dimension.zAxis;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = 0;
    this.matrix.ty = -this.dimension.zAxis + 1;
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

    //y axis
    for (i = 0; i < this.dimension.zAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetBorder, yOffsetBorder + i, borderColor);
    }
};

// public methods
p.toString = function () {
    return '[LineZ]';
};

module.exports = LineZ;
