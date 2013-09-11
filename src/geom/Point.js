/*global obelisk:true*/

/*
 * Point
 */

(function (obelisk) {
    "use strict";

    var Point, p;
    Point = function (x, y) {
        this.initialize(x, y);
    };
    p = Point.prototype;

    // public properties
    p.x = 0;
    p.y = 0;

    // constructor
    p.initialize = function (x, y) {
        this.x = (x === undefined ? 0 : x);
        this.y = (y === undefined ? 0 : y);
        return this;
    };

    // public methods
    p.toString = function () {
        return "[Point x : " + this.x + ", y : " + this.y + "]";
    };

    // private methods

    obelisk.Point = Point;
}(obelisk));
