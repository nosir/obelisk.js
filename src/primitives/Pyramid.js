/*
 * Pyramid
 */

(function (obelisk) {
    "use strict";

    var Pyramid = function (_dimension, _color, _border, _useDefaultCanvas) {
        this.initialize(_dimension, _color, _border, _useDefaultCanvas);
    };
    var p = Pyramid.prototype = new obelisk.AbstractPrimitive();

    // private properties
    p.hSize = null;
    p.hOffset = null;

    // constructor
    p.initialize = function (_dimension, _color, _border, _useDefaultCanvas) {
        this.initRender(_dimension, _color, _border, _useDefaultCanvas);
        this.initRectangle();
        this.initBitmapData();
        this.build();
        this.renderBitmapDataForCanvas();
        return this;
    };

    // private method
    p.initRender = function (_dimension, _color, _border, _useDefaultCanvas) {
        this.useDefaultCanvas = _useDefaultCanvas || false;
        this.border = _border || _border == null;
        this.dimension = _dimension == null ? new obelisk.PyramidDimension() : _dimension;
        this.color = _color == null ? new obelisk.PyramidColor() : _color;

        if (!this.border) {
            this.color.border = this.color.inner;
        }

        this.hSize = this.dimension.tall ? this.dimension.xAxis * 2 : this.dimension.xAxis;
        this.hOffset = this.dimension.tall ? -3 : -2;
    };

    p.initRectangle = function () {
        this.w = this.dimension.xAxis + this.dimension.yAxis;
        this.h = this.hSize + this.dimension.xAxis / 2;

        // 22.6 degrees implementation
        this.w -= 2;
        this.h += this.hOffset;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = -this.dimension.xAxis + 2;
        this.matrix.ty = -this.hSize / 2 + 2 - (this.dimension.tall ? this.dimension.xAxis / 2 : 1);
    };

    p.initBitmapData = function () {
        this.bitmapData = new obelisk.BitmapData(this.w, this.h, this.useDefaultCanvas);
    };
    p.renderBitmapDataForCanvas = function () {
        this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
        this.canvas = this.bitmapData.canvas;
    };

    p.build = function () {
        var color_border_left = this.border ? this.color.border : this.color.left;
        var color_border_right = this.border ? this.color.border : this.color.right;

        var color_border_highlight = this.border ? this.color.borderHighlight : color_border_left;

        //z axis || hightlight
        for (var k = 0; k < this.hSize + this.dimension.xAxis / 2 - 4; k++) {
            this.bitmapData.setPixel(this.dimension.xAxis - 2, k + 3 + this.hOffset, color_border_highlight);
        }

        //x axis
        for (var i = 0; i < this.dimension.xAxis; i++) {
            this.bitmapData.setPixel(i, this.hSize + Math.floor(i / 2) + this.hOffset, color_border_left);
        }
        //y axis
        for (var j = 0; j < this.dimension.xAxis; j++) {
            this.bitmapData.setPixel(j + this.dimension.xAxis - 2, this.hSize + this.dimension.xAxis / 2 - Math.floor(j / 2) - 1 + this.hOffset, color_border_right);
        }

        if (!this.dimension.tall) {
            //left edge			
            for (var l1 = 0; l1 < this.hSize; l1++) {
                this.bitmapData.setPixel(l1, this.hSize - l1 + this.hOffset, color_border_left);
            }
            //right edge
            for (var m1 = 0; m1 < this.hSize; m1++) {
                this.bitmapData.setPixel(m1 + this.hSize - 2, m1 + 1 + this.hOffset, color_border_right);
            }
        }
        else {
            //left edge			
            for (var l2 = 0; l2 < this.hSize - 2; l2++) {
                this.bitmapData.setPixel(Math.floor(l2 / 2), this.hSize - l2 + this.hOffset, color_border_left);
            }
            //right edge
            for (var m2 = 2; m2 < this.hSize; m2++) {
                this.bitmapData.setPixel(Math.floor(m2 / 2) + this.dimension.xAxis - 2, m2 + 1 + this.hOffset, color_border_right);
            }
        }

        if (!this.border) {
            this.bitmapData.setPixel(this.dimension.xAxis - 2, this.hSize + this.dimension.xAxis / 2 - 1 + this.hOffset, color_border_left);
        }

        //floodfill
        this.bitmapData.floodFill(this.dimension.xAxis - 1, this.hSize + Math.floor((this.dimension.xAxis - 1) / 2) + this.hOffset - 1, this.color.right);
        this.bitmapData.floodFill(this.dimension.xAxis - 3, this.hSize + Math.floor((this.dimension.xAxis - 1) / 2) + this.hOffset - 2, this.color.left);
    };

    // public methods
    p.toString = function () {
        return "[Pyramid]";
    };

    obelisk.Pyramid = Pyramid;
}(obelisk));
