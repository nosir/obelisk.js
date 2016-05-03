/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var LineColor, p;
LineColor = function (border, inner) {
    this.initialize(border, inner);
};
p = LineColor.prototype = new AbstractColor();

// public properties

// constructor
p.initialize = function (border) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);

    return this;
};

p.toString = function () {
    return '[LineColor]';
};

module.exports = LineColor;
