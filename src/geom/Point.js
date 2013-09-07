/*
 * Point
 */

(function (obelisk) {
    "use strict";

    var Point = function (x, y) {
        this.initialize(x, y);
    };
    var p = Point.prototype;

    // public properties
    p.x = 0;
    p.y = 0;

    // constructor
    p.initialize = function (x, y) {
        this.x = (x == null ? 0 : x);
        this.y = (y == null ? 0 : y);
        return this;
    };

    // public methods
    p.toString = function () {
        return "[Point x : " + this.x + ", y : " + this.y + "]";
    };

    // private methods

    obelisk.Point = Point;
}(obelisk));
