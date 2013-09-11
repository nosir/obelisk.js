/*global obelisk:true*/

/*
 * Matrix
 */

(function (obelisk) {
    "use strict";

    var Matrix, p;
    Matrix = function (a, b, c, d, tx, ty) {
        this.initialize(a, b, c, d, tx, ty);
    };
    p = Matrix.prototype;

    // public properties:
    /**
     * Position (0, 0) in a 3x3 matrix.
     * @property a
     * @type Number
     **/
    p.a = 1;

    /**
     * Position (0, 1) in a 3x3 matrix.
     * @property b
     * @type Number
     **/
    p.b = 0;

    /**
     * Position (1, 0) in a 3x3 matrix.
     * @property c
     * @type Number
     **/
    p.c = 0;

    /**
     * Position (1, 1) in a 3x3 matrix.
     * @property d
     * @type Number
     **/
    p.d = 1;

    /**
     * Position (2, 0) in a 3x3 matrix.
     * @property tx
     * @type Number
     **/
    p.tx = 0;

    /**
     * Position (2, 1) in a 3x3 matrix.
     * @property ty
     * @type Number
     **/
    p.ty = 0;

    // constructor
    p.initialize = function (a, b, c, d, tx, ty) {
        this.a = (a === undefined) ? 1 : a;
        this.b = b || 0;
        this.c = c || 0;
        this.d = (d === undefined) ? 1 : d;
        this.tx = tx || 0;
        this.ty = ty || 0;
        return this;
    };

    // public methods
    p.toString = function () {
        return "[Matrix]";
    };

    obelisk.Matrix = Matrix;
}(obelisk));
