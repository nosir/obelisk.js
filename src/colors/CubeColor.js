/*global obelisk:true*/

/*
 * CubeColor
 */

(function (obelisk) {
    "use strict";

    var CubeColor, p;
    CubeColor = function (border, borderHighlight, left, right, horizontal) {
        this.initialize(border, borderHighlight, left, right, horizontal);
    };
    p = CubeColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (border, borderHighlight, left, right, horizontal) {
        this.border = obelisk.ColorGeom.get32(border === undefined ? 0x878787 : border);
        this.borderHighlight = obelisk.ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
        this.left = obelisk.ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
        this.right = obelisk.ColorGeom.get32(right === undefined ? 0xE3E3E3 : right);
        this.horizontal = obelisk.ColorGeom.get32(horizontal === undefined ? 0xEEEFF0 : horizontal);
        return this;
    };

    // public methods
    p.getByHorizontalColor = function (horizontal) {
        return new CubeColor(
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(horizontal, 0, true),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
            horizontal
        );
    };

    p.toString = function () {
        return "[CubeColor]";
    };

    // private methods

    obelisk.CubeColor = CubeColor;
}(obelisk));
