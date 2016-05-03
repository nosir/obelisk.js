/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var LineZDimension, p;
LineZDimension = function (axis) {
    this.initialize(axis);
};
p = LineZDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (zAxis) {
    this.zAxis = zAxis || 30;

    if (this.zAxis <= 0) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[LineZDimension]';
};

module.exports = LineZDimension;
