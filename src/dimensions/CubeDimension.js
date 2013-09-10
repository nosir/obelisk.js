/*
 * CubeDimension
 */

(function (obelisk) {
    "use strict";

    var CubeDimension = function (_xAxis, _yAxis, _zAxis) {
        this.initialize(_xAxis, _yAxis, _zAxis);
    };
    var p = CubeDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_xAxis, _yAxis, _zAxis) {
        this.xAxis = _xAxis || 30;
        this.yAxis = _yAxis || 30;
        this.zAxis = _zAxis || 30;

        if (this.xAxis % 2 == 1 || this.yAxis % 2 == 1) {
            throw new Error("x,yAxis must be even number");
        }

        // xAxis || yAxis = 4 floodFill could not be applied
        if (this.xAxis <= 4 || this.yAxis <= 4 || this.zAxis <= 2) {
            throw new Error("dimension is too small");
        }
        return this;
    };

    p.toString = function () {
        return "[CubeDimension]";
    };

    obelisk.CubeDimension = CubeDimension;
}(obelisk));
