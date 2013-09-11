/*global obelisk:true*/

/*
 * Point3D
 */

(function (obelisk) {
    "use strict";

    var Point3D, p;
    Point3D = function (x, y, z) {
        this.initialize(x, y, z);
    };
    p = Point3D.prototype;

    // public properties
    p.x = 0;
    p.y = 0;
    p.z = 0;

    // constructor
    p.initialize = function (x, y, z) {
        this.x = (x === undefined ? 0 : x);
        this.y = (y === undefined ? 0 : y);
        this.z = (z === undefined ? 0 : z);
        return this;
    };

    // public methods
    p.toString = function () {
        return "[Point3D x : " + this.x + ", y : " + this.y + ", z: " + this.z + "]";
    };

    // private methods

    obelisk.Point3D = Point3D;
}(obelisk));
