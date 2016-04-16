/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var SlopeColor, p;
SlopeColor = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
    this.initialize(border, borderHighlight, left, right, leftSlope, rightSlope);
};
p = SlopeColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
    this.border = ColorGeom.get32(border === undefined ? 0x949698 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xE6E8E9 : right);
    this.leftSlope = ColorGeom.get32(leftSlope === undefined ? 0xDBDBDB : leftSlope);
    this.rightSlope = ColorGeom.get32(rightSlope === undefined ? 0xDBDBDB : rightSlope);

    return this;
};

// public methods

/*
 * horizontal side doesn't actually exist in the Slope primitive
 * you can assign the same horizontal color as cube
 * so that you will be able to arrange the slope with cube
 */
p.getByHorizontalColor = function (horizontal) {
    return new SlopeColor(
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(horizontal, 0, true),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 1.5),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 0.5)
    );
};

p.toString = function () {
    return '[SlopeColor]';
};

module.exports = SlopeColor;
