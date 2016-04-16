/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SideYDimension, p;

SideYDimension = function (yAxis, zAxis) {
    this.initialize(yAxis, zAxis);
};
p = SideYDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (yAxis, zAxis) {
    this.yAxis = yAxis || 30;
    this.zAxis = zAxis || 30;

    if (this.yAxis % 2 === 1) {
        throw new Error("yAxis must be even number");
    }

    // yAxis || zAxis = 4 floodFill could not be applied
    if (this.yAxis <= 4 || this.zAxis <= 2) {
        throw new Error("dimension is too small");
    }

    return this;
};

p.toString = function () {
    return "[SideYDimension]";
};

module.exports = SideYDimension;
