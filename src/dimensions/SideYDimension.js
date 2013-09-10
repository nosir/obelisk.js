/*
 * SideYDimension
 */

(function (obelisk) {
    "use strict";

    var SideYDimension = function (_yAxis, _zAxis) {
        this.initialize(_yAxis, _zAxis);
    };
    var p = SideYDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_yAxis, _zAxis) {
        this.yAxis = _yAxis || 30;
        this.zAxis = _zAxis || 30;

        if (this.yAxis % 2 == 1) {
            throw new Error("yAxis must be even number");
        }

        // yAxis || zAxis = 4 floodFill could not be applied
        if (this.yAxis <= 4 || this.zAxis <= 2) {
            throw new Error("dimension is too small");
        }
        return this;
    };

    p.toString = function () {
        return "[SideYDimension]";
    };

    obelisk.SideYDimension = SideYDimension;
}(obelisk));
