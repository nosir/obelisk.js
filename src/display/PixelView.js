/*jslint node: true*/
/*global jQuery:true*/

'use strict';

var Point = require('../geom/Point');
var PixelObject = require('../display/PixelObject');

var PixelView, p;
PixelView = function (canvas, point) {
    this.initialize(canvas, point);
};
p = PixelView.prototype;

// public properties
p.canvas = null;
p.context = null;
p.point = null;

// constructor
p.initialize = function (canvas, point) {
    if (!canvas) {
        throw new Error('Canvas is not defined');
    }

    try {
        if (canvas instanceof jQuery) {
            canvas = canvas.get(0);
        }
    } catch (ignore) {
    }

    this.canvas = canvas;

    this.context = this.canvas.getContext('2d');
    this.context.mozImageSmoothingEnabled = false;
    this.context.msImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;

    this.point = point || new Point(0, 0);

    return this;
};

// public methods
p.renderObject = function (primitive, point3D) {
    var po = new PixelObject(primitive, point3D);
    this.context.drawImage(po.canvas, this.point.x + po.x, this.point.y + po.y);
};

p.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

p.toString = function () {
    return '[PixelView]';
};

module.exports = PixelView;
