/*global obelisk:true*/

/*
 * AbstractPrimitive
 */

(function (obelisk) {
    "use strict";

    var AbstractPrimitive, p;
    AbstractPrimitive = function () {
        this.initialize();
    };
    p = AbstractPrimitive.prototype;

    // public properties
    /**
     * the canvas for drawImage to any canvas
     */
    p.canvas = null;

    // protect properties
    /**
     * the width of the bitmap in 2d flash coordinate
     */
    p.w = null;

    /**
     * the height of the bitmap in 2d flash coordinate
     */
    p.h = null;

    /**
     * the dimension of primitive in 3d pixel coordinate
     */
    p.dimension = null;

    /**
     * the color obj of the primitive
     */
    p.color = null;

    /**
     * the border option of the primitive
     */
    p.border = null;

    /**
     * the source bitmapdata contains pixel graphic
     */
    p.bitmapData = null;

    /**
     * the preserve canvas option
     */
    p.useDefaultCanvas = null;

    /**
     * the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
     */
    p.matrix = null;

    // constructor
    p.initialize = function () {
        return this;
    };

    // public methods
    p.toString = function () {
        return "[AbstractPrimitive]";
    };

    // private methods

    obelisk.AbstractPrimitive = AbstractPrimitive;
}(obelisk));
