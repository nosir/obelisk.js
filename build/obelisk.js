/*global window:true*/

/*
 * obelisk
 */

(function (window) {
    "use strict";

    /**
     * Static class holding library specific information
     * the library.
     * @class obelisk
     **/
    var obelisk = {};

    /**
     * @property version
     * @type String
     * @static
     **/
    obelisk.version = '1.1.0';

    /**
     * @property author
     * @type String
     * @static
     **/
    obelisk.author = 'max huang';

    window.obelisk = obelisk;
}(window));

/*global obelisk:true*/

/*
 * AbstractColor
 */

(function (obelisk) {
    "use strict";

    var AbstractColor, p;

    AbstractColor = function () {
        this.initialize();
    };
    p = AbstractColor.prototype;

    // public properties
    /**
     * The inner colors for elements of certain primitive
     */
    p.inner = null;

    /**
     * The border colors for elements of certain primitive
     */
    p.border = null;

    /**
     * The borderHighlight colors for elements of certain primitive
     */
    p.borderHighlight = null;

    /**
     * The left side colors for elements of certain primitive
     */
    p.left = null;

    /**
     * The right side colors for elements of certain primitive
     */
    p.right = null;

    /**
     * The horizontal colors for elements of certain primitive
     */
    p.horizontal = null;

    /**
     * The left slot side colors for elements of certain primitive
     */
    p.leftSlope = null;

    /**
     * The right slot side colors for elements of certain primitive
     */
    p.rightSlope = null;

    // constructor
    p.initialize = function () {
        return this;
    };

    // public methods
    p.toString = function () {
        return "[AbstractColor]";
    };

    // private methods

    obelisk.AbstractColor = AbstractColor;
}(obelisk));

/*global obelisk:true*/

/*
 * CubeColor
 */

(function (obelisk) {
    "use strict";

    var CubeColor, p;
    CubeColor = function (border, borderHighlight, left, right, horizontal) {
        this.initialize(border, borderHighlight, left, right, horizontal);
    };
    p = CubeColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (border, borderHighlight, left, right, horizontal) {
        this.border = obelisk.ColorGeom.get32(border === undefined ? 0x878787 : border);
        this.borderHighlight = obelisk.ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
        this.left = obelisk.ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
        this.right = obelisk.ColorGeom.get32(right === undefined ? 0xE3E3E3 : right);
        this.horizontal = obelisk.ColorGeom.get32(horizontal === undefined ? 0xEEEFF0 : horizontal);
        return this;
    };

    // public methods
    p.getByHorizontalColor = function (horizontal) {
        return new CubeColor(
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(horizontal, 0, true),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
            horizontal
        );
    };

    p.toString = function () {
        return "[CubeColor]";
    };

    // private methods

    obelisk.CubeColor = CubeColor;
}(obelisk));

/*global obelisk:true*/

/*
 * PyramidColor
 */

(function (obelisk) {
    "use strict";

    var PyramidColor, p;
    PyramidColor = function (border, borderHighlight, left, right) {
        this.initialize(border, borderHighlight, left, right);
    };
    p = PyramidColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (border, borderHighlight, left, right) {
        this.border = obelisk.ColorGeom.get32(border === undefined ? 0x949698 : border);
        this.borderHighlight = obelisk.ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
        this.left = obelisk.ColorGeom.get32(left === undefined ? 0xE6E8E9 : left);
        this.right = obelisk.ColorGeom.get32(right === undefined ? 0xEEEFF0 : right);
        return this;
    };

    // public methods
    p.getByRightColor = function (right) {
        return new PyramidColor(
            obelisk.ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(right, 0, true),
            obelisk.ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN),
            right
        );
    };

    p.toString = function () {
        return "[PyramidColor]";
    };

    // private methods

    obelisk.PyramidColor = PyramidColor;
}(obelisk));

/*global obelisk:true*/

/*
 * SideColor
 */

(function (obelisk) {
    "use strict";

    var SideColor, p;
    SideColor = function (border, inner) {
        this.initialize(border, inner);
    };
    p = SideColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (border, inner) {
        this.border = obelisk.ColorGeom.get32(border === undefined ? 0x878787 : border);
        this.inner = obelisk.ColorGeom.get32(inner === undefined ? 0xEEEEEE : inner);
        return this;
    };

    // public methods
    p.getByInnerColor = function (inner) {
        return new obelisk.SideColor(
            obelisk.ColorGeom.applyBrightness(inner, this.BRIGHTNESS_GAIN * 4),
            inner
        );
    };

    p.toString = function () {
        return "[SideColor]";
    };

    // private methods

    obelisk.SideColor = SideColor;
}(obelisk));

/*global obelisk:true*/

/*
 * SlopeColor
 */

(function (obelisk) {
    "use strict";

    var SlopeColor, p;
    SlopeColor = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
        this.initialize(border, borderHighlight, left, right, leftSlope, rightSlope);
    };
    p = SlopeColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
        this.border = obelisk.ColorGeom.get32(border === undefined ? 0x949698 : border);
        this.borderHighlight = obelisk.ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
        this.left = obelisk.ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
        this.right = obelisk.ColorGeom.get32(right === undefined ? 0xE6E8E9 : right);
        this.leftSlope = obelisk.ColorGeom.get32(leftSlope === undefined ? 0xDBDBDB : leftSlope);
        this.rightSlope = obelisk.ColorGeom.get32(rightSlope === undefined ? 0xDBDBDB : rightSlope);
        return this;
    };

    // public methods

    /*
     * horizontal side doesn't actually exist in the Slope primitive
     * you can assign the same horizontal color as cube
     * so that you will be able to arrange the slope with cube
     */
    p.getByHorizontalColor = function (horizontal) {
        return new obelisk.SlopeColor(
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(horizontal, 0, true),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 1.5),
            obelisk.ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 0.5)
        );
    };

    p.toString = function () {
        return "[SlopeColor]";
    };

    // private methods

    obelisk.SlopeColor = SlopeColor;
}(obelisk));

/*global obelisk:true*/

/*
 * AbstractDimension
 */

(function (obelisk) {
    "use strict";

    var AbstractDimension, p;
    AbstractDimension = function () {
        this.initialize();
    };
    p = AbstractDimension.prototype;

    // public properties
    /**
     * The x Axis dimensions in 22.6 degrees coordinate
     */
    p.xAxis = null;

    /**
     * The y Axis dimensions in 22.6 degrees coordinate
     */
    p.yAxis = null;

    /**
     * The z Axis dimensions in 22.6 degrees coordinate
     */
    p.zAxis = null;

    /**
     * Pyramid tall mode
     */
    p.tall = false;

    // constructor
    p.initialize = function () {
        return this;
    };

    // public methods
    p.toString = function () {
        return "[AbstractDimension]";
    };

    // private methods

    obelisk.AbstractDimension = AbstractDimension;
}(obelisk));

/*global obelisk:true*/

/*
 * BrickDimension
 */

(function (obelisk) {
    "use strict";

    var BrickDimension, p;
    BrickDimension = function (xAxis, yAxis) {
        this.initialize(xAxis, yAxis);
    };
    p = BrickDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (xAxis, yAxis) {
        this.xAxis = xAxis || 30;
        this.yAxis = yAxis || 30;

        if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
            throw new Error("x,yAxis must be even number");
        }

        // xAxis || yAxis = 4 floodFill could not be applied
        if (this.xAxis <= 4 || this.yAxis <= 4) {
            throw new Error("dimension is too small");
        }

        return this;
    };

    p.toString = function () {
        return "[BrickDimension]";
    };

    obelisk.BrickDimension = BrickDimension;
}(obelisk));

/*global obelisk:true*/

/*
 * CubeDimension
 */

(function (obelisk) {
    "use strict";

    var CubeDimension, p;
    CubeDimension = function (xAxis, yAxis, zAxis) {
        this.initialize(xAxis, yAxis, zAxis);
    };
    p = CubeDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (xAxis, yAxis, zAxis) {
        this.xAxis = xAxis || 30;
        this.yAxis = yAxis || 30;
        this.zAxis = zAxis || 30;

        if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
            throw new Error("x,yAxis must be even number");
        }

        // xAxis || yAxis = 4 floodFill could not be applied
        if (this.xAxis <= 4 || this.yAxis <= 4 || this.zAxis <= 2) {
            throw new Error("dimension is too small");
        }

        return this;
    };

    p.toString = function () {
        return "[CubeDimension]";
    };

    obelisk.CubeDimension = CubeDimension;
}(obelisk));

/*global obelisk:true*/

/*
 * PyramidDimension
 */

(function (obelisk) {
    "use strict";

    var PyramidDimension, p;
    PyramidDimension = function (axis, tall) {
        this.initialize(axis, tall);
    };
    p = PyramidDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (axis, tall) {
        this.xAxis = axis || 30;
        this.yAxis = axis || 30;
        this.tall = tall || false;

        if (this.xAxis % 2 === 1) {
            throw new Error("axis must be even number");
        }

        if (this.xAxis <= 4) {
            throw new Error("dimension is too small");
        }

        return this;
    };

    p.toString = function () {
        return "[PyramidDimension]";
    };

    obelisk.PyramidDimension = PyramidDimension;
}(obelisk));

/*global obelisk:true*/

/*
 * SideXDimension
 */

(function (obelisk) {
    "use strict";

    var SideXDimension, p;
    SideXDimension = function (xAxis, zAxis) {
        this.initialize(xAxis, zAxis);
    };
    p = SideXDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (xAxis, zAxis) {
        this.xAxis = xAxis || 30;
        this.zAxis = zAxis || 30;

        if (this.xAxis % 2 === 1) {
            throw new Error("xAxis must be even number");
        }

        // xAxis || zAxis = 4 floodFill could not be applied
        if (this.xAxis <= 4 || this.zAxis <= 2) {
            throw new Error("dimension is too small");
        }

        return this;
    };

    p.toString = function () {
        return "[SideXDimension]";
    };

    obelisk.SideXDimension = SideXDimension;
}(obelisk));

/*global obelisk:true*/

/*
 * SideYDimension
 */

(function (obelisk) {
    "use strict";

    var SideYDimension, p;

    SideYDimension = function (yAxis, zAxis) {
        this.initialize(yAxis, zAxis);
    };
    p = SideYDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (yAxis, zAxis) {
        this.yAxis = yAxis || 30;
        this.zAxis = zAxis || 30;

        if (this.yAxis % 2 === 1) {
            throw new Error("yAxis must be even number");
        }

        // yAxis || zAxis = 4 floodFill could not be applied
        if (this.yAxis <= 4 || this.zAxis <= 2) {
            throw new Error("dimension is too small");
        }

        return this;
    };

    p.toString = function () {
        return "[SideYDimension]";
    };

    obelisk.SideYDimension = SideYDimension;
}(obelisk));

/*global obelisk:true*/

/*
 * SlopeDimension
 */

(function (obelisk) {
    "use strict";

    var SlopeDimension, p;
    SlopeDimension = function (xAxis, yAxis) {
        this.initialize(xAxis, yAxis);
    };
    p = SlopeDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (xAxis, yAxis) {
        this.xAxis = xAxis || 30;
        this.yAxis = yAxis || 30;

        if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
            throw new Error("xAxis and yAxis must be even number");
        }

        if (this.xAxis <= 4 || this.yAxis <= 4) {
            throw new Error("dimension is too small");
        }

        return this;
    };

    p.toString = function () {
        return "[SlopeDimension]";
    };

    obelisk.SlopeDimension = SlopeDimension;
}(obelisk));

/*global obelisk:true*/

/*
 * BitmapData
 */

(function (obelisk) {
    "use strict";

    var BitmapData, p;
    BitmapData = function (w, h, useDefaultCanvas) {
        this.initialize(w, h, useDefaultCanvas);
    };
    p = BitmapData.prototype;

    // public property
    p.imageData = null;
    p.canvas = null;
    p.context = null;

    // constructor
    p.initialize = function (w, h, useDefaultCanvas) {
        if (w === undefined || h === undefined) {
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
        pixels[index] = (color >>> 16) & 0xFF;
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
            col, row, matchFlag, newStart,
            w = this.imageData.width,
            h = this.imageData.height,
            i, j;

        // bound reach
        if (x < 0 || y < 0 || x >= w || y >= h) {
            return;
        }

        // first point check fail
        if (!this.checkPixelAvailable(x, y)) {
            throw new Error("Start point for flood fill is already filled");
        }

        // left side flood fill
        for (col = x; col >= 0; col -= 1) {
            // top side
            for (row = y; row >= 0; row -= 1) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * w + col) * 4);
                    nowCol.push(row);
                } else {
                    // first one is invalid pixel && not at col top
                    if (row === y && this.checkPixelAvailable(col + 1, row - 1)) {

                        // next one is valid
                        if (this.checkPixelAvailable(col, row - 1)) {
                            newStart = row - 1;
                        } else {
                            if (this.checkPixelAvailable(col + 1, row - 2)) {
                                newStart = row - 2;
                            } else {
                                // fail, assign max value to avoid loop below
                                newStart = -1;
                            }
                        }

                        for (row = newStart; row >= 0; row -= 1) {
                            if (this.checkPixelAvailable(col, row)) {
                                // available pixel
                                stack.push((row * w + col) * 4);
                                nowCol.push(row);
                            } else {
                                break;
                            }
                        }
                    }

                    break;
                }
            }


            // bottom side
            for (row = y; row < h; row += 1) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * w + col) * 4);
                    nowCol.push(row);
                } else {
                    // first one is invalid pixel && not at col bottom
                    if (row === y && this.checkPixelAvailable(col + 1, row + 1)) {

                        // next one is valid
                        if (this.checkPixelAvailable(col, row + 1)) {
                            newStart = row + 1;
                        } else {
                            if (this.checkPixelAvailable(col + 1, row + 2)) {
                                newStart = row + 2;
                            } else {
                                // fail, assign max value to avoid loop below
                                newStart = h;
                            }
                        }

                        for (row = newStart; row < h; row += 1) {
                            if (this.checkPixelAvailable(col, row)) {
                                // available pixel
                                stack.push((row * w + col) * 4);
                                nowCol.push(row);
                            } else {
                                break;
                            }
                        }
                    }

                    break;
                }
            }

            // compare with previous column
            // for first column
            // the given point should be inside the container
            if (col === x) {
                prevCol = nowCol.concat();
            }

            matchFlag = false;

            for (i = 0; i < prevCol.length; i += 1) {
                for (j = 0; j < prevCol.length; j += 1) {
                    if (nowCol[j] === prevCol[i]) {
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
            } else {
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
        for (col = x; col < w; col += 1) {

            // top side
            for (row = y; row >= 0; row -= 1) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * w + col) * 4);
                    nowCol.push(row);
                } else {
                    // first one is invalid pixel && not at col top
                    if (row === y && this.checkPixelAvailable(col - 1, row - 1)) {

                        // next one is valid
                        if (this.checkPixelAvailable(col, row - 1)) {
                            newStart = row - 1;
                        } else {
                            if (this.checkPixelAvailable(col - 1, row - 2)) {
                                newStart = row - 2;
                            } else {
                                // fail, assign max value to avoid loop below
                                newStart = -1;
                            }
                        }

                        for (row = newStart; row >= 0; row -= 1) {
                            if (this.checkPixelAvailable(col, row)) {
                                // available pixel
                                stack.push((row * w + col) * 4);
                                nowCol.push(row);
                            } else {
                                break;
                            }
                        }
                    }

                    break;
                }
            }

            // bottom side
            for (row = y; row < h; row += 1) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * w + col) * 4);
                    nowCol.push(row);
                } else {
                    // first one is invalid pixel && not at col bottom
                    if (row === y && this.checkPixelAvailable(col - 1, row + 1)) {

                        // next one is valid
                        if (this.checkPixelAvailable(col, row + 1)) {
                            newStart = row + 1;
                        } else {
                            if (this.checkPixelAvailable(col - 1, row + 2)) {
                                newStart = row + 2;
                            } else {
                                // fail, assign max value to avoid loop below
                                newStart = h;
                            }
                        }

                        for (row = newStart; row < h; row += 1) {
                            if (this.checkPixelAvailable(col, row)) {
                                // available pixel
                                stack.push((row * w + col) * 4);
                                nowCol.push(row);
                            } else {
                                break;
                            }
                        }
                    }

                    break;
                }
            }

            // compare with previous column
            // for first column
            // the given point should be inside the container
            if (col === x) {
                prevCol = nowCol.concat();
            }

            matchFlag = false;

            for (i = 0; i < prevCol.length; i += 1) {
                for (j = 0; j < prevCol.length; j += 1) {
                    if (nowCol[j] === prevCol[i]) {
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
            } else {
                // bound reach
                break;
            }
        }

        // fill image data
        for (i = 0; i < stack.length; i += 1) {
            this.setPixelByIndex(stack[i], color);
        }
    };

    p.toString = function () {
        return "[BitmapData]";
    };

    obelisk.BitmapData = BitmapData;
}(obelisk));

/*global obelisk:true*/

/*
 * PixelObject
 */

(function (obelisk) {
    "use strict";

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
            throw new Error("Primitive is not defined");
        }

        var p3D = point3D || new obelisk.Point3D();

        this.canvas = primitive.canvas;
        this.x = primitive.matrix.tx + p3D.x - p3D.y;
        this.y = primitive.matrix.ty + Math.floor(p3D.x / 2 + p3D.y / 2) - p3D.z;

        return this;
    };

    // public methods

    // todo: add canvas remove method

    p.toString = function () {
        return "[PixelObject]";
    };

    // private methods

    obelisk.PixelObject = PixelObject;
}(obelisk));

/*global obelisk:true, jQuery:true*/

/*
 * PixelView
 */

(function (obelisk) {
    "use strict";

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
            throw new Error("Canvas is not defined");
        }

        try {
            if (canvas instanceof jQuery) {
                canvas = canvas.get(0);
            }
        } catch (e) {
        }

        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.point = point || new obelisk.Point(0, 0);

        return this;
    };

    // public methods
    p.renderObject = function (primitive, point3D) {
        var po = new obelisk.PixelObject(primitive, point3D);
        this.context.drawImage(po.canvas, this.point.x + po.x, this.point.y + po.y);
    };

    p.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    p.toString = function () {
        return "[PixelView]";
    };

    obelisk.PixelView = PixelView;
}(obelisk));

/*global obelisk:true*/

/*
 * Matrix
 */

(function (obelisk) {
    "use strict";

    var Matrix, p;
    Matrix = function (a, b, c, d, tx, ty) {
        this.initialize(a, b, c, d, tx, ty);
    };
    p = Matrix.prototype;

    // public properties:
    /**
     * Position (0, 0) in a 3x3 matrix.
     * @property a
     * @type Number
     **/
    p.a = 1;

    /**
     * Position (0, 1) in a 3x3 matrix.
     * @property b
     * @type Number
     **/
    p.b = 0;

    /**
     * Position (1, 0) in a 3x3 matrix.
     * @property c
     * @type Number
     **/
    p.c = 0;

    /**
     * Position (1, 1) in a 3x3 matrix.
     * @property d
     * @type Number
     **/
    p.d = 1;

    /**
     * Position (2, 0) in a 3x3 matrix.
     * @property tx
     * @type Number
     **/
    p.tx = 0;

    /**
     * Position (2, 1) in a 3x3 matrix.
     * @property ty
     * @type Number
     **/
    p.ty = 0;

    // constructor
    p.initialize = function (a, b, c, d, tx, ty) {
        this.a = (a === undefined) ? 1 : a;
        this.b = b || 0;
        this.c = c || 0;
        this.d = (d === undefined) ? 1 : d;
        this.tx = tx || 0;
        this.ty = ty || 0;
        return this;
    };

    // public methods
    p.toString = function () {
        return "[Matrix]";
    };

    obelisk.Matrix = Matrix;
}(obelisk));

/*global obelisk:true*/

/*
 * Point
 */

(function (obelisk) {
    "use strict";

    var Point, p;
    Point = function (x, y) {
        this.initialize(x, y);
    };
    p = Point.prototype;

    // public properties
    p.x = 0;
    p.y = 0;

    // constructor
    p.initialize = function (x, y) {
        this.x = (x === undefined ? 0 : x);
        this.y = (y === undefined ? 0 : y);
        return this;
    };

    // public methods
    p.toString = function () {
        return "[Point x : " + this.x + ", y : " + this.y + "]";
    };

    // private methods

    obelisk.Point = Point;
}(obelisk));

/*global obelisk:true*/

/*
 * Point3D
 */

(function (obelisk) {
    "use strict";

    var Point3D, p;
    Point3D = function (x, y, z) {
        this.initialize(x, y, z);
    };
    p = Point3D.prototype;

    // public properties
    p.x = 0;
    p.y = 0;
    p.z = 0;

    // constructor
    p.initialize = function (x, y, z) {
        this.x = (x === undefined ? 0 : x);
        this.y = (y === undefined ? 0 : y);
        this.z = (z === undefined ? 0 : z);
        return this;
    };

    // public methods
    p.toGlobalCoordinates = function (offset) {
        var p2D = new obelisk.Point(
            this.x - this.y,
            Math.floor(this.x / 2 + this.y / 2) - this.z
        );

        if (offset !== undefined) {
            p2D.x = p2D.x + offset.x;
            p2D.y = p2D.y + offset.y;
        }

        return p2D;
    };

    p.toString = function () {
        return "[Point3D x : " + this.x + ", y : " + this.y + ", z: " + this.z + "]";
    };

    // private methods

    obelisk.Point3D = Point3D;
}(obelisk));

/*global obelisk:true*/

/*
 * AbstractPrimitive
 */

(function (obelisk) {
    "use strict";

    var AbstractPrimitive, p;
    AbstractPrimitive = function () {
        this.initialize();
    };
    p = AbstractPrimitive.prototype;

    // public properties
    /**
     * the canvas for drawImage to any canvas
     */
    p.canvas = null;

    // protect properties
    /**
     * the width of the bitmap in 2d flash coordinate
     */
    p.w = null;

    /**
     * the height of the bitmap in 2d flash coordinate
     */
    p.h = null;

    /**
     * the dimension of primitive in 3d pixel coordinate
     */
    p.dimension = null;

    /**
     * the color obj of the primitive
     */
    p.color = null;

    /**
     * the border option of the primitive
     */
    p.border = null;

    /**
     * the source bitmapdata contains pixel graphic
     */
    p.bitmapData = null;

    /**
     * the preserve canvas option
     */
    p.useDefaultCanvas = null;

    /**
     * the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
     */
    p.matrix = null;

    // constructor
    p.initialize = function () {
        return this;
    };

    // public methods
    p.toString = function () {
        return "[AbstractPrimitive]";
    };

    // private methods

    obelisk.AbstractPrimitive = AbstractPrimitive;
}(obelisk));

/*global obelisk:true*/

/*
 * Brick
 */

(function (obelisk) {
    "use strict";

    var Brick, p;
    Brick = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = Brick.prototype = new obelisk.AbstractPrimitive();

    // public properties

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
        this.dimension = dimension === undefined ? new obelisk.BrickDimension() : dimension;
        this.color = color === undefined ? new obelisk.SideColor() : color;
    };

    p.initRectangle = function () {
        this.w = this.dimension.xAxis + this.dimension.yAxis;
        this.h = (this.dimension.xAxis + this.dimension.yAxis) / 2;

        // 22.6 degrees implementation
        this.w -= 2;
        this.h -= 1;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = -this.dimension.yAxis + 2;
        this.matrix.ty = 0;
    };

    p.initBitmapData = function () {
        this.bitmapData = new obelisk.BitmapData(this.w, this.h, this.useDefaultCanvas);
    };
    p.renderBitmapDataForCanvas = function () {
        this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
        this.canvas = this.bitmapData.canvas;
    };

    p.build = function () {
        var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;
        xOffsetInner = this.dimension.yAxis - 2;
        yOffsetInner = 0;
        xOffsetOut = this.dimension.xAxis - 1;
        yOffsetOut = this.h - 1;
        borderColor = this.border ? this.color.border : this.color.inner;

        //x axis
        for (i = 0; i < this.dimension.xAxis; i += 1) {
            this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner + Math.floor(i / 2), borderColor);
            this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut - Math.floor(i / 2), borderColor);
        }

        //y axis
        for (j = 0; j < this.dimension.yAxis; j += 1) {
            this.bitmapData.setPixel(xOffsetInner + 1 - j, yOffsetInner + Math.floor(j / 2), borderColor);
            this.bitmapData.setPixel(xOffsetOut - 1 + j, yOffsetOut - Math.floor(j / 2), borderColor);
        }

        //fill an pixel graphic enclosed
        this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
    };

    // public methods
    p.toString = function () {
        return "[Brick]";
    };

    obelisk.Brick = Brick;
}(obelisk));

/*global obelisk:true*/

/*
 * Cube
 */

(function (obelisk) {
    "use strict";

    var Cube, p;
    Cube = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = Cube.prototype = new obelisk.AbstractPrimitive();

    // public properties

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
        this.dimension = dimension === undefined ? new obelisk.CubeDimension() : dimension;
        this.color = color === undefined ? new obelisk.CubeColor() : color;
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
        var brick, sideX, sideY, po_brick, po_x, po_y, ctx, bmd, offsetX, offsetY,
            i, j, k;
        // horizontal layer
        brick = new obelisk.Brick(
            new obelisk.BrickDimension(this.dimension.xAxis, this.dimension.yAxis),
            new obelisk.SideColor(this.color.border, this.color.horizontal),
            this.border
        );

        // left side
        sideX = new obelisk.SideX(
            new obelisk.SideXDimension(this.dimension.xAxis, this.dimension.zAxis),
            new obelisk.SideColor(this.color.border, this.color.left),
            this.border
        );

        // right side
        sideY = new obelisk.SideY(
            new obelisk.SideYDimension(this.dimension.yAxis, this.dimension.zAxis),
            new obelisk.SideColor(this.color.border, this.color.right),
            this.border
        );

        po_brick = new obelisk.PixelObject(brick);
        po_x = new obelisk.PixelObject(sideX);
        po_y = new obelisk.PixelObject(sideY);

        ctx = this.bitmapData.context;
        ctx.drawImage(po_brick.canvas, po_brick.x + this.dimension.yAxis - 2, po_brick.y);
        ctx.drawImage(po_x.canvas, po_x.x, po_x.y + this.dimension.zAxis + this.dimension.yAxis / 2 - 1);
        ctx.drawImage(po_y.canvas, po_y.x + this.w - 2, po_x.y + this.dimension.zAxis + this.dimension.xAxis / 2 - 1);

        // highlight & highlight fix
        bmd = new obelisk.BitmapData(this.w, this.h);

        if (this.border) {
            offsetX = this.dimension.xAxis - 2;
            offsetY = (this.dimension.xAxis + this.dimension.yAxis) / 2 - 2;

            //the 2px in bounding without hightlight
            for (i = 0; i < this.dimension.xAxis - 2; i += 1) {
                bmd.setPixel(offsetX + 1 - i, offsetY - Math.floor(i / 2), this.color.borderHighlight);
            }

            //the 2px in bounding without hightlight
            for (j = 0; j < this.dimension.yAxis - 2; j += 1) {
                bmd.setPixel(offsetX + j, offsetY - Math.floor(j / 2), this.color.borderHighlight);
            }

            for (k = 0; k < this.dimension.zAxis; k += 1) {
                bmd.setPixel(offsetX, offsetY + k, this.color.borderHighlight);
            }
        } else {
            for (i = 0; i < this.dimension.zAxis; i += 1) {
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

/*global obelisk:true*/

/*
 * Pyramid
 */

(function (obelisk) {
    "use strict";

    var Pyramid, p;
    Pyramid = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = Pyramid.prototype = new obelisk.AbstractPrimitive();

    // private properties
    p.hSize = null;
    p.hOffset = null;

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
        this.dimension = dimension === undefined ? new obelisk.PyramidDimension() : dimension;
        this.color = color === undefined ? new obelisk.PyramidColor() : color;

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
        var colorborder_left, colorborder_right, colorborder_highlight,
            i, j, k, l1, m1, l2, m2;
        colorborder_left = this.border ? this.color.border : this.color.left;
        colorborder_right = this.border ? this.color.border : this.color.right;

        colorborder_highlight = this.border ? this.color.borderHighlight : colorborder_left;

        //z axis || hightlight
        for (k = 0; k < this.hSize + this.dimension.xAxis / 2 - 4; k += 1) {
            this.bitmapData.setPixel(this.dimension.xAxis - 2, k + 3 + this.hOffset, colorborder_highlight);
        }

        //x axis
        for (i = 0; i < this.dimension.xAxis; i += 1) {
            this.bitmapData.setPixel(i, this.hSize + Math.floor(i / 2) + this.hOffset, colorborder_left);
        }

        //y axis
        for (j = 0; j < this.dimension.xAxis; j += 1) {
            this.bitmapData.setPixel(j + this.dimension.xAxis - 2, this.hSize + this.dimension.xAxis / 2 - Math.floor(j / 2) - 1 + this.hOffset, colorborder_right);
        }

        if (!this.dimension.tall) {
            //left edge
            for (l1 = 0; l1 < this.hSize; l1 += 1) {
                this.bitmapData.setPixel(l1, this.hSize - l1 + this.hOffset, colorborder_left);
            }

            //right edge
            for (m1 = 0; m1 < this.hSize; m1 += 1) {
                this.bitmapData.setPixel(m1 + this.hSize - 2, m1 + 1 + this.hOffset, colorborder_right);
            }
        } else {
            //left edge
            for (l2 = 0; l2 < this.hSize - 2; l2 += 1) {
                this.bitmapData.setPixel(Math.floor(l2 / 2), this.hSize - l2 + this.hOffset, colorborder_left);
            }

            //right edge
            for (m2 = 2; m2 < this.hSize; m2 += 1) {
                this.bitmapData.setPixel(Math.floor(m2 / 2) + this.dimension.xAxis - 2, m2 + 1 + this.hOffset, colorborder_right);
            }
        }

        if (!this.border) {
            this.bitmapData.setPixel(this.dimension.xAxis - 2, this.hSize + this.dimension.xAxis / 2 - 1 + this.hOffset, colorborder_left);
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

/*global obelisk:true*/

/*
 * SideX
 */

(function (obelisk) {
    "use strict";
    var SideX, p;
    SideX = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = SideX.prototype = new obelisk.AbstractPrimitive();

    // public properties

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
        this.dimension = dimension === undefined ? new obelisk.SideXDimension() : dimension;
        this.color = color === undefined ? new obelisk.SideColor() : color;
    };

    p.initRectangle = function () {
        this.w = this.dimension.xAxis;
        this.h = this.dimension.zAxis + this.dimension.xAxis / 2;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = 0;
        this.matrix.ty = -this.dimension.zAxis;
    };

    p.initBitmapData = function () {
        this.bitmapData = new obelisk.BitmapData(this.w, this.h, this.useDefaultCanvas);
    };
    p.renderBitmapDataForCanvas = function () {
        this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
        this.canvas = this.bitmapData.canvas;
    };

    p.build = function () {
        var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;

        xOffsetInner = 0;
        yOffsetInner = this.dimension.zAxis;
        xOffsetOut = this.dimension.xAxis - 1;
        yOffsetOut = this.h - this.dimension.zAxis - 1;
        borderColor = this.border ? this.color.border : this.color.inner;

        //x axis
        for (i = 0; i < this.dimension.xAxis; i += 1) {
            this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner + Math.floor(i / 2), borderColor);
            this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut - Math.floor(i / 2), borderColor);
        }

        //z axis
        for (j = 0; j < this.dimension.zAxis; j += 1) {
            this.bitmapData.setPixel(xOffsetInner, yOffsetInner - j, borderColor);
            this.bitmapData.setPixel(xOffsetOut, yOffsetOut + j, borderColor);
        }

        //fill an pixel graphic enclosed
        this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
    };

    // public methods
    p.toString = function () {
        return "[SideX]";
    };

    obelisk.SideX = SideX;
}(obelisk));

/*global obelisk:true*/

/*
 * SideY
 */

(function (obelisk) {
    "use strict";

    var SideY, p;
    SideY = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = SideY.prototype = new obelisk.AbstractPrimitive();

    // public properties

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
        this.dimension = dimension === undefined ? new obelisk.SideYDimension() : dimension;
        this.color = color === undefined ? new obelisk.SideColor() : color;
    };

    p.initRectangle = function () {
        this.w = this.dimension.yAxis;
        this.h = this.dimension.zAxis + this.dimension.yAxis / 2;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = -this.dimension.yAxis + 2;
        this.matrix.ty = -this.dimension.zAxis;
    };

    p.initBitmapData = function () {
        this.bitmapData = new obelisk.BitmapData(this.w, this.h, this.useDefaultCanvas);
    };
    p.renderBitmapDataForCanvas = function () {
        this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
        this.canvas = this.bitmapData.canvas;
    };

    p.build = function () {
        var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;
        xOffsetInner = 0;
        yOffsetInner = this.h - this.dimension.zAxis - 1;
        xOffsetOut = this.dimension.yAxis - 1;
        yOffsetOut = this.dimension.zAxis;
        borderColor = this.border ? this.color.border : this.color.inner;

        //y axis
        for (i = 0; i < this.dimension.yAxis; i += 1) {
            this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner - Math.floor(i / 2), borderColor);
            this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut + Math.floor(i / 2), borderColor);
        }

        //z axis
        for (j = 0; j < this.dimension.zAxis; j += 1) {
            this.bitmapData.setPixel(xOffsetInner, yOffsetInner + j, borderColor);
            this.bitmapData.setPixel(xOffsetOut, yOffsetOut - j, borderColor);
        }

        //fill an pixel graphic enclosed
        this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
    };

    // public methods
    p.toString = function () {
        return "[SideY]";
    };

    obelisk.SideY = SideY;
}(obelisk));

/*global obelisk:true*/

/*
 * Slope East
 */

(function (obelisk) {
    "use strict";

    var SlopeEast, p;
    SlopeEast = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = SlopeEast.prototype = new obelisk.AbstractPrimitive();

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
        this.h = this.dimension.xAxis * 2 + this.dimension.yAxis / 2;

        // 22.6 degrees implementation
        this.w -= 2;
        this.h -= 3;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = -(this.dimension.yAxis - 2);
        this.matrix.ty = -(this.dimension.xAxis * 3 / 2 - 2);
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

        colorBorderLeft = this.border ? this.color.border : this.color.left;
        colorBorderRight = this.border ? this.color.border : this.color.rightSlope;

        // y axis
        for (j = 0; j < this.dimension.yAxis; j += 1) {
            this.bitmapData.setPixel(j, this.dimension.yAxis / 2 - Math.floor(j / 2) - 1, colorBorderRight);
            this.bitmapData.setPixel(j + this.dimension.xAxis - 2, this.h - Math.floor(j / 2) - 1, colorBorderRight);
        }

        // x axis
        for (i = 0; i < this.dimension.xAxis; i += 1) {
            this.bitmapData.setPixel(i, this.h - this.dimension.xAxis / 2 + Math.floor(i / 2), colorBorderLeft);
        }

        // z axis
        for (k = this.dimension.yAxis / 2 - 1; k < this.h - this.dimension.xAxis / 2; k += 1) {
            this.bitmapData.setPixel(0, k, colorBorderLeft);
        }

        // slot
        for (m = 0; m < this.dimension.xAxis * 2 - 2; m += 1) {
            this.bitmapData.setPixel(this.dimension.yAxis - 1 + Math.floor(m / 2), m, colorBorderRight);
            this.bitmapData.setPixel(1 + Math.floor(m / 2), this.dimension.yAxis / 2 + m - 1, colorBorderRight);
        }

        // flood fill
        this.bitmapData.floodFill(this.dimension.yAxis - 2, 1, this.color.rightSlope);
        this.bitmapData.floodFill(this.dimension.xAxis - 3, this.h - 3, this.color.left);
        // hack single pixel
        this.bitmapData.setPixel(this.dimension.xAxis - 2, this.h - 2, this.color.left);

        // highlight
        if (this.border) {
            for (n = 1; n < this.dimension.xAxis * 2 - 3; n += 1) {
                this.bitmapData.setPixel(1 + Math.floor(n / 2), this.dimension.yAxis / 2 + n - 1, this.color.borderHighlight);
            }
        }
    };

    // public methods
    p.toString = function () {
        return "[SlopeEast]";
    };

    obelisk.SlopeEast = SlopeEast;
}(obelisk));

/*global obelisk:true*/

/*
 * Slope North
 */

(function (obelisk) {
    "use strict";

    var SlopeNorth, p;
    SlopeNorth = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = SlopeNorth.prototype = new obelisk.AbstractPrimitive();

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
        this.h = this.dimension.yAxis * 3 / 2 + this.dimension.xAxis / 2;

        // 22.6 degrees implementation
        this.w -= 2;
        this.h -= 3;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = -(this.dimension.yAxis - 2);
        this.matrix.ty = -(this.dimension.yAxis - 2);
    };

    p.initBitmapData = function () {
        this.bitmapData = new obelisk.BitmapData(this.w, this.h, this.useDefaultCanvas);
    };
    p.renderBitmapDataForCanvas = function () {
        this.canvas = this.bitmapData.canvas;
    };

    p.build = function () {
        var colorBorderLeft, colorBorderRight, colorBorderHighlight,
            sideX, poX, ctx, bmd,
            i, j, n;

        colorBorderLeft = this.border ? this.color.border : this.color.left;
        colorBorderRight = this.border ? this.color.border : this.color.right;
        colorBorderHighlight = this.border ? this.color.borderHighlight : this.color.left;

        sideX = new obelisk.SideX(
            new obelisk.SideXDimension(this.dimension.xAxis, this.h - this.dimension.xAxis / 2),
            new obelisk.SideColor(colorBorderLeft, this.color.left)
        );

        poX = new obelisk.PixelObject(sideX);

        ctx = this.bitmapData.context;
        ctx.drawImage(poX.canvas, poX.x, poX.y + this.h - this.dimension.xAxis / 2);

        bmd = new obelisk.BitmapData(this.w, this.h);

        // close the path for floodfill
        for (i = this.h - this.dimension.yAxis * 3 / 2 + 2; i < this.h; i += 1) {
            bmd.setPixel(this.dimension.xAxis - 1, i, colorBorderRight);
        }

        // y axis
        for (j = 1; j < this.dimension.yAxis; j += 1) {
            bmd.setPixel(this.dimension.xAxis + j - 2, this.h - Math.floor(j / 2) - 1, colorBorderRight);
            bmd.setPixel(this.dimension.xAxis + j - 2, this.dimension.xAxis / 2 - 2 + j, colorBorderRight);
        }

        // flood fill
        bmd.floodFill(this.dimension.xAxis + 1, this.h - 3, this.color.right);

        //highlight
        for (n = this.dimension.xAxis / 2; n < this.h - 1; n += 1) {
            bmd.setPixel(this.dimension.xAxis - 1, n, this.color.right);
            bmd.setPixel(this.dimension.xAxis - 2, n, colorBorderHighlight);
        }

        bmd.context.putImageData(bmd.imageData, 0, 0);
        ctx.drawImage(bmd.canvas, 0, 0);
    };

    // public methods
    p.toString = function () {
        return "[SlopeNorth]";
    };

    obelisk.SlopeNorth = SlopeNorth;
}(obelisk));

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

/*global obelisk:true*/

/*
 * Slope West
 */

(function (obelisk) {
    "use strict";

    var SlopeWest, p;
    SlopeWest = function (dimension, color, border, useDefaultCanvas) {
        this.initialize(dimension, color, border, useDefaultCanvas);
    };
    p = SlopeWest.prototype = new obelisk.AbstractPrimitive();

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
        this.h = this.dimension.xAxis * 3 / 2 + this.dimension.yAxis / 2;

        // 22.6 degrees implementation
        this.w -= 2;
        this.h -= 3;

        // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
        this.matrix = new obelisk.Matrix();
        this.matrix.tx = -(this.dimension.yAxis - 2);
        this.matrix.ty = -(this.dimension.xAxis - 2);
    };

    p.initBitmapData = function () {
        this.bitmapData = new obelisk.BitmapData(this.w, this.h, this.useDefaultCanvas);
    };
    p.renderBitmapDataForCanvas = function () {
        this.canvas = this.bitmapData.canvas;
    };

    p.build = function () {
        var colorBorderLeft, colorBorderRight, colorBorderHighlight,
            sideY, poY, ctx, bmd,
            i, j, n;

        colorBorderLeft = this.border ? this.color.border : this.color.left;
        colorBorderRight = this.border ? this.color.border : this.color.right;
        colorBorderHighlight = this.border ? this.color.borderHighlight : this.color.left;

        sideY = new obelisk.SideY(
            new obelisk.SideYDimension(this.dimension.yAxis, this.h - this.dimension.yAxis / 2),
            new obelisk.SideColor(colorBorderRight, this.color.right)
        );

        poY = new obelisk.PixelObject(sideY);

        ctx = this.bitmapData.context;
        ctx.drawImage(poY.canvas, poY.x + this.w - 2, poY.y + this.h - this.dimension.yAxis / 2);

        bmd = new obelisk.BitmapData(this.w, this.h);

        // close the path for floodfill
        for (i = this.h - this.dimension.xAxis * 3 / 2 + 2; i < this.h; i += 1) {
            bmd.setPixel(this.dimension.xAxis - 2, i, colorBorderLeft);
        }

        //x axis
        for (j = 0; j < this.dimension.xAxis - 1; j += 1) {
            bmd.setPixel(j, this.dimension.xAxis + this.dimension.yAxis / 2 - 3 + Math.floor(j / 2), colorBorderLeft);
            bmd.setPixel(j, this.dimension.xAxis + this.dimension.yAxis / 2 - 3 - j, colorBorderLeft);
        }

        // flood fill
        bmd.floodFill(this.dimension.xAxis - 3, this.h - 3, this.color.left);

        //highlight
        for (n = this.dimension.yAxis / 2; n < this.h - 1; n += 1) {
            bmd.setPixel(this.dimension.xAxis - 2, n, colorBorderHighlight);
        }

        bmd.context.putImageData(bmd.imageData, 0, 0);
        ctx.drawImage(bmd.canvas, 0, 0);
    };

    // public methods
    p.toString = function () {
        return "[SlopeWest]";
    };

    obelisk.SlopeWest = SlopeWest;
}(obelisk));

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

/*global obelisk:true*/

/*
 * ColorPattern
 */

(function (obelisk) {
    "use strict";

    var ColorPattren, p;

    ColorPattren = function () {
        throw new Error('ColorGeom is a static Class, cannot be instanced.');
    };
    p = ColorPattren;

    // public properties
    p.GRASS_GREEN = 0xCCFF00;
    p.YELLOW = 0xFFFF00;
    p.WINE_RED = 0xFF0099;
    p.PINK = 0xFF7CBF;
    p.PURPLE = 0xCC00FF;
    p.BLUE = 0x00CCFF;
    p.GRAY = 0xEEEEEE;
    p.BLACK = 0x666666;
    p.FINE_COLORS =
        [
            p.GRASS_GREEN,
            p.YELLOW,
            p.WINE_RED,
            p.PINK,
            p.PURPLE,
            p.BLUE,
            p.GRAY,
            p.BLACK
        ];

    // public methods
    p.getRandomComfortableColor = function () {
        return p.FINE_COLORS[Math.floor(Math.random() * p.FINE_COLORS.length)];
    };

    p.toString = function () {
        return "[ColorPattern]";
    };

    obelisk.ColorPattern = ColorPattren;
}(obelisk));
