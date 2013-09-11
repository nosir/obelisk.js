/*
 * PyramidDimension
 */

(function (obelisk) {
    "use strict";

    var PyramidDimension = function (_axis, _tall) {
        this.initialize(_axis, _tall);
    };
    var p = PyramidDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_axis, _tall) {
        this.xAxis = _axis || 30;
        this.yAxis = _axis || 30;
        this.tall = _tall || false;

        if (this.xAxis % 2 == 1) {
            throw new Error("axis must be even number");
        }

        if (this.xAxis <= 4) {
            throw new Error("dimension is too small");
        }
        return this;
    };

    p.toString = function () {
        return "[PyramidDimension]";
    };

    obelisk.PyramidDimension = PyramidDimension;
}(obelisk));
