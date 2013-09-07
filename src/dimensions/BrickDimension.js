/*
 * BrickDimension
 */

(function (obelisk) {
    "use strict";

    var BrickDimension = function (_xAxis, _yAxis) {
        this.initialize(_xAxis, _yAxis);
    };
    var p = BrickDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_xAxis, _yAxis) {
        this.xAxis = _xAxis || 30;
        this.yAxis = _yAxis || 30;

        if (this.xAxis % 2 == 1 || this.yAxis % 2 == 1) {
            throw new Error("x,yAxis must be even number");
        }

        // xAxis || yAxis = 4 floodFill could not be applied
        if (this.xAxis <= 4 || this.yAxis <= 4) {
            throw new Error("dimension is too small");
        }
        return this;
    };

    p.toString = function () {
        return "[BrickDimension]";
    };

    obelisk.BrickDimension = BrickDimension;
}(obelisk));
