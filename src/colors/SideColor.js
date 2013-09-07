/*
 * SideColor
 */

(function (obelisk) {
    "use strict";

    var SideColor = function (_border, _inner) {
        this.initialize(_border, _inner);
    };
    var p = SideColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (_border, _inner) {
        this.border = obelisk.ColorGeom.get32(_border || 0x878787);
        this.inner = obelisk.ColorGeom.get32(_inner || 0xEEEEEE);
        return this;
    };

    // public methods
    p.getByInnerColor = function (_inner) {
        return new obelisk.SideColor(
            obelisk.ColorGeom.applyBrightness(_inner, this.BRIGHTNESS_GAIN * 4),
            _inner
        );
    };

    p.toString = function () {
        return "[SideColor]";
    };

    // private methods

    obelisk.SideColor = SideColor;
}(obelisk));
