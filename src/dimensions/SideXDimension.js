/*
 * SideXDimension
 */

(function (obelisk) {
    "use strict";

    var SideXDimension = function (_xAxis, _zAxis) {
        this.initialize(_xAxis, _zAxis);
    };
    var p = SideXDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_xAxis, _zAxis) {
        this.xAxis = _xAxis || 30;
        this.zAxis = _zAxis || 30;

        if (this.xAxis % 2 == 1) {
            throw new Error("xAxis must be even number");
        }

        // xAxis || zAxis = 4 floodFill could not be applied
        if (this.xAxis <= 4 || this.zAxis <= 2) {
            throw new Error("dimension is too small");
        }
        return this;
    };

    p.toString = function () {
        return "[SideXDimension]";
    };

    obelisk.SideXDimension = SideXDimension;
}(obelisk));
