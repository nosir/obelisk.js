/*
 * CubeColor
 */

(function (obelisk) {
    "use strict";

    var CubeColor = function (_border, _borderHighlight, _left, _right, __horizontal) {
        this.initialize(_border, _borderHighlight, _left, _right, __horizontal);
    };
    var p = CubeColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (_border, _borderHighlight, _left, _right, _horizontal) {
        this.border = obelisk.ColorGeom.get32(_border || 0x878787);
        this.borderHighlight = obelisk.ColorGeom.get32(_borderHighlight || 0xFFFFFF);
        this.left = obelisk.ColorGeom.get32(_left || 0xC9CFD0);
        this.right = obelisk.ColorGeom.get32(_right || 0xE3E3E3);
        this.horizontal = obelisk.ColorGeom.get32(_horizontal || 0xEEEFF0);
        return this;
    };

    // public methods
    p.getByHorizontalColor = function (_horizontal) {
        return new CubeColor
        (
            obelisk.ColorGeom.applyBrightness(_horizontal, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(_horizontal, 0, true),
            obelisk.ColorGeom.applyBrightness(_horizontal, this.BRIGHTNESS_GAIN * 2),
            obelisk.ColorGeom.applyBrightness(_horizontal, this.BRIGHTNESS_GAIN),
            _horizontal
        );
    };

    p.toString = function () {
        return "[CubeColor]";
    };

    // private methods

    obelisk.CubeColor = CubeColor;
}(obelisk));
