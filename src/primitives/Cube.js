/*jslint node: true*/

'use strict';

var CubeDimension = require('../dimensions/CubeDimension');
var BrickDimension = require('../dimensions/BrickDimension');
var SideXDimension = require('../dimensions/SideXDimension');
var SideYDimension = require('../dimensions/SideYDimension');
var CubeColor = require('../colors/CubeColor');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var PixelObject = require('../display/PixelObject');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var Brick = require('./Brick');
var SideX = require('./SideX');
var SideY = require('./SideY');

var Cube, p;
Cube = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Cube.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new CubeDimension() : dimension;
    this.color = color === undefined ? new CubeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.zAxis + (this.dimension.xAxis + this.dimension.yAxis) / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 1;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var brick, sideX, sideY, poBrick, poX, poY, ctx, bmd, offsetX, offsetY,
        i, j, k;
    // horizontal layer
    brick = new Brick(
        new BrickDimension(this.dimension.xAxis, this.dimension.yAxis),
        new SideColor(this.color.border, this.color.horizontal),
        this.border
    );

    // left side
    sideX = new SideX(
        new SideXDimension(this.dimension.xAxis, this.dimension.zAxis),
        new SideColor(this.color.border, this.color.left),
        this.border
    );

    // right side
    sideY = new SideY(
        new SideYDimension(this.dimension.yAxis, this.dimension.zAxis),
        new SideColor(this.color.border, this.color.right),
        this.border
    );

    poBrick = new PixelObject(brick);
    poX = new PixelObject(sideX);
    poY = new PixelObject(sideY);

    ctx = this.bitmapData.context;
    ctx.drawImage(poBrick.canvas, poBrick.x + this.dimension.yAxis - 2, poBrick.y);
    ctx.drawImage(poX.canvas, poX.x, poX.y + this.dimension.zAxis + this.dimension.yAxis / 2 - 1);
    ctx.drawImage(poY.canvas, poY.x + this.w - 2, poX.y + this.dimension.zAxis + this.dimension.xAxis / 2 - 1);

    // highlight & highlight fix
    bmd = new BitmapData(this.w, this.h);

    if (this.border) {
        offsetX = this.dimension.xAxis - 2;
        offsetY = (this.dimension.xAxis + this.dimension.yAxis) / 2 - 2;

        //the 2px in bounding without hightlight
        for (i = 0; i < this.dimension.xAxis - 2; i += 1) {
            bmd.setPixel(offsetX + 1 - i, offsetY - Math.floor(i / 2), this.color.borderHighlight);
        }

        //the 2px in bounding without hightlight
        for (j = 0; j < this.dimension.yAxis - 2; j += 1) {
            bmd.setPixel(offsetX + j, offsetY - Math.floor(j / 2), this.color.borderHighlight);
        }

        for (k = 0; k < this.dimension.zAxis; k += 1) {
            bmd.setPixel(offsetX, offsetY + k, this.color.borderHighlight);
        }
    } else {
        for (i = 0; i < this.dimension.zAxis; i += 1) {
            bmd.setPixel(this.dimension.xAxis - 2, (this.dimension.xAxis + this.dimension.yAxis) / 2 - 1 + i, this.color.left);
        }
    }
    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return '[Cube]';
};

module.exports = Cube;
