/*
 * PyramidColor
 */

(function (obelisk) {
    "use strict";

    var PyramidColor = function (_border, _borderHighlight, _left, _right) {
        this.initialize(_border, _borderHighlight, _left, _right);
    };
    var p = PyramidColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (_border, _borderHighlight, _left, _right, _horizontal) {
        this.border = obelisk.ColorGeom.get32(_border || 0x949698);
        this.borderHighlight = obelisk.ColorGeom.get32(_borderHighlight || 0xFFFFFF);
        this.left = obelisk.ColorGeom.get32(_left || 0xE6E8E9);
        this.right = obelisk.ColorGeom.get32(_right || 0xEEEFF0);
        return this;
    };

    // public methods
    p.getByRightColor = function (_right) {
        return new PyramidColor
        (
            obelisk.ColorGeom.applyBrightness(_right, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(_right, 0, true),
            obelisk.ColorGeom.applyBrightness(_right, this.BRIGHTNESS_GAIN),
            _right
        );
    };

    p.toString = function () {
        return "[PyramidColor]";
    };

    // private methods

    obelisk.PyramidColor = PyramidColor;
}(obelisk));
