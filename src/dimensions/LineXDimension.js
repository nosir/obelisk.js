/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var LineXDimension, p;
LineXDimension = function (axis) {
    this.initialize(axis);
};
p = LineXDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis) {
    this.xAxis = xAxis || 30;

    if (this.xAxis % 2 === 1) {
        throw new Error('xAxis must be even number');
    }

    if (this.xAxis < 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[LineXDimension]';
};

module.exports = LineXDimension;
