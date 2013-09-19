/*global obelisk:true*/

/*
 * SideColor
 */

(function (obelisk) {
    "use strict";

    var SideColor, p;
    SideColor = function (border, inner) {
        this.initialize(border, inner);
    };
    p = SideColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (border, inner) {
        this.border = obelisk.ColorGeom.get32(border === undefined ? 0x878787 : border);
        this.inner = obelisk.ColorGeom.get32(inner === undefined ? 0xEEEEEE : inner);
        return this;
    };

    // public methods
    p.getByInnerColor = function (inner) {
        return new obelisk.SideColor(
            obelisk.ColorGeom.applyBrightness(inner, this.BRIGHTNESS_GAIN * 4),
            inner
        );
    };

    p.toString = function () {
        return "[SideColor]";
    };

    // private methods

    obelisk.SideColor = SideColor;
}(obelisk));
