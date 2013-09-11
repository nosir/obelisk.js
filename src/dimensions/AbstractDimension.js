/*global obelisk:true*/

/*
 * AbstractDimension
 */

(function (obelisk) {
    "use strict";

    var AbstractDimension, p;
    AbstractDimension = function () {
        this.initialize();
    };
    p = AbstractDimension.prototype;

    // public properties
    /**
     * The x Axis dimensions in 22.6 degrees coordinate
     */
    p.xAxis = null;

    /**
     * The y Axis dimensions in 22.6 degrees coordinate
     */
    p.yAxis = null;

    /**
     * The z Axis dimensions in 22.6 degrees coordinate
     */
    p.zAxis = null;

    /**
     * Pyramid tall mode
     */
    p.tall = false;

    // constructor
    p.initialize = function () {
        return this;
    };

    // public methods
    p.toString = function () {
        return "[AbstractDimension]";
    };

    // private methods

    obelisk.AbstractDimension = AbstractDimension;
}(obelisk));
