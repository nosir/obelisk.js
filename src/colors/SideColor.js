/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var SideColor, p;
SideColor = function (border, inner) {
    this.initialize(border, inner);
};
p = SideColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, inner) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);
    this.inner = ColorGeom.get32(inner === undefined ? 0xEEEEEE : inner);

    return this;
};

// public methods
p.getByInnerColor = function (inner) {
    return new SideColor(
        ColorGeom.applyBrightness(inner, this.BRIGHTNESS_GAIN * 4),
        inner
    );
};

p.toString = function () {
    return "[SideColor]";
};

module.exports = SideColor;
