/*global obelisk:true*/

/*
 * AbstractColor
 */

(function (obelisk) {
    "use strict";

    var AbstractColor, p;

    AbstractColor = function () {
        this.initialize();
    };
    p = AbstractColor.prototype;

    // public properties
    /**
     * The inner colors for elements of certain primitive
     */
    p.inner = null;

    /**
     * The border colors for elements of certain primitive
     */
    p.border = null;

    /**
     * The borderHighlight colors for elements of certain primitive
     */
    p.borderHighlight = null;

    /**
     * The left side colors for elements of certain primitive
     */
    p.left = null;

    /**
     * The right side colors for elements of certain primitive
     */
    p.right = null;

    /**
     * The horizontal colors for elements of certain primitive
     */
    p.horizontal = null;

    /**
     * The left slot side colors for elements of certain primitive
     */
    p.leftSlope = null;

    /**
     * The right slot side colors for elements of certain primitive
     */
    p.rightSlope = null;

    // constructor
    p.initialize = function () {
        return this;
    };

    // public methods
    p.toString = function () {
        return "[AbstractColor]";
    };

    // private methods

    obelisk.AbstractColor = AbstractColor;
}(obelisk));
