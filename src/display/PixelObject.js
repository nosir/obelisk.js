/*jslint node: true*/

'use strict';

var Point3D = require('../geom/Point3D');

var PixelObject, p;
PixelObject = function (primitive, point3D) {
    this.initialize(primitive, point3D);
};
p = PixelObject.prototype;

// public properties
p.x = null;
p.y = null;
p.canvas = null;

// constructor
p.initialize = function (primitive, point3D) {
    if (!primitive) {
        throw new Error('Primitive is not defined');
    }

    var p3D = point3D || new Point3D();

    this.canvas = primitive.canvas;
    this.x = primitive.matrix.tx + p3D.x - p3D.y;
    this.y = primitive.matrix.ty + Math.floor(p3D.x / 2 + p3D.y / 2) - p3D.z;

    return this;
};

// public methods

p.toString = function () {
    return '[PixelObject]';
};

// private methods

module.exports = PixelObject;
