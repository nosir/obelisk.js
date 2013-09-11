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
    obelisk.version = '0.2.0';

    /**
     * @property author
     * @type String
     * @static
     **/
    obelisk.author = 'max huang';

    window.obelisk = obelisk;
})(window);

/*
 * AbstractColor
 */

(function (obelisk) {
    "use strict";

    var AbstractColor = function () {
        this.initialize();
    };
    var p = AbstractColor.prototype;

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

/*
 * CubeColor
 */

(function (obelisk) {
    "use strict";

    var CubeColor = function (_border, _borderHighlight, _left, _right, __horizontal) {
        this.initialize(_border, _borderHighlight, _left, _right, __horizontal);
    };
    var p = CubeColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (_border, _borderHighlight, _left, _right, _horizontal) {
        this.border = obelisk.ColorGeom.get32(_border || 0x878787);
        this.borderHighlight = obelisk.ColorGeom.get32(_borderHighlight || 0xFFFFFF);
        this.left = obelisk.ColorGeom.get32(_left || 0xC9CFD0);
        this.right = obelisk.ColorGeom.get32(_right || 0xE3E3E3);
        this.horizontal = obelisk.ColorGeom.get32(_horizontal || 0xEEEFF0);
        return this;
    };

    // public methods
    p.getByHorizontalColor = function (_horizontal) {
        return new CubeColor
        (
            obelisk.ColorGeom.applyBrightness(_horizontal, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(_horizontal, 0, true),
            obelisk.ColorGeom.applyBrightness(_horizontal, this.BRIGHTNESS_GAIN * 2),
            obelisk.ColorGeom.applyBrightness(_horizontal, this.BRIGHTNESS_GAIN),
            _horizontal
        );
    };

    p.toString = function () {
        return "[CubeColor]";
    };

    // private methods

    obelisk.CubeColor = CubeColor;
}(obelisk));

/*
 * PyramidColor
 */

(function (obelisk) {
    "use strict";

    var PyramidColor = function (_border, _borderHighlight, _left, _right) {
        this.initialize(_border, _borderHighlight, _left, _right);
    };
    var p = PyramidColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (_border, _borderHighlight, _left, _right, _horizontal) {
        this.border = obelisk.ColorGeom.get32(_border || 0x949698);
        this.borderHighlight = obelisk.ColorGeom.get32(_borderHighlight || 0xFFFFFF);
        this.left = obelisk.ColorGeom.get32(_left || 0xE6E8E9);
        this.right = obelisk.ColorGeom.get32(_right || 0xEEEFF0);
        return this;
    };

    // public methods
    p.getByRightColor = function (_right) {
        return new PyramidColor
        (
            obelisk.ColorGeom.applyBrightness(_right, this.BRIGHTNESS_GAIN * 4),
            //apply hightlight
            obelisk.ColorGeom.applyBrightness(_right, 0, true),
            obelisk.ColorGeom.applyBrightness(_right, this.BRIGHTNESS_GAIN),
            _right
        );
    };

    p.toString = function () {
        return "[PyramidColor]";
    };

    // private methods

    obelisk.PyramidColor = PyramidColor;
}(obelisk));

/*
 * SideColor
 */

(function (obelisk) {
    "use strict";

    var SideColor = function (_border, _inner) {
        this.initialize(_border, _inner);
    };
    var p = SideColor.prototype = new obelisk.AbstractColor();

    // public properties
    p.BRIGHTNESS_GAIN = -20;

    // constructor
    p.initialize = function (_border, _inner) {
        this.border = obelisk.ColorGeom.get32(_border || 0x878787);
        this.inner = obelisk.ColorGeom.get32(_inner || 0xEEEEEE);
        return this;
    };

    // public methods
    p.getByInnerColor = function (_inner) {
        return new obelisk.SideColor(
            obelisk.ColorGeom.applyBrightness(_inner, this.BRIGHTNESS_GAIN * 4),
            _inner
        );
    };

    p.toString = function () {
        return "[SideColor]";
    };

    // private methods

    obelisk.SideColor = SideColor;
}(obelisk));

/*
 * AbstractDimension
 */

(function (obelisk) {
    "use strict";

    var AbstractDimension = function () {
        this.initialize();
    };
    var p = AbstractDimension.prototype;

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

/*
 * BrickDimension
 */

(function (obelisk) {
    "use strict";

    var BrickDimension = function (_xAxis, _yAxis) {
        this.initialize(_xAxis, _yAxis);
    };
    var p = BrickDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_xAxis, _yAxis) {
        this.xAxis = _xAxis || 30;
        this.yAxis = _yAxis || 30;

        if (this.xAxis % 2 == 1 || this.yAxis % 2 == 1) {
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

/*
 * CubeDimension
 */

(function (obelisk) {
    "use strict";

    var CubeDimension = function (_xAxis, _yAxis, _zAxis) {
        this.initialize(_xAxis, _yAxis, _zAxis);
    };
    var p = CubeDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_xAxis, _yAxis, _zAxis) {
        this.xAxis = _xAxis || 30;
        this.yAxis = _yAxis || 30;
        this.zAxis = _zAxis || 30;

        if (this.xAxis % 2 == 1 || this.yAxis % 2 == 1) {
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

/*
 * PyramidDimension
 */

(function (obelisk) {
    "use strict";

    var PyramidDimension = function (_axis, _tall) {
        this.initialize(_axis, _tall);
    };
    var p = PyramidDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_axis, _tall) {
        this.xAxis = _axis || 30;
        this.yAxis = _axis || 30;
        this.tall = _tall || false;

        if (this.xAxis % 2 == 1) {
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

/*
 * SideXDimension
 */

(function (obelisk) {
    "use strict";

    var SideXDimension = function (_xAxis, _zAxis) {
        this.initialize(_xAxis, _zAxis);
    };
    var p = SideXDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_xAxis, _zAxis) {
        this.xAxis = _xAxis || 30;
        this.zAxis = _zAxis || 30;

        if (this.xAxis % 2 == 1) {
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

/*
 * SideYDimension
 */

(function (obelisk) {
    "use strict";

    var SideYDimension = function (_yAxis, _zAxis) {
        this.initialize(_yAxis, _zAxis);
    };
    var p = SideYDimension.prototype = new obelisk.AbstractDimension();

    // constructor
    p.initialize = function (_yAxis, _zAxis) {
        this.yAxis = _yAxis || 30;
        this.zAxis = _zAxis || 30;

        if (this.yAxis % 2 == 1) {
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
            col, row, matchFlag,
            w = this.imageData.width,
            h = this.imageData.height;

        // bound reach
        if (x < 0 || y < 0 || x >= w || y >= h) {
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
                    stack.push((row * w + col) * 4);
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
            for (row = y; row < h; row++) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * w + col) * 4);
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
        for (col = x; col < w; col++) {

            // top side
            for (row = y; row >= 0; row--) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * w + col) * 4);
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
            for (row = y; row < h; row++) {
                if (this.checkPixelAvailable(col, row)) {
                    // available pixel
                    stack.push((row * w + col) * 4);
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

/*
 * PixelObject
 */

(function (obelisk) {
    "use strict";

    var PixelObject = function (primitive, point3D) {
        this.initialize(primitive, point3D);
    };
    var p = PixelObject.prototype;

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

/*
 * PixelView
 */

(function (obelisk) {
    "use strict";

    var PixelView = function (canvas, point) {
        this.initialize(canvas, point);
    };
    var p = PixelView.prototype;

    // public properties
    p.context = null
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

        this.context = canvas.getContext('2d');
        this.point = point || new obelisk.Point(0, 0);

        return this;
    };

    // public methods
    p.renderObject = function (primitive, point3D) {
        var po = new obelisk.PixelObject(primitive, point3D);
        this.context.drawImage(po.canvas,
            this.point.x + po.x,
            this.point.y + po.y
        );
    };

    p.toString = function () {
        return "[PixelView]";
    };

    obelisk.PixelView = PixelView;
}(obelisk));

/*
 * Matrix
 */

(function (obelisk) {
    "use strict";

    var Matrix = function(a, b, c, d, tx, ty) {
        this.initialize(a, b, c, d, tx, ty);
    };
    var p = Matrix.prototype;

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
    p.initialize = function(a, b, c, d, tx, ty) {
        this.a = (a == null) ? 1 : a;
        this.b = b || 0;
        this.c = c || 0;
        this.d = (d == null) ? 1 : d;
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

/*
 * Point
 */

(function (obelisk) {
    "use strict";

    var Point = function (x, y) {
        this.initialize(x, y);
    };
    var p = Point.prototype;

    // public properties
    p.x = 0;
    p.y = 0;

    // constructor
    p.initialize = function (x, y) {
        this.x = (x == null ? 0 : x);
        this.y = (y == null ? 0 : y);
        return this;
    };

    // public methods
    p.toString = function () {
        return "[Point x : " + this.x + ", y : " + this.y + "]";
    };

    // private methods

    obelisk.Point = Point;
}(obelisk));

/*
 * Point3D
 */

(function (obelisk) {
    "use strict";

    var Point3D = function (x, y, z) {
        this.initialize(x, y, z);
    };
    var p = Point3D.prototype;

    // public properties
    p.x = 0;
    p.y = 0;
    p.z = 0;

    // constructor
    p.initialize = function (x, y, z) {
        this.x = (x == null ? 0 : x);
        this.y = (y == null ? 0 : y);
        this.z = (z == null ? 0 : z);
        return this;
    };

    // public methods
    p.toString = function () {
        return "[Point3D x : " + this.x + ", y : " + this.y + ", z: " + this.z + "]";
    };

    // private methods

    obelisk.Point3D = Point3D;
}(obelisk));

/*
 * AbstractPrimitive
 */

(function (obelisk) {
    "use strict";

    var AbstractPrimitive = function () {
        this.initialize();
    };
    var p = AbstractPrimitive.prototype;

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

/*
 * Brick
 */

(function (obelisk) {
    "use strict";

    var Brick = function (_dimension, _color, _border, _useDefaultCanvas) {
        this.initialize(_dimension, _color, _border, _useDefaultCanvas);
    };
    var p = Brick.prototype = new obelisk.AbstractPrimitive();

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
        this.dimension = _dimension == null ? new obelisk.BrickDimension() : _dimension;
        this.color = _color == null ? new obelisk.SideColor() : _color;

        if (!this.border) {
            this.color.border = this.color.inner;
        }
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
        var xOffsetInner = this.dimension.yAxis - 2;
        var yOffsetInner = 0;
        var xOffsetOut = this.dimension.xAxis - 1;
        var yOffsetOut = this.h - 1;

        //x axis
        for (var i = 0; i < this.dimension.xAxis; i++) {
            this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner + Math.floor(i / 2), this.color.border);
            this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut - Math.floor(i / 2), this.color.border);
        }

        //y axis
        for (var j = 0; j < this.dimension.yAxis; j++) {
            this.bitmapData.setPixel(xOffsetInner + 1 - j, yOffsetInner + Math.floor(j / 2), this.color.border);
            this.bitmapData.setPixel(xOffsetOut - 1 + j, yOffsetOut - Math.floor(j / 2), this.color.border);
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

/*
 * SideX
 */

(function (obelisk) {
    "use strict";

    var SideX = function (_dimension, _color, _border, _useDefaultCanvas) {
        this.initialize(_dimension, _color, _border, _useDefaultCanvas);
    };
    var p = SideX.prototype = new obelisk.AbstractPrimitive();

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
        this.dimension = _dimension == null ? new obelisk.SideXDimension() : _dimension;
        this.color = _color == null ? new obelisk.SideColor() : _color;

        if (!this.border) {
            this.color.border = this.color.inner;
        }
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
        var xOffsetInner = 0;
        var yOffsetInner = this.dimension.zAxis;
        var xOffsetOut = this.dimension.xAxis - 1;
        var yOffsetOut = this.h - this.dimension.zAxis - 1;

        //x axis
        for (var i = 0; i < this.dimension.xAxis; i++) {
            this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner + Math.floor(i / 2), this.color.border);
            this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut - Math.floor(i / 2), this.color.border);
        }

        //z axis
        for (var j = 0; j < this.dimension.zAxis; j++) {
            this.bitmapData.setPixel(xOffsetInner, yOffsetInner - j, this.color.border);
            this.bitmapData.setPixel(xOffsetOut, yOffsetOut + j, this.color.border);
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

/*
 * SideY
 */

(function (obelisk) {
    "use strict";

    var SideY = function (_dimension, _color, _border, _useDefaultCanvas) {
        this.initialize(_dimension, _color, _border, _useDefaultCanvas);
    };
    var p = SideY.prototype = new obelisk.AbstractPrimitive();

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
        this.dimension = _dimension == null ? new obelisk.SideYDimension() : _dimension;
        this.color = _color == null ? new obelisk.SideColor() : _color;

        if (!this.border) {
            this.color.border = this.color.inner;
        }
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
        var xOffsetInner = 0;
        var yOffsetInner = this.h - this.dimension.zAxis - 1
        var xOffsetOut = this.dimension.yAxis - 1;
        var yOffsetOut = this.dimension.zAxis;

        //y axis
        for (var i = 0; i < this.dimension.yAxis; i++) {
            this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner - Math.floor(i / 2), this.color.border);
            this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut + Math.floor(i / 2), this.color.border);
        }

        //z axis
        for (var j = 0; j < this.dimension.zAxis; j++) {
            this.bitmapData.setPixel(xOffsetInner, yOffsetInner + j, this.color.border);
            this.bitmapData.setPixel(xOffsetOut, yOffsetOut - j, this.color.border);
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

/*
 * CanvasManager
 */

(function (obelisk, document) {
    "use strict";

    var CanvasManager = function () {
        throw new Error('ColorGeom is a static Class, cannot be instanced.');
    };
    var p = CanvasManager;

    // public properties
    p.defaultCanvas = null;

    // public methods
    p.getDefaultCanvas = function () {
        p.defaultCanvas = p.defaultCanvas || document.createElement('canvas');
        return p.defaultCanvas;
    }

    p.getNewCanvas = function () {
        return document.createElement('canvas');
    }

    p.toString = function () {
        return "[CanvasManager]";
    };

    obelisk.CanvasManager = CanvasManager;
}(obelisk, document));

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

/*
 * ColorPattern
 */

(function (obelisk) {
    "use strict";

    var ColorPattren = function() {
        throw new Error('ColorGeom is a static Class, cannot be instanced.');
    };
    var p = ColorPattren;

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

    // constructor

    // public methods
    p.getRandomComfortableColor = function () {
        return p.FINE_COLORS[Math.floor(Math.random() * p.FINE_COLORS.length)];
    };

    p.toString = function () {
        return "[ColorPattern]";
    };

    // private methods

    obelisk.ColorPattern = ColorPattren;
}(obelisk));
