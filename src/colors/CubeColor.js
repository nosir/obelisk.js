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
        this.border = obelisk.ColorGeom.get32(border || 0x878787);
        this.borderHighlight = obelisk.ColorGeom.get32(borderHighlight || 0xFFFFFF);
        this.left = obelisk.ColorGeom.get32(left || 0xC9CFD0);
        this.right = obelisk.ColorGeom.get32(right || 0xE3E3E3);
        this.horizontal = obelisk.ColorGeom.get32(horizontal || 0xEEEFF0);
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
