/*global obelisk:true*/

/*
 * PyramidColor
 */

(function (obelisk) {
    "use strict";

    var PyramidColor, p;
    PyramidColor = function (border, borderHighlight, left, right) {
        this.initialize(border, borderHighlight, left, right);
    };
    p = PyramidColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (border, borderHighlight, left, right) {
        this.border = obelisk.ColorGeom.get32(border || 0x949698);
        this.borderHighlight = obelisk.ColorGeom.get32(borderHighlight || 0xFFFFFF);
        this.left = obelisk.ColorGeom.get32(left || 0xE6E8E9);
        this.right = obelisk.ColorGeom.get32(right || 0xEEEFF0);
        return this;
    };

    // public methods
    p.getByRightColor = function (right) {
        return new PyramidColor(
            obelisk.ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(right, 0, true),
            obelisk.ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN),
            right
        );
    };

    p.toString = function () {
        return "[PyramidColor]";
    };

    // private methods

    obelisk.PyramidColor = PyramidColor;
}(obelisk));
