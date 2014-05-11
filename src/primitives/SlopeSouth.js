/*global obelisk:true*/

/*
 * Slope South
 */

(function (obelisk) {
    "use strict";

    var SlopeSouth, p;
    SlopeSouth = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = SlopeSouth.prototype = new obelisk.AbstractPrimitive();

    // constructor
    p.initialize = function (dimension, color, border, useDefaultCanvas) {
        this.initRender(dimension, color, border, useDefaultCanvas);
        this.initRectangle();
        this.initBitmapData();
        this.build();
        this.renderBitmapDataForCanvas();
        return this;
    };

    // private method
    p.initRender = function (dimension, color, border, useDefaultCanvas) {
        this.useDefaultCanvas = useDefaultCanvas || false;
        this.border = border || border === undefined;
        this.dimension = dimension === undefined ? new obelisk.SlopeDimension() : dimension;
        this.color = color === undefined ? new obelisk.SlopeColor() : color;
    };

    p.initRectangle = function () {

        this.w = this.dimension.xAxis + this.dimension.yAxis;
        this.h = this.dimension.xAxis / 2 + this.dimension.yAxis * 2;

        // 22.6 degrees implementation
        this.w -= 2;
        this.h -= 3;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = -(this.dimension.yAxis - 2);
        this.matrix.ty = -(this.dimension.yAxis * 3 / 2 - 2);
    };

    p.initBitmapData = function () {
        this.bitmapData = new obelisk.BitmapData(this.w, this.h, this.useDefaultCanvas);
    };
    p.renderBitmapDataForCanvas = function () {
        this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
        this.canvas = this.bitmapData.canvas;
    };

    p.build = function () {
        var colorBorderLeft, colorBorderRight,
            i, j, k, m, n;

        colorBorderLeft = this.border ? this.color.border : this.color.leftSlope;
        colorBorderRight = this.border ? this.color.border : this.color.right;

        // x axis
        for (j = 0; j < this.dimension.xAxis; j += 1) {
            this.bitmapData.setPixel(j, this.dimension.yAxis * 2 + Math.floor(j / 2) - 3, colorBorderLeft);
            this.bitmapData.setPixel(j + this.dimension.yAxis - 2, Math.floor(j / 2), colorBorderLeft);
        }

        // y axis
        for (i = 0; i < this.dimension.yAxis; i += 1) {
            this.bitmapData.setPixel(this.dimension.xAxis - 2 + i, this.h - Math.floor(i / 2) - 1, colorBorderRight);
        }

        // z axis
        for (k = this.dimension.xAxis / 2 - 1; k < this.h - this.dimension.yAxis / 2; k += 1) {
            this.bitmapData.setPixel(this.w - 1, k, colorBorderRight);
        }

        // slot
        for (m = 0; m < this.dimension.yAxis * 2 - 2; m += 1) {
            this.bitmapData.setPixel(Math.floor(m / 2), this.dimension.yAxis * 2 - m - 3, colorBorderLeft);
            this.bitmapData.setPixel(this.dimension.xAxis - 2 + Math.floor(m / 2), this.h - m - 1, colorBorderLeft);
        }

        // flood fill
        this.bitmapData.floodFill(this.dimension.yAxis - 1, 1, this.color.leftSlope);
        this.bitmapData.floodFill(this.dimension.xAxis, this.h - 3, this.color.right);
        // hack single pixel
        this.bitmapData.setPixel(this.dimension.xAxis - 1, this.h - 2, this.color.right);

        // highlight
        if (this.border) {
            for (n = 1; n < this.dimension.yAxis * 2 - 3; n += 1) {
                this.bitmapData.setPixel(this.dimension.xAxis - 2 + Math.floor(n / 2), this.h - n - 1, this.color.borderHighlight);
            }
        }
    };

    // public methods
    p.toString = function () {
        return "[SlopeSouth]";
    };

    obelisk.SlopeSouth = SlopeSouth;
}(obelisk));
