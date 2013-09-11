/*global obelisk:true, document:true*/

/*
 * CanvasManager
 */

(function (obelisk, document) {
    "use strict";

    var CanvasManager, p;
    CanvasManager = function () {
        throw new Error('ColorGeom is a static Class, cannot be instanced.');
    };
    p = CanvasManager;

    // public properties
    p.defaultCanvas = null;

    // public methods
    p.getDefaultCanvas = function () {
        p.defaultCanvas = p.defaultCanvas || document.createElement('canvas');
        return p.defaultCanvas;
    };

    p.getNewCanvas = function () {
        return document.createElement('canvas');
    };

    p.toString = function () {
        return "[CanvasManager]";
    };

    obelisk.CanvasManager = CanvasManager;
}(obelisk, document));
