/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var CubeColor, p;
CubeColor = function (border, borderHighlight, left, right, horizontal) {
    this.initialize(border, borderHighlight, left, right, horizontal);
};
p = CubeColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right, horizontal) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xE3E3E3 : right);
    this.horizontal = ColorGeom.get32(horizontal === undefined ? 0xEEEFF0 : horizontal);
    return this;
};

// public methods
p.getByHorizontalColor = function (horizontal) {
    return new CubeColor(
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(horizontal, 0, true),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
        horizontal
    );
};

p.toString = function () {
    return "[CubeColor]";
};

module.exports = CubeColor;
