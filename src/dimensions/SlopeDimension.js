/*global obelisk:true*/

/*
 * SlopeDimension
 */

(function (obelisk) {
    "use strict";

    var SlopeDimension, p;
    SlopeDimension = function (xAxis, yAxis) {
        this.initialize(xAxis, yAxis);
    };
    p = SlopeDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (xAxis, yAxis) {
        this.xAxis = xAxis || 30;
        this.yAxis = yAxis || 30;

        if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
            throw new Error("xAxis and yAxis must be even number");
        }

        if (this.xAxis <= 4 || this.yAxis <= 4) {
            throw new Error("dimension is too small");
        }

        return this;
    };

    p.toString = function () {
        return "[SlopeDimension]";
    };

    obelisk.SlopeDimension = SlopeDimension;
}(obelisk));
