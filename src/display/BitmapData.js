/*
 * BitmapData
 */

(function (obelisk) {
    "use strict";

    var BitmapData = function (w, h, useDefaultCanvas) {
        this.initialize(w, h, useDefaultCanvas);
    };
    var p = BitmapData.prototype;

    // public property
    p.imageData = null;
    p.canvas = null;
    p.context = null;

    // constructor
    p.initialize = function (w, h, useDefaultCanvas) {
        if (!w > 0 || !h > 0) {
            throw new Error("BitmapData width or height is missing");
        }

        if (useDefaultCanvas) {
            this.canvas = obelisk.CanvasManager.getDefaultCanvas();
        } else {
            this.canvas = obelisk.CanvasManager.getNewCanvas();
        }
        this.canvas.setAttribute('width', w);
        this.canvas.setAttribute('height', h);

        this.context = this.canvas.getContext('2d');
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.imageData = this.context.createImageData(w, h);

        return this;
    };

    p.setPixel = function (posX, posY, color) {
        var index = (posY * this.imageData.width + posX) * 4;
        this.setPixelByIndex(index, color);
    };

    p.setPixelByIndex = function (index, color) {
        var pixels = this.imageData.data;
        pixels[index + 0] = (color >>> 16) & 0xFF;
        pixels[index + 1] = (color >>> 8) & 0xFF;
        pixels[index + 2] = (color >>> 0) & 0xFF;
        pixels[index + 3] = (color >>> 24) & 0xFF;
    };

    p.checkPixelAvailable = function (x, y) {
        var index = (y * this.imageData.width + x) * 4;
        return this.imageData.data[index + 3] === 0;
    };

    p.floodFill = function (posX, posY, color) {
        if (((color >>> 24) & 0xFF) === 0x00) {
            // transparent flood fill
            return;
        }

        var x = posX, y = posY,
            stack = [],
            nowCol = [],
            prevCol = [],
            imgData = this.imageData,
            col, row, matchFlag;

        // bound reach
        if (x < 0 || y < 0 || x >= imgData.width || y >= imgData.height) {
            return;
        }

        // first point check fail
        if (!this.checkPixelAvailable(x, y)) {
            throw new Error("Start point for flood fill is already filled");
            return;
        }

        // left side flood fill
        for (col = x; col >= 0; col--) {

            // top side
            for (row = y; row >= 0; row--) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * imgData.width + col) * 4);
                    nowCol.push(row);
                } else {
                    // unavailable pixel
                    if (row == y && this.checkPixelAvailable(col + 1, row - 1)) {
                        // let's continue to check more data in this column
                    } else {
                        break;
                    }
                }
            }

            // top side
            for (row = y; row < imgData.height; row++) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * imgData.width + col) * 4);
                    nowCol.push(row);
                } else {
                    // unavailable pixel
                    if (row == y && this.checkPixelAvailable(col + 1, row + 1)) {
                        // let's continue to check more data in this column
                    } else {
                        break;
                    }
                }
            }

            // compare with previous column
            // for first column
            // the given point should be inside the container
            if (col == x) {
                prevCol = nowCol.concat();
            }
            matchFlag = false;

            for (var i in prevCol) {
                for (var j in nowCol) {
                    if (nowCol[j] == prevCol[i]) {
                        matchFlag = true;
                        y = prevCol[i];
                        break;
                    }
                }
                if (matchFlag) {
                    break;
                }
            }
            if (matchFlag) {
                prevCol = nowCol.concat();
                nowCol = [];
            }
            else {
                // bound reach
                break;
            }
        }

        // reset start point
        x = posX;
        y = posY;
        prevCol = [];
        nowCol = [];

        // right side flood fill
        for (col = x; col < imgData.width; col++) {

            // top side
            for (row = y; row >= 0; row--) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * imgData.width + col) * 4);
                    nowCol.push(row);
                } else {
                    // unavailable pixel
                    if (row == y && this.checkPixelAvailable(col - 1, row - 1)) {
                        // let's continue to check more data in this column
                    } else {
                        break;
                    }
                }
            }

            // top side
            for (row = y; row < imgData.height; row++) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * imgData.width + col) * 4);
                    nowCol.push(row);
                } else {
                    // unavailable pixel
                    if (row == y && this.checkPixelAvailable(col - 1, row + 1)) {
                        // let's continue to check more data in this column
                    } else {
                        break;
                    }
                }
            }

            // compare with previous column
            // for first column
            // the given point should be inside the container
            if (col == x) {
                prevCol = nowCol.concat();
            }
            matchFlag = false;

            for (var i in prevCol) {
                for (var j in nowCol) {
                    if (nowCol[j] == prevCol[i]) {
                        matchFlag = true;
                        y = prevCol[i];
                        break;
                    }
                }
                if (matchFlag) {
                    break;
                }
            }
            if (matchFlag) {
                prevCol = nowCol.concat();
                nowCol = [];
            }
            else {
                // bound reach
                break;
            }
        }

        // fill image data
        for (var i in stack) {
            this.setPixelByIndex(stack[i], color);
        }
    }
    ;

    p.toString = function () {
        return "[BitmapData]";
    };

    obelisk.BitmapData = BitmapData;
}(obelisk)
    )
;
