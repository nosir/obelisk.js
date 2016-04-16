/*jslint node: true*/

'use strict';

var SideYDimension = require('../dimensions/SideYDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SideY, p;
SideY = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SideY.prototype = new AbstractPrimitive();

// public properties

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
    this.dimension = dimension === undefined ? new SideYDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.yAxis;
    this.h = this.dimension.zAxis + this.dimension.yAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;

    xOffsetInner = 0;
    yOffsetInner = this.h - this.dimension.zAxis - 1;
    xOffsetOut = this.dimension.yAxis - 1;
    yOffsetOut = this.dimension.zAxis;
    borderColor = this.border ? this.color.border : this.color.inner;

    //y axis
    for (i = 0; i < this.dimension.yAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner - Math.floor(i / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut + Math.floor(i / 2), borderColor);
    }

    //z axis
    for (j = 0; j < this.dimension.zAxis; j += 1) {
        this.bitmapData.setPixel(xOffsetInner, yOffsetInner + j, borderColor);
        this.bitmapData.setPixel(xOffsetOut, yOffsetOut - j, borderColor);
    }

    //fill an pixel graphic enclosed
    this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
};

// public methods
p.toString = function () {
    return '[SideY]';
};

module.exports = SideY;
