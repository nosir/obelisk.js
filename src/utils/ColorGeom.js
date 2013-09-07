/*
 * ColorGeom
 */

(function (obelisk) {
    "use strict";

    var ColorGeom = function () {
        throw new Error('ColorGeom is a static Class, cannot be instanced.');
    };
    var p = ColorGeom;

    // public properties

    // constructor

    // public methods
    p.get32 = function (_color) {
        return _color < 0xFF000000 ? (_color + 0xFF000000) : _color;
    };

    p.applyBrightness = function (color, brightness, highlight) {
        var a = ((color >>> 24) & 0x000000FF);
        var r = ((color >>> 16) & 0x000000FF);
        var g = ((color >>> 8) & 0x000000FF);
        var b = ((color) & 0x000000FF);

        var y;
        var v;
        var u;

        y = ((r * 313524) >> 20) + ((g * 615514) >> 20) + ((b * 119538) >> 20);
        u = -((155189 * r) >> 20) - ((303038 * g) >> 20) + ((458227 * b) >> 20);
        v = ((644874 * r) >> 20) - ((540016 * g) >> 20) - ((104857 * b) >> 20);

        if (!highlight) {
            y += brightness;
        }
        else {
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

    // private methods

    obelisk.ColorGeom = ColorGeom;
}(obelisk));
