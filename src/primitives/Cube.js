/*
 * Cube
 */

(function (obelisk) {
    "use strict";

    var Cube = function (_dimension, _color, _border, _useDefaultCanvas) {
        this.initialize(_dimension, _color, _border, _useDefaultCanvas);
    };
    var p = Cube.prototype = new obelisk.AbstractPrimitive();

    // public properties

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
        this.dimension = _dimension == null ? new obelisk.CubeDimension() : _dimension;
        this.color = _color == null ? new obelisk.CubeColor() : _color;

        if (!this.border) {
            this.color.border = this.color.inner;
        }
    };

    p.initRectangle = function () {
        this.w = this.dimension.xAxis + this.dimension.yAxis;
        this.h = this.dimension.zAxis + (this.dimension.xAxis + this.dimension.yAxis) / 2;

        // 22.6 degrees implementation
        this.w -= 2;
        this.h -= 1;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = -this.dimension.yAxis + 2;
        this.matrix.ty = -this.dimension.zAxis;
    };

    p.initBitmapData = function () {
        this.bitmapData = new obelisk.BitmapData(this.w, this.h, this.useDefaultCanvas);
    };
    p.renderBitmapDataForCanvas = function () {
        this.canvas = this.bitmapData.canvas;
    };

    p.build = function () {
        // horizontal layer
        var brick = new obelisk.Brick
            (
                new obelisk.BrickDimension(this.dimension.xAxis, this.dimension.yAxis),
                new obelisk.SideColor(this.color.border, this.color.horizontal),
                this.border
            );

        // left side
        var sideX = new obelisk.SideX
            (
                new obelisk.SideXDimension(this.dimension.xAxis, this.dimension.zAxis),
                new obelisk.SideColor(this.color.border, this.color.left),
                this.border
            );

        // right side
        var sideY = new obelisk.SideY
            (
                new obelisk.SideYDimension(this.dimension.yAxis, this.dimension.zAxis),
                new obelisk.SideColor(this.color.border, this.color.right),
                this.border
            );

        var po_brick = new obelisk.PixelObject(brick);
        var po_x = new obelisk.PixelObject(sideX);
        var po_y = new obelisk.PixelObject(sideY);

        var ctx = this.bitmapData.context;
        ctx.drawImage(po_brick.canvas, po_brick.x + this.dimension.yAxis - 2, po_brick.y);
        ctx.drawImage(po_x.canvas, po_x.x, po_x.y + this.dimension.zAxis + this.dimension.yAxis / 2 - 1);
        ctx.drawImage(po_y.canvas, po_y.x + this.w - 2, po_x.y + this.dimension.zAxis + this.dimension.xAxis / 2 - 1);

        // highlight & highlight fix
        var bmd = new obelisk.BitmapData(this.w, this.h);
        if (this.border) {
            var offsetX = this.dimension.xAxis - 2;
            var offsetY = (this.dimension.xAxis + this.dimension.yAxis) / 2 - 2;

            //the 2px in bounding without hightlight
            for (var i = 0; i < this.dimension.xAxis - 2; i++) {
                bmd.setPixel(offsetX + 1 - i, offsetY - Math.floor(i / 2), this.color.borderHighlight);
            }

            //the 2px in bounding without hightlight
            for (var j = 0; j < this.dimension.yAxis - 2; j++) {
                bmd.setPixel(offsetX + j, offsetY - Math.floor(j / 2), this.color.borderHighlight);
            }

            for (var k = 0; k < this.dimension.zAxis; k++) {
                bmd.setPixel(offsetX, offsetY + k, this.color.borderHighlight);
            }
        } else {
            for (var i = 0; i < this.dimension.zAxis; i++) {
                bmd.setPixel(this.dimension.xAxis - 2, (this.dimension.xAxis + this.dimension.yAxis) / 2 - 1 + i, this.color.left);
            }
        }
        bmd.context.putImageData(bmd.imageData, 0, 0);
        ctx.drawImage(bmd.canvas, 0, 0);
    };

    // public methods
    p.toString = function () {
        return "[Cube]";
    };

    obelisk.Cube = Cube;
}(obelisk));
