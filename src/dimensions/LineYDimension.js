/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var LineYDimension, p;
LineYDimension = function (axis) {
    this.initialize(axis);
};
p = LineYDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (yAxis) {
    this.yAxis = yAxis || 30;

    if (this.yAxis % 2 === 1) {
        throw new Error('yAxis must be even number');
    }

    if (this.yAxis < 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[LineYDimension]';
};

module.exports = LineYDimension;
