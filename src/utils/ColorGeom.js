/*global obelisk:true*/

/*
 * ColorGeom
 */

(function (obelisk) {
    "use strict";

    var ColorGeom, p;

    ColorGeom = function () {
        throw new Error('ColorGeom is a static Class, cannot be instanced.');
    };
    p = ColorGeom;

    // public methods
    p.get32 = function (color) {
        return color < 0xFF000000 ? (color + 0xFF000000) : color;
    };

    p.applyBrightness = function (color, brightness, highlight) {
        var a, r, g, b, y, v, u;
        a = ((color >>> 24) & 0x000000FF);
        r = ((color >>> 16) & 0x000000FF);
        g = ((color >>> 8) & 0x000000FF);
        b = (color & 0x000000FF);

        y = ((r * 313524) >> 20) + ((g * 615514) >> 20) + ((b * 119538) >> 20);
        u = -((155189 * r) >> 20) - ((303038 * g) >> 20) + ((458227 * b) >> 20);
        v = ((644874 * r) >> 20) - ((540016 * g) >> 20) - ((104857 * b) >> 20);

        if (!highlight) {
            y += brightness;
        } else {
            y = 60 + Math.pow(y, 1.2);
        }

        r = y + ((1195376 * v) >> 20);
        g = y - ((408944 * u) >> 20) - ((608174 * v) >> 20);
        b = y + ((2128609 * u) >> 20);

        r = Math.max(0, Math.min(r, 255));
        g = Math.max(0, Math.min(g, 255));
        b = Math.max(0, Math.min(b, 255));

        return (a << 24) | (r << 16) | (g << 8) | b;
    };

    p.toString = function () {
        return "[ColorGeom]";
    };

    obelisk.ColorGeom = ColorGeom;
}(obelisk));
