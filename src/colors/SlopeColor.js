/*global obelisk:true*/

/*
 * SlopeColor
 */

(function (obelisk) {
    "use strict";

    var SlopeColor, p;
    SlopeColor = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
        this.initialize(border, borderHighlight, left, right, leftSlope, rightSlope);
    };
    p = SlopeColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
        this.border = obelisk.ColorGeom.get32(border === undefined ? 0x949698 : border);
        this.borderHighlight = obelisk.ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
        this.left = obelisk.ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
        this.right = obelisk.ColorGeom.get32(right === undefined ? 0xE6E8E9 : right);
        this.leftSlope = obelisk.ColorGeom.get32(leftSlope === undefined ? 0xDBDBDB : leftSlope);
        this.rightSlope = obelisk.ColorGeom.get32(rightSlope === undefined ? 0xDBDBDB : rightSlope);
        return this;
    };

    // public methods

    /*
     * horizontal side doesn't actually exist in the Slope primitive
     * you can assign the same horizontal color as cube
     * so that you will be able to arrange the slope with cube
     */
    p.getByHorizontalColor = function (horizontal) {
        return new obelisk.SlopeColor(
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(horizontal, 0, true),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 1.5),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 0.5)
        );
    };

    p.toString = function () {
        return "[SlopeColor]";
    };

    // private methods

    obelisk.SlopeColor = SlopeColor;
}(obelisk));
