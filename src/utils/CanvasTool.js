/*global obelisk:true*/

/*
 * CanvasTool
 */

(function (obelisk) {
    "use strict";

    var CanvasTool, p;

    CanvasTool = function () {
        throw new Error('CanvasTool is a static Class, cannot be instanced.');
    };
    p = CanvasTool;

    // public methods
    p.getPixel = function (imageData, x, y) {
        var data, index, r, g, b;
        data = imageData.data;
        index = (y * imageData.width + x) * 4;
        r = data[index];
        g = data[index + 1];
        b = data[index + 2];

        return ((r << 16) | (g << 8) | b);
    };

    p.toString = function () {
        return "[CanvasTool]";
    };

    obelisk.CanvasTool = CanvasTool;
}(obelisk));
