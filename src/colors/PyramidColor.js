/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var PyramidColor, p;
PyramidColor = function (border, borderHighlight, left, right) {
    this.initialize(border, borderHighlight, left, right);
};
p = PyramidColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right) {
    this.border = ColorGeom.get32(border === undefined ? 0x949698 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xE6E8E9 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xEEEFF0 : right);

    return this;
};

// public methods
p.getByRightColor = function (right) {
    return new PyramidColor(
        ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(right, 0, true),
        ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN),
        right
    );
};

p.toString = function () {
    return "[PyramidColor]";
};

module.exports = PyramidColor;
