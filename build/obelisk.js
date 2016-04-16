(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*jslint node: true*/

'use strict';

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

module.exports = AbstractColor;

},{}],2:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var CubeColor, p;
CubeColor = function (border, borderHighlight, left, right, horizontal) {
    this.initialize(border, borderHighlight, left, right, horizontal);
};
p = CubeColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right, horizontal) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xE3E3E3 : right);
    this.horizontal = ColorGeom.get32(horizontal === undefined ? 0xEEEFF0 : horizontal);
    return this;
};

// public methods
p.getByHorizontalColor = function (horizontal) {
    return new CubeColor(
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(horizontal, 0, true),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
        horizontal
    );
};

p.toString = function () {
    return "[CubeColor]";
};

module.exports = CubeColor;

},{"../utils/ColorGeom":32,"./AbstractColor":1}],3:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var PyramidColor, p;
PyramidColor = function (border, borderHighlight, left, right) {
    this.initialize(border, borderHighlight, left, right);
};
p = PyramidColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right) {
    this.border = ColorGeom.get32(border === undefined ? 0x949698 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xE6E8E9 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xEEEFF0 : right);

    return this;
};

// public methods
p.getByRightColor = function (right) {
    return new PyramidColor(
        ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(right, 0, true),
        ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN),
        right
    );
};

p.toString = function () {
    return "[PyramidColor]";
};

module.exports = PyramidColor;

},{"../utils/ColorGeom":32,"./AbstractColor":1}],4:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var SideColor, p;
SideColor = function (border, inner) {
    this.initialize(border, inner);
};
p = SideColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, inner) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);
    this.inner = ColorGeom.get32(inner === undefined ? 0xEEEEEE : inner);

    return this;
};

// public methods
p.getByInnerColor = function (inner) {
    return new SideColor(
        ColorGeom.applyBrightness(inner, this.BRIGHTNESS_GAIN * 4),
        inner
    );
};

p.toString = function () {
    return "[SideColor]";
};

module.exports = SideColor;

},{"../utils/ColorGeom":32,"./AbstractColor":1}],5:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var SlopeColor, p;
SlopeColor = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
    this.initialize(border, borderHighlight, left, right, leftSlope, rightSlope);
};
p = SlopeColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
    this.border = ColorGeom.get32(border === undefined ? 0x949698 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xE6E8E9 : right);
    this.leftSlope = ColorGeom.get32(leftSlope === undefined ? 0xDBDBDB : leftSlope);
    this.rightSlope = ColorGeom.get32(rightSlope === undefined ? 0xDBDBDB : rightSlope);

    return this;
};

// public methods

/*
 * horizontal side doesn't actually exist in the Slope primitive
 * you can assign the same horizontal color as cube
 * so that you will be able to arrange the slope with cube
 */
p.getByHorizontalColor = function (horizontal) {
    return new SlopeColor(
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(horizontal, 0, true),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 1.5),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 0.5)
    );
};

p.toString = function () {
    return "[SlopeColor]";
};

module.exports = SlopeColor;

},{"../utils/ColorGeom":32,"./AbstractColor":1}],6:[function(require,module,exports){
/*jslint node: true*/

'use strict';

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

module.exports = AbstractDimension;

},{}],7:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var BrickDimension, p;
BrickDimension = function (xAxis, yAxis) {
    this.initialize(xAxis, yAxis);
};
p = BrickDimension.prototype = new AbstractDimension();

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

module.exports = BrickDimension;

},{"./AbstractDimension":6}],8:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var CubeDimension, p;
CubeDimension = function (xAxis, yAxis, zAxis) {
    this.initialize(xAxis, yAxis, zAxis);
};
p = CubeDimension.prototype = new AbstractDimension();

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

module.exports = CubeDimension;

},{"./AbstractDimension":6}],9:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var PyramidDimension, p;
PyramidDimension = function (axis, tall) {
    this.initialize(axis, tall);
};
p = PyramidDimension.prototype = new AbstractDimension();

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

module.exports = PyramidDimension;

},{"./AbstractDimension":6}],10:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SideXDimension, p;
SideXDimension = function (xAxis, zAxis) {
    this.initialize(xAxis, zAxis);
};
p = SideXDimension.prototype = new AbstractDimension();

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

module.exports = SideXDimension;

},{"./AbstractDimension":6}],11:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SideYDimension, p;

SideYDimension = function (yAxis, zAxis) {
    this.initialize(yAxis, zAxis);
};
p = SideYDimension.prototype = new AbstractDimension();

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

module.exports = SideYDimension;

},{"./AbstractDimension":6}],12:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SlopeDimension, p;
SlopeDimension = function (xAxis, yAxis) {
    this.initialize(xAxis, yAxis);
};
p = SlopeDimension.prototype = new AbstractDimension();

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

module.exports = SlopeDimension;

},{"./AbstractDimension":6}],13:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var CanvasManager = require('../utils/CanvasManager');

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
        this.canvas = CanvasManager.getDefaultCanvas();
    } else {
        this.canvas = CanvasManager.getNewCanvas();
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

module.exports = BitmapData;

},{"../utils/CanvasManager":30}],14:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Point3D = require('../geom/Point3D');

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

    var p3D = point3D || new Point3D();

    this.canvas = primitive.canvas;
    this.x = primitive.matrix.tx + p3D.x - p3D.y;
    this.y = primitive.matrix.ty + Math.floor(p3D.x / 2 + p3D.y / 2) - p3D.z;

    return this;
};

// public methods

p.toString = function () {
    return "[PixelObject]";
};

// private methods

module.exports = PixelObject;

},{"../geom/Point3D":18}],15:[function(require,module,exports){
/*jslint node: true*/
/*global jQuery:true*/

'use strict';

var Point = require('../geom/Point');
var PixelObject = require('../display/PixelObject');

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
    } catch (ignore) {
    }

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.point = point || new Point(0, 0);

    return this;
};

// public methods
p.renderObject = function (primitive, point3D) {
    var po = new PixelObject(primitive, point3D);
    this.context.drawImage(po.canvas, this.point.x + po.x, this.point.y + po.y);
};

p.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

p.toString = function () {
    return "[PixelView]";
};

module.exports = PixelView;

},{"../display/PixelObject":14,"../geom/Point":17}],16:[function(require,module,exports){
/*jslint node: true*/

'use strict';

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

module.exports = Matrix;

},{}],17:[function(require,module,exports){
/*jslint node: true*/

'use strict';

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

module.exports = Point;

},{}],18:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Point = require('./Point');

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
    var p2D = new Point(
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

module.exports = Point3D;

},{"./Point":17}],19:[function(require,module,exports){
/*jslint node: true*/
/*global window:true*/

'use strict';

/**
 * @namespace obelisk
 **/
var obelisk = {};

obelisk.Cube = require('./primitives/Cube');
obelisk.Brick = require('./primitives/Brick');
obelisk.Pyramid = require('./primitives/Pyramid');
obelisk.SideX = require('./primitives/SideX');
obelisk.SideY = require('./primitives/SideY');
obelisk.SlopeEast = require('./primitives/SlopeEast');
obelisk.SlopeNorth = require('./primitives/SlopeNorth');
obelisk.SlopeSouth = require('./primitives/SlopeSouth');
obelisk.SlopeWest = require('./primitives/SlopeWest');

obelisk.ColorPattern = require('./utils/ColorPattern');
obelisk.ColorGeom = require('./utils/ColorGeom');
obelisk.CanvasManager = require('./utils/CanvasManager');
obelisk.CanvasTool = require('./utils/CanvasTool');

obelisk.Matrix = require('./geom/Matrix');
obelisk.Point = require('./geom/Point');
obelisk.Point3D = require('./geom/Point3D');

obelisk.PixelView = require('./display/PixelView');
obelisk.PixelObject = require('./display/PixelObject');
obelisk.BitmapData = require('./display/BitmapData');

obelisk.BrickDimension = require('./dimensions/BrickDimension');
obelisk.CubeDimension = require('./dimensions/CubeDimension');
obelisk.PyramidDimension = require('./dimensions/PyramidDimension');
obelisk.SideXDimension = require('./dimensions/SideXDimension');
obelisk.SideYDimension = require('./dimensions/SideYDimension');
obelisk.SlopeDimension = require('./dimensions/SlopeDimension');

obelisk.CubeColor = require('./colors/CubeColor');
obelisk.PyramidColor = require('./colors/PyramidColor');
obelisk.SideColor = require('./colors/SideColor');
obelisk.SlopeColor = require('./colors/SlopeColor');

window.obelisk = obelisk;

},{"./colors/CubeColor":2,"./colors/PyramidColor":3,"./colors/SideColor":4,"./colors/SlopeColor":5,"./dimensions/BrickDimension":7,"./dimensions/CubeDimension":8,"./dimensions/PyramidDimension":9,"./dimensions/SideXDimension":10,"./dimensions/SideYDimension":11,"./dimensions/SlopeDimension":12,"./display/BitmapData":13,"./display/PixelObject":14,"./display/PixelView":15,"./geom/Matrix":16,"./geom/Point":17,"./geom/Point3D":18,"./primitives/Brick":21,"./primitives/Cube":22,"./primitives/Pyramid":23,"./primitives/SideX":24,"./primitives/SideY":25,"./primitives/SlopeEast":26,"./primitives/SlopeNorth":27,"./primitives/SlopeSouth":28,"./primitives/SlopeWest":29,"./utils/CanvasManager":30,"./utils/CanvasTool":31,"./utils/ColorGeom":32,"./utils/ColorPattern":33}],20:[function(require,module,exports){
/*jslint node: true*/

'use strict';

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

module.exports = AbstractPrimitive;

},{}],21:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var BrickDimension = require('../dimensions/BrickDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var Brick, p;
Brick = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Brick.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new BrickDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = (this.dimension.xAxis + this.dimension.yAxis) / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 1;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = 0;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
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

module.exports = Brick;

},{"../colors/SideColor":4,"../dimensions/BrickDimension":7,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],22:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var CubeDimension = require('../dimensions/CubeDimension');
var BrickDimension = require('../dimensions/BrickDimension');
var SideXDimension = require('../dimensions/SideXDimension');
var SideYDimension = require('../dimensions/SideYDimension');
var CubeColor = require('../colors/CubeColor');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var PixelObject = require('../display/PixelObject');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var Brick = require('./Brick');
var SideX = require('./SideX');
var SideY = require('./SideY');

var Cube, p;
Cube = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Cube.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new CubeDimension() : dimension;
    this.color = color === undefined ? new CubeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.zAxis + (this.dimension.xAxis + this.dimension.yAxis) / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 1;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var brick, sideX, sideY, po_brick, po_x, po_y, ctx, bmd, offsetX, offsetY,
        i, j, k;
    // horizontal layer
    brick = new Brick(
        new BrickDimension(this.dimension.xAxis, this.dimension.yAxis),
        new SideColor(this.color.border, this.color.horizontal),
        this.border
    );

    // left side
    sideX = new SideX(
        new SideXDimension(this.dimension.xAxis, this.dimension.zAxis),
        new SideColor(this.color.border, this.color.left),
        this.border
    );

    // right side
    sideY = new SideY(
        new SideYDimension(this.dimension.yAxis, this.dimension.zAxis),
        new SideColor(this.color.border, this.color.right),
        this.border
    );

    po_brick = new PixelObject(brick);
    po_x = new PixelObject(sideX);
    po_y = new PixelObject(sideY);

    ctx = this.bitmapData.context;
    ctx.drawImage(po_brick.canvas, po_brick.x + this.dimension.yAxis - 2, po_brick.y);
    ctx.drawImage(po_x.canvas, po_x.x, po_x.y + this.dimension.zAxis + this.dimension.yAxis / 2 - 1);
    ctx.drawImage(po_y.canvas, po_y.x + this.w - 2, po_x.y + this.dimension.zAxis + this.dimension.xAxis / 2 - 1);

    // highlight & highlight fix
    bmd = new BitmapData(this.w, this.h);

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

module.exports = Cube;

},{"../colors/CubeColor":2,"../colors/SideColor":4,"../dimensions/BrickDimension":7,"../dimensions/CubeDimension":8,"../dimensions/SideXDimension":10,"../dimensions/SideYDimension":11,"../display/BitmapData":13,"../display/PixelObject":14,"../geom/Matrix":16,"./AbstractPrimitive":20,"./Brick":21,"./SideX":24,"./SideY":25}],23:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var PyramidDimension = require('../dimensions/PyramidDimension');
var PyramidColor = require('../colors/PyramidColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var Pyramid, p;
Pyramid = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Pyramid.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new PyramidDimension() : dimension;
    this.color = color === undefined ? new PyramidColor() : color;

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
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.xAxis + 2;
    this.matrix.ty = -this.hSize / 2 + 2 - (this.dimension.tall ? this.dimension.xAxis / 2 : 1);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
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

module.exports = Pyramid;

},{"../colors/PyramidColor":3,"../dimensions/PyramidDimension":9,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],24:[function(require,module,exports){
/*jslint node: true*/

"use strict";

var SideXDimension = require('../dimensions/SideXDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SideX, p;
SideX = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SideX.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new SideXDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis;
    this.h = this.dimension.zAxis + this.dimension.xAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = 0;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
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

module.exports = SideX;

},{"../colors/SideColor":4,"../dimensions/SideXDimension":10,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],25:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SideYDimension = require('../dimensions/SideYDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SideY, p;
SideY = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SideY.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new SideYDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.yAxis;
    this.h = this.dimension.zAxis + this.dimension.yAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
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

module.exports = SideY;

},{"../colors/SideColor":4,"../dimensions/SideYDimension":11,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],26:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SlopeEast, p;
SlopeEast = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeEast.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis * 2 + this.dimension.yAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.xAxis * 3 / 2 - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
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

module.exports = SlopeEast;

},{"../colors/SlopeColor":5,"../dimensions/SlopeDimension":12,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],27:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var SideX = require('./SideX');
var SideXDimension = require('../dimensions/SideXDimension');
var SideColor = require('../colors/SideColor');
var PixelObject = require('../display/PixelObject');

var SlopeNorth, p;
SlopeNorth = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeNorth.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.yAxis * 3 / 2 + this.dimension.xAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.yAxis - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
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

    sideX = new SideX(
        new SideXDimension(this.dimension.xAxis, this.h - this.dimension.xAxis / 2),
        new SideColor(colorBorderLeft, this.color.left)
    );

    poX = new PixelObject(sideX);

    ctx = this.bitmapData.context;
    ctx.drawImage(poX.canvas, poX.x, poX.y + this.h - this.dimension.xAxis / 2);

    bmd = new BitmapData(this.w, this.h);

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

module.exports = SlopeNorth;

},{"../colors/SideColor":4,"../colors/SlopeColor":5,"../dimensions/SideXDimension":10,"../dimensions/SlopeDimension":12,"../display/BitmapData":13,"../display/PixelObject":14,"../geom/Matrix":16,"./AbstractPrimitive":20,"./SideX":24}],28:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SlopeSouth, p;
SlopeSouth = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeSouth.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis / 2 + this.dimension.yAxis * 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.yAxis * 3 / 2 - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
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

module.exports = SlopeSouth;

},{"../colors/SlopeColor":5,"../dimensions/SlopeDimension":12,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],29:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var SideY = require('./SideY');
var SideYDimension = require('../dimensions/SideYDimension');
var SideColor = require('../colors/SideColor');
var PixelObject = require('../display/PixelObject');

var SlopeWest, p;
SlopeWest = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeWest.prototype = new AbstractPrimitive();

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
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis * 3 / 2 + this.dimension.yAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.xAxis - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
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

    sideY = new SideY(
        new SideYDimension(this.dimension.yAxis, this.h - this.dimension.yAxis / 2),
        new SideColor(colorBorderRight, this.color.right)
    );

    poY = new PixelObject(sideY);

    ctx = this.bitmapData.context;
    ctx.drawImage(poY.canvas, poY.x + this.w - 2, poY.y + this.h - this.dimension.yAxis / 2);

    bmd = new BitmapData(this.w, this.h);

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

module.exports = SlopeWest;

},{"../colors/SideColor":4,"../colors/SlopeColor":5,"../dimensions/SideYDimension":11,"../dimensions/SlopeDimension":12,"../display/BitmapData":13,"../display/PixelObject":14,"../geom/Matrix":16,"./AbstractPrimitive":20,"./SideY":25}],30:[function(require,module,exports){
/*jslint node: true*/
/*global document:true*/

'use strict';

var CanvasManager, p;
CanvasManager = function () {
    throw new Error('CanvasManager is a static Class, cannot be instanced.');
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

module.exports = CanvasManager;

},{}],31:[function(require,module,exports){
/*jslint node: true*/

'use strict';

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

module.exports = CanvasTool;

},{}],32:[function(require,module,exports){
/*jslint node: true*/

'use strict';

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

module.exports = ColorGeom;

},{}],33:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var ColorPattern, p;

ColorPattern = function () {
    throw new Error('ColorPattern is a static Class, cannot be instanced.');
};
p = ColorPattern;

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

module.exports = ColorPattern;

},{}]},{},[19])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29sb3JzL0Fic3RyYWN0Q29sb3IuanMiLCJzcmMvY29sb3JzL0N1YmVDb2xvci5qcyIsInNyYy9jb2xvcnMvUHlyYW1pZENvbG9yLmpzIiwic3JjL2NvbG9ycy9TaWRlQ29sb3IuanMiLCJzcmMvY29sb3JzL1Nsb3BlQ29sb3IuanMiLCJzcmMvZGltZW5zaW9ucy9BYnN0cmFjdERpbWVuc2lvbi5qcyIsInNyYy9kaW1lbnNpb25zL0JyaWNrRGltZW5zaW9uLmpzIiwic3JjL2RpbWVuc2lvbnMvQ3ViZURpbWVuc2lvbi5qcyIsInNyYy9kaW1lbnNpb25zL1B5cmFtaWREaW1lbnNpb24uanMiLCJzcmMvZGltZW5zaW9ucy9TaWRlWERpbWVuc2lvbi5qcyIsInNyYy9kaW1lbnNpb25zL1NpZGVZRGltZW5zaW9uLmpzIiwic3JjL2RpbWVuc2lvbnMvU2xvcGVEaW1lbnNpb24uanMiLCJzcmMvZGlzcGxheS9CaXRtYXBEYXRhLmpzIiwic3JjL2Rpc3BsYXkvUGl4ZWxPYmplY3QuanMiLCJzcmMvZGlzcGxheS9QaXhlbFZpZXcuanMiLCJzcmMvZ2VvbS9NYXRyaXguanMiLCJzcmMvZ2VvbS9Qb2ludC5qcyIsInNyYy9nZW9tL1BvaW50M0QuanMiLCJzcmMvb2JlbGlzay5qcyIsInNyYy9wcmltaXRpdmVzL0Fic3RyYWN0UHJpbWl0aXZlLmpzIiwic3JjL3ByaW1pdGl2ZXMvQnJpY2suanMiLCJzcmMvcHJpbWl0aXZlcy9DdWJlLmpzIiwic3JjL3ByaW1pdGl2ZXMvUHlyYW1pZC5qcyIsInNyYy9wcmltaXRpdmVzL1NpZGVYLmpzIiwic3JjL3ByaW1pdGl2ZXMvU2lkZVkuanMiLCJzcmMvcHJpbWl0aXZlcy9TbG9wZUVhc3QuanMiLCJzcmMvcHJpbWl0aXZlcy9TbG9wZU5vcnRoLmpzIiwic3JjL3ByaW1pdGl2ZXMvU2xvcGVTb3V0aC5qcyIsInNyYy9wcmltaXRpdmVzL1Nsb3BlV2VzdC5qcyIsInNyYy91dGlscy9DYW52YXNNYW5hZ2VyLmpzIiwic3JjL3V0aWxzL0NhbnZhc1Rvb2wuanMiLCJzcmMvdXRpbHMvQ29sb3JHZW9tLmpzIiwic3JjL3V0aWxzL0NvbG9yUGF0dGVybi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3RDb2xvciwgcDtcblxuQWJzdHJhY3RDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbn07XG5wID0gQWJzdHJhY3RDb2xvci5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG4vKipcbiAqIFRoZSBpbm5lciBjb2xvcnMgZm9yIGVsZW1lbnRzIG9mIGNlcnRhaW4gcHJpbWl0aXZlXG4gKi9cbnAuaW5uZXIgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBib3JkZXIgY29sb3JzIGZvciBlbGVtZW50cyBvZiBjZXJ0YWluIHByaW1pdGl2ZVxuICovXG5wLmJvcmRlciA9IG51bGw7XG5cbi8qKlxuICogVGhlIGJvcmRlckhpZ2hsaWdodCBjb2xvcnMgZm9yIGVsZW1lbnRzIG9mIGNlcnRhaW4gcHJpbWl0aXZlXG4gKi9cbnAuYm9yZGVySGlnaGxpZ2h0ID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgbGVmdCBzaWRlIGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5sZWZ0ID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgcmlnaHQgc2lkZSBjb2xvcnMgZm9yIGVsZW1lbnRzIG9mIGNlcnRhaW4gcHJpbWl0aXZlXG4gKi9cbnAucmlnaHQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBob3Jpem9udGFsIGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5ob3Jpem9udGFsID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgbGVmdCBzbG90IHNpZGUgY29sb3JzIGZvciBlbGVtZW50cyBvZiBjZXJ0YWluIHByaW1pdGl2ZVxuICovXG5wLmxlZnRTbG9wZSA9IG51bGw7XG5cbi8qKlxuICogVGhlIHJpZ2h0IHNsb3Qgc2lkZSBjb2xvcnMgZm9yIGVsZW1lbnRzIG9mIGNlcnRhaW4gcHJpbWl0aXZlXG4gKi9cbnAucmlnaHRTbG9wZSA9IG51bGw7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbQWJzdHJhY3RDb2xvcl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RDb2xvcjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdENvbG9yID0gcmVxdWlyZSgnLi9BYnN0cmFjdENvbG9yJyk7XG52YXIgQ29sb3JHZW9tID0gcmVxdWlyZSgnLi4vdXRpbHMvQ29sb3JHZW9tJyk7XG5cbnZhciBDdWJlQ29sb3IsIHA7XG5DdWJlQ29sb3IgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBob3Jpem9udGFsKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCwgaG9yaXpvbnRhbCk7XG59O1xucCA9IEN1YmVDb2xvci5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RDb2xvcigpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xucC5CUklHSFRORVNTX0dBSU4gPSAtMjA7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBob3Jpem9udGFsKSB7XG4gICAgdGhpcy5ib3JkZXIgPSBDb2xvckdlb20uZ2V0MzIoYm9yZGVyID09PSB1bmRlZmluZWQgPyAweDg3ODc4NyA6IGJvcmRlcik7XG4gICAgdGhpcy5ib3JkZXJIaWdobGlnaHQgPSBDb2xvckdlb20uZ2V0MzIoYm9yZGVySGlnaGxpZ2h0ID09PSB1bmRlZmluZWQgPyAweEZGRkZGRiA6IGJvcmRlckhpZ2hsaWdodCk7XG4gICAgdGhpcy5sZWZ0ID0gQ29sb3JHZW9tLmdldDMyKGxlZnQgPT09IHVuZGVmaW5lZCA/IDB4QzlDRkQwIDogbGVmdCk7XG4gICAgdGhpcy5yaWdodCA9IENvbG9yR2VvbS5nZXQzMihyaWdodCA9PT0gdW5kZWZpbmVkID8gMHhFM0UzRTMgOiByaWdodCk7XG4gICAgdGhpcy5ob3Jpem9udGFsID0gQ29sb3JHZW9tLmdldDMyKGhvcml6b250YWwgPT09IHVuZGVmaW5lZCA/IDB4RUVFRkYwIDogaG9yaXpvbnRhbCk7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXRCeUhvcml6b250YWxDb2xvciA9IGZ1bmN0aW9uIChob3Jpem9udGFsKSB7XG4gICAgcmV0dXJuIG5ldyBDdWJlQ29sb3IoXG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiA0KSxcbiAgICAgICAgLy9hcHBseSBoaWdodGxpZ2h0XG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgMCwgdHJ1ZSksXG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiAyKSxcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiksXG4gICAgICAgIGhvcml6b250YWxcbiAgICApO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbQ3ViZUNvbG9yXVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdWJlQ29sb3I7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3RDb2xvciA9IHJlcXVpcmUoJy4vQWJzdHJhY3RDb2xvcicpO1xudmFyIENvbG9yR2VvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL0NvbG9yR2VvbScpO1xuXG52YXIgUHlyYW1pZENvbG9yLCBwO1xuUHlyYW1pZENvbG9yID0gZnVuY3Rpb24gKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShib3JkZXIsIGJvcmRlckhpZ2hsaWdodCwgbGVmdCwgcmlnaHQpO1xufTtcbnAgPSBQeXJhbWlkQ29sb3IucHJvdG90eXBlID0gbmV3IEFic3RyYWN0Q29sb3IoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAuQlJJR0hUTkVTU19HQUlOID0gLTIwO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMuYm9yZGVyID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlciA9PT0gdW5kZWZpbmVkID8gMHg5NDk2OTggOiBib3JkZXIpO1xuICAgIHRoaXMuYm9yZGVySGlnaGxpZ2h0ID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlckhpZ2hsaWdodCA9PT0gdW5kZWZpbmVkID8gMHhGRkZGRkYgOiBib3JkZXJIaWdobGlnaHQpO1xuICAgIHRoaXMubGVmdCA9IENvbG9yR2VvbS5nZXQzMihsZWZ0ID09PSB1bmRlZmluZWQgPyAweEU2RThFOSA6IGxlZnQpO1xuICAgIHRoaXMucmlnaHQgPSBDb2xvckdlb20uZ2V0MzIocmlnaHQgPT09IHVuZGVmaW5lZCA/IDB4RUVFRkYwIDogcmlnaHQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXRCeVJpZ2h0Q29sb3IgPSBmdW5jdGlvbiAocmlnaHQpIHtcbiAgICByZXR1cm4gbmV3IFB5cmFtaWRDb2xvcihcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhyaWdodCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiA0KSxcbiAgICAgICAgLy9hcHBseSBoaWdodGxpZ2h0XG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MocmlnaHQsIDAsIHRydWUpLFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKHJpZ2h0LCB0aGlzLkJSSUdIVE5FU1NfR0FJTiksXG4gICAgICAgIHJpZ2h0XG4gICAgKTtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1B5cmFtaWRDb2xvcl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHlyYW1pZENvbG9yO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0Q29sb3IgPSByZXF1aXJlKCcuL0Fic3RyYWN0Q29sb3InKTtcbnZhciBDb2xvckdlb20gPSByZXF1aXJlKCcuLi91dGlscy9Db2xvckdlb20nKTtcblxudmFyIFNpZGVDb2xvciwgcDtcblNpZGVDb2xvciA9IGZ1bmN0aW9uIChib3JkZXIsIGlubmVyKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGJvcmRlciwgaW5uZXIpO1xufTtcbnAgPSBTaWRlQ29sb3IucHJvdG90eXBlID0gbmV3IEFic3RyYWN0Q29sb3IoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAuQlJJR0hUTkVTU19HQUlOID0gLTIwO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGJvcmRlciwgaW5uZXIpIHtcbiAgICB0aGlzLmJvcmRlciA9IENvbG9yR2VvbS5nZXQzMihib3JkZXIgPT09IHVuZGVmaW5lZCA/IDB4ODc4Nzg3IDogYm9yZGVyKTtcbiAgICB0aGlzLmlubmVyID0gQ29sb3JHZW9tLmdldDMyKGlubmVyID09PSB1bmRlZmluZWQgPyAweEVFRUVFRSA6IGlubmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAuZ2V0QnlJbm5lckNvbG9yID0gZnVuY3Rpb24gKGlubmVyKSB7XG4gICAgcmV0dXJuIG5ldyBTaWRlQ29sb3IoXG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaW5uZXIsIHRoaXMuQlJJR0hUTkVTU19HQUlOICogNCksXG4gICAgICAgIGlubmVyXG4gICAgKTtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1NpZGVDb2xvcl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZUNvbG9yO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0Q29sb3IgPSByZXF1aXJlKCcuL0Fic3RyYWN0Q29sb3InKTtcbnZhciBDb2xvckdlb20gPSByZXF1aXJlKCcuLi91dGlscy9Db2xvckdlb20nKTtcblxudmFyIFNsb3BlQ29sb3IsIHA7XG5TbG9wZUNvbG9yID0gZnVuY3Rpb24gKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCwgbGVmdFNsb3BlLCByaWdodFNsb3BlKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCwgbGVmdFNsb3BlLCByaWdodFNsb3BlKTtcbn07XG5wID0gU2xvcGVDb2xvci5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RDb2xvcigpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xucC5CUklHSFRORVNTX0dBSU4gPSAtMjA7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBsZWZ0U2xvcGUsIHJpZ2h0U2xvcGUpIHtcbiAgICB0aGlzLmJvcmRlciA9IENvbG9yR2VvbS5nZXQzMihib3JkZXIgPT09IHVuZGVmaW5lZCA/IDB4OTQ5Njk4IDogYm9yZGVyKTtcbiAgICB0aGlzLmJvcmRlckhpZ2hsaWdodCA9IENvbG9yR2VvbS5nZXQzMihib3JkZXJIaWdobGlnaHQgPT09IHVuZGVmaW5lZCA/IDB4RkZGRkZGIDogYm9yZGVySGlnaGxpZ2h0KTtcbiAgICB0aGlzLmxlZnQgPSBDb2xvckdlb20uZ2V0MzIobGVmdCA9PT0gdW5kZWZpbmVkID8gMHhDOUNGRDAgOiBsZWZ0KTtcbiAgICB0aGlzLnJpZ2h0ID0gQ29sb3JHZW9tLmdldDMyKHJpZ2h0ID09PSB1bmRlZmluZWQgPyAweEU2RThFOSA6IHJpZ2h0KTtcbiAgICB0aGlzLmxlZnRTbG9wZSA9IENvbG9yR2VvbS5nZXQzMihsZWZ0U2xvcGUgPT09IHVuZGVmaW5lZCA/IDB4REJEQkRCIDogbGVmdFNsb3BlKTtcbiAgICB0aGlzLnJpZ2h0U2xvcGUgPSBDb2xvckdlb20uZ2V0MzIocmlnaHRTbG9wZSA9PT0gdW5kZWZpbmVkID8gMHhEQkRCREIgOiByaWdodFNsb3BlKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcblxuLypcbiAqIGhvcml6b250YWwgc2lkZSBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0IGluIHRoZSBTbG9wZSBwcmltaXRpdmVcbiAqIHlvdSBjYW4gYXNzaWduIHRoZSBzYW1lIGhvcml6b250YWwgY29sb3IgYXMgY3ViZVxuICogc28gdGhhdCB5b3Ugd2lsbCBiZSBhYmxlIHRvIGFycmFuZ2UgdGhlIHNsb3BlIHdpdGggY3ViZVxuICovXG5wLmdldEJ5SG9yaXpvbnRhbENvbG9yID0gZnVuY3Rpb24gKGhvcml6b250YWwpIHtcbiAgICByZXR1cm4gbmV3IFNsb3BlQ29sb3IoXG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiA0KSxcbiAgICAgICAgLy9hcHBseSBoaWdodGxpZ2h0XG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgMCwgdHJ1ZSksXG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiAyKSxcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiksXG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiAxLjUpLFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKGhvcml6b250YWwsIHRoaXMuQlJJR0hUTkVTU19HQUlOICogMC41KVxuICAgICk7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltTbG9wZUNvbG9yXVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbG9wZUNvbG9yO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uLCBwO1xuQWJzdHJhY3REaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG59O1xucCA9IEFic3RyYWN0RGltZW5zaW9uLnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbi8qKlxuICogVGhlIHggQXhpcyBkaW1lbnNpb25zIGluIDIyLjYgZGVncmVlcyBjb29yZGluYXRlXG4gKi9cbnAueEF4aXMgPSBudWxsO1xuXG4vKipcbiAqIFRoZSB5IEF4aXMgZGltZW5zaW9ucyBpbiAyMi42IGRlZ3JlZXMgY29vcmRpbmF0ZVxuICovXG5wLnlBeGlzID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgeiBBeGlzIGRpbWVuc2lvbnMgaW4gMjIuNiBkZWdyZWVzIGNvb3JkaW5hdGVcbiAqL1xucC56QXhpcyA9IG51bGw7XG5cbi8qKlxuICogUHlyYW1pZCB0YWxsIG1vZGVcbiAqL1xucC50YWxsID0gZmFsc2U7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbQWJzdHJhY3REaW1lbnNpb25dXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0RGltZW5zaW9uO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uID0gcmVxdWlyZSgnLi9BYnN0cmFjdERpbWVuc2lvbicpO1xuXG52YXIgQnJpY2tEaW1lbnNpb24sIHA7XG5Ccmlja0RpbWVuc2lvbiA9IGZ1bmN0aW9uICh4QXhpcywgeUF4aXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoeEF4aXMsIHlBeGlzKTtcbn07XG5wID0gQnJpY2tEaW1lbnNpb24ucHJvdG90eXBlID0gbmV3IEFic3RyYWN0RGltZW5zaW9uKCk7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoeEF4aXMsIHlBeGlzKSB7XG4gICAgdGhpcy54QXhpcyA9IHhBeGlzIHx8IDMwO1xuICAgIHRoaXMueUF4aXMgPSB5QXhpcyB8fCAzMDtcblxuICAgIGlmICh0aGlzLnhBeGlzICUgMiA9PT0gMSB8fCB0aGlzLnlBeGlzICUgMiA9PT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ4LHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXJcIik7XG4gICAgfVxuXG4gICAgLy8geEF4aXMgfHwgeUF4aXMgPSA0IGZsb29kRmlsbCBjb3VsZCBub3QgYmUgYXBwbGllZFxuICAgIGlmICh0aGlzLnhBeGlzIDw9IDQgfHwgdGhpcy55QXhpcyA8PSA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImRpbWVuc2lvbiBpcyB0b28gc21hbGxcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltCcmlja0RpbWVuc2lvbl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQnJpY2tEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBDdWJlRGltZW5zaW9uLCBwO1xuQ3ViZURpbWVuc2lvbiA9IGZ1bmN0aW9uICh4QXhpcywgeUF4aXMsIHpBeGlzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKHhBeGlzLCB5QXhpcywgekF4aXMpO1xufTtcbnAgPSBDdWJlRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHhBeGlzLCB5QXhpcywgekF4aXMpIHtcbiAgICB0aGlzLnhBeGlzID0geEF4aXMgfHwgMzA7XG4gICAgdGhpcy55QXhpcyA9IHlBeGlzIHx8IDMwO1xuICAgIHRoaXMuekF4aXMgPSB6QXhpcyB8fCAzMDtcblxuICAgIGlmICh0aGlzLnhBeGlzICUgMiA9PT0gMSB8fCB0aGlzLnlBeGlzICUgMiA9PT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ4LHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXJcIik7XG4gICAgfVxuXG4gICAgLy8geEF4aXMgfHwgeUF4aXMgPSA0IGZsb29kRmlsbCBjb3VsZCBub3QgYmUgYXBwbGllZFxuICAgIGlmICh0aGlzLnhBeGlzIDw9IDQgfHwgdGhpcy55QXhpcyA8PSA0IHx8IHRoaXMuekF4aXMgPD0gMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkaW1lbnNpb24gaXMgdG9vIHNtYWxsXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbQ3ViZURpbWVuc2lvbl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZURpbWVuc2lvbjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERpbWVuc2lvbiA9IHJlcXVpcmUoJy4vQWJzdHJhY3REaW1lbnNpb24nKTtcblxudmFyIFB5cmFtaWREaW1lbnNpb24sIHA7XG5QeXJhbWlkRGltZW5zaW9uID0gZnVuY3Rpb24gKGF4aXMsIHRhbGwpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYXhpcywgdGFsbCk7XG59O1xucCA9IFB5cmFtaWREaW1lbnNpb24ucHJvdG90eXBlID0gbmV3IEFic3RyYWN0RGltZW5zaW9uKCk7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYXhpcywgdGFsbCkge1xuICAgIHRoaXMueEF4aXMgPSBheGlzIHx8IDMwO1xuICAgIHRoaXMueUF4aXMgPSBheGlzIHx8IDMwO1xuICAgIHRoaXMudGFsbCA9IHRhbGwgfHwgZmFsc2U7XG5cbiAgICBpZiAodGhpcy54QXhpcyAlIDIgPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXhpcyBtdXN0IGJlIGV2ZW4gbnVtYmVyXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnhBeGlzIDw9IDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGltZW5zaW9uIGlzIHRvbyBzbWFsbFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1B5cmFtaWREaW1lbnNpb25dXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFB5cmFtaWREaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBTaWRlWERpbWVuc2lvbiwgcDtcblNpZGVYRGltZW5zaW9uID0gZnVuY3Rpb24gKHhBeGlzLCB6QXhpcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh4QXhpcywgekF4aXMpO1xufTtcbnAgPSBTaWRlWERpbWVuc2lvbi5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3REaW1lbnNpb24oKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh4QXhpcywgekF4aXMpIHtcbiAgICB0aGlzLnhBeGlzID0geEF4aXMgfHwgMzA7XG4gICAgdGhpcy56QXhpcyA9IHpBeGlzIHx8IDMwO1xuXG4gICAgaWYgKHRoaXMueEF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInhBeGlzIG11c3QgYmUgZXZlbiBudW1iZXJcIik7XG4gICAgfVxuXG4gICAgLy8geEF4aXMgfHwgekF4aXMgPSA0IGZsb29kRmlsbCBjb3VsZCBub3QgYmUgYXBwbGllZFxuICAgIGlmICh0aGlzLnhBeGlzIDw9IDQgfHwgdGhpcy56QXhpcyA8PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImRpbWVuc2lvbiBpcyB0b28gc21hbGxcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltTaWRlWERpbWVuc2lvbl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVhEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBTaWRlWURpbWVuc2lvbiwgcDtcblxuU2lkZVlEaW1lbnNpb24gPSBmdW5jdGlvbiAoeUF4aXMsIHpBeGlzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKHlBeGlzLCB6QXhpcyk7XG59O1xucCA9IFNpZGVZRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHlBeGlzLCB6QXhpcykge1xuICAgIHRoaXMueUF4aXMgPSB5QXhpcyB8fCAzMDtcbiAgICB0aGlzLnpBeGlzID0gekF4aXMgfHwgMzA7XG5cbiAgICBpZiAodGhpcy55QXhpcyAlIDIgPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwieUF4aXMgbXVzdCBiZSBldmVuIG51bWJlclwiKTtcbiAgICB9XG5cbiAgICAvLyB5QXhpcyB8fCB6QXhpcyA9IDQgZmxvb2RGaWxsIGNvdWxkIG5vdCBiZSBhcHBsaWVkXG4gICAgaWYgKHRoaXMueUF4aXMgPD0gNCB8fCB0aGlzLnpBeGlzIDw9IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGltZW5zaW9uIGlzIHRvbyBzbWFsbFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1NpZGVZRGltZW5zaW9uXVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlWURpbWVuc2lvbjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERpbWVuc2lvbiA9IHJlcXVpcmUoJy4vQWJzdHJhY3REaW1lbnNpb24nKTtcblxudmFyIFNsb3BlRGltZW5zaW9uLCBwO1xuU2xvcGVEaW1lbnNpb24gPSBmdW5jdGlvbiAoeEF4aXMsIHlBeGlzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKHhBeGlzLCB5QXhpcyk7XG59O1xucCA9IFNsb3BlRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHhBeGlzLCB5QXhpcykge1xuICAgIHRoaXMueEF4aXMgPSB4QXhpcyB8fCAzMDtcbiAgICB0aGlzLnlBeGlzID0geUF4aXMgfHwgMzA7XG5cbiAgICBpZiAodGhpcy54QXhpcyAlIDIgPT09IDEgfHwgdGhpcy55QXhpcyAlIDIgPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwieEF4aXMgYW5kIHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXJcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCB8fCB0aGlzLnlBeGlzIDw9IDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGltZW5zaW9uIGlzIHRvbyBzbWFsbFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1Nsb3BlRGltZW5zaW9uXVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbG9wZURpbWVuc2lvbjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDYW52YXNNYW5hZ2VyID0gcmVxdWlyZSgnLi4vdXRpbHMvQ2FudmFzTWFuYWdlcicpO1xuXG52YXIgQml0bWFwRGF0YSwgcDtcbkJpdG1hcERhdGEgPSBmdW5jdGlvbiAodywgaCwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh3LCBoLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gQml0bWFwRGF0YS5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0eVxucC5pbWFnZURhdGEgPSBudWxsO1xucC5jYW52YXMgPSBudWxsO1xucC5jb250ZXh0ID0gbnVsbDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh3LCBoLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgaWYgKHcgPT09IHVuZGVmaW5lZCB8fCBoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQml0bWFwRGF0YSB3aWR0aCBvciBoZWlnaHQgaXMgbWlzc2luZ1wiKTtcbiAgICB9XG5cbiAgICBpZiAodXNlRGVmYXVsdENhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IENhbnZhc01hbmFnZXIuZ2V0RGVmYXVsdENhbnZhcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gQ2FudmFzTWFuYWdlci5nZXROZXdDYW52YXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdyk7XG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoKTtcblxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuaW1hZ2VEYXRhID0gdGhpcy5jb250ZXh0LmNyZWF0ZUltYWdlRGF0YSh3LCBoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxucC5zZXRQaXhlbCA9IGZ1bmN0aW9uIChwb3NYLCBwb3NZLCBjb2xvcikge1xuICAgIHZhciBpbmRleCA9IChwb3NZICogdGhpcy5pbWFnZURhdGEud2lkdGggKyBwb3NYKSAqIDQ7XG4gICAgdGhpcy5zZXRQaXhlbEJ5SW5kZXgoaW5kZXgsIGNvbG9yKTtcbn07XG5cbnAuc2V0UGl4ZWxCeUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBjb2xvcikge1xuICAgIHZhciBwaXhlbHMgPSB0aGlzLmltYWdlRGF0YS5kYXRhO1xuXG4gICAgcGl4ZWxzW2luZGV4XSA9IChjb2xvciA+Pj4gMTYpICYgMHhGRjtcbiAgICBwaXhlbHNbaW5kZXggKyAxXSA9IChjb2xvciA+Pj4gOCkgJiAweEZGO1xuICAgIHBpeGVsc1tpbmRleCArIDJdID0gKGNvbG9yID4+PiAwKSAmIDB4RkY7XG4gICAgcGl4ZWxzW2luZGV4ICsgM10gPSAoY29sb3IgPj4+IDI0KSAmIDB4RkY7XG59O1xuXG5wLmNoZWNrUGl4ZWxBdmFpbGFibGUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHZhciBpbmRleCA9ICh5ICogdGhpcy5pbWFnZURhdGEud2lkdGggKyB4KSAqIDQ7XG5cbiAgICByZXR1cm4gdGhpcy5pbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID09PSAwO1xufTtcblxucC5mbG9vZEZpbGwgPSBmdW5jdGlvbiAocG9zWCwgcG9zWSwgY29sb3IpIHtcbiAgICBpZiAoKChjb2xvciA+Pj4gMjQpICYgMHhGRikgPT09IDB4MDApIHtcbiAgICAgICAgLy8gdHJhbnNwYXJlbnQgZmxvb2QgZmlsbFxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHggPSBwb3NYLCB5ID0gcG9zWSxcbiAgICAgICAgc3RhY2sgPSBbXSxcbiAgICAgICAgbm93Q29sID0gW10sXG4gICAgICAgIHByZXZDb2wgPSBbXSxcbiAgICAgICAgY29sLCByb3csIG1hdGNoRmxhZywgbmV3U3RhcnQsXG4gICAgICAgIHcgPSB0aGlzLmltYWdlRGF0YS53aWR0aCxcbiAgICAgICAgaCA9IHRoaXMuaW1hZ2VEYXRhLmhlaWdodCxcbiAgICAgICAgaSwgajtcblxuICAgIC8vIGJvdW5kIHJlYWNoXG4gICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPj0gdyB8fCB5ID49IGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGZpcnN0IHBvaW50IGNoZWNrIGZhaWxcbiAgICBpZiAoIXRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZSh4LCB5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGFydCBwb2ludCBmb3IgZmxvb2QgZmlsbCBpcyBhbHJlYWR5IGZpbGxlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBsZWZ0IHNpZGUgZmxvb2QgZmlsbFxuICAgIGZvciAoY29sID0geDsgY29sID49IDA7IGNvbCAtPSAxKSB7XG4gICAgICAgIC8vIHRvcCBzaWRlXG4gICAgICAgIGZvciAocm93ID0geTsgcm93ID49IDA7IHJvdyAtPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lIGlzIGludmFsaWQgcGl4ZWwgJiYgbm90IGF0IGNvbCB0b3BcbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSB5ICYmIHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgKyAxLCByb3cgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IG9uZSBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sICsgMSwgcm93IC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFydCA9IHJvdyAtIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhaWwsIGFzc2lnbiBtYXggdmFsdWUgdG8gYXZvaWQgbG9vcCBiZWxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IG5ld1N0YXJ0OyByb3cgPj0gMDsgcm93IC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBib3R0b20gc2lkZVxuICAgICAgICBmb3IgKHJvdyA9IHk7IHJvdyA8IGg7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lIGlzIGludmFsaWQgcGl4ZWwgJiYgbm90IGF0IGNvbCBib3R0b21cbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSB5ICYmIHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgKyAxLCByb3cgKyAxKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5leHQgb25lIGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSByb3cgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgKyAxLCByb3cgKyAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93ICsgMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbCwgYXNzaWduIG1heCB2YWx1ZSB0byBhdm9pZCBsb29wIGJlbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSBuZXdTdGFydDsgcm93IDwgaDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGFyZSB3aXRoIHByZXZpb3VzIGNvbHVtblxuICAgICAgICAvLyBmb3IgZmlyc3QgY29sdW1uXG4gICAgICAgIC8vIHRoZSBnaXZlbiBwb2ludCBzaG91bGQgYmUgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgICAgICAgaWYgKGNvbCA9PT0geCkge1xuICAgICAgICAgICAgcHJldkNvbCA9IG5vd0NvbC5jb25jYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoRmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcmV2Q29sLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcHJldkNvbC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChub3dDb2xbal0gPT09IHByZXZDb2xbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHByZXZDb2xbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoRmxhZykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoRmxhZykge1xuICAgICAgICAgICAgcHJldkNvbCA9IG5vd0NvbC5jb25jYXQoKTtcbiAgICAgICAgICAgIG5vd0NvbCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYm91bmQgcmVhY2hcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgc3RhcnQgcG9pbnRcbiAgICB4ID0gcG9zWDtcbiAgICB5ID0gcG9zWTtcbiAgICBwcmV2Q29sID0gW107XG4gICAgbm93Q29sID0gW107XG5cbiAgICAvLyByaWdodCBzaWRlIGZsb29kIGZpbGxcbiAgICBmb3IgKGNvbCA9IHg7IGNvbCA8IHc7IGNvbCArPSAxKSB7XG5cbiAgICAgICAgLy8gdG9wIHNpZGVcbiAgICAgICAgZm9yIChyb3cgPSB5OyByb3cgPj0gMDsgcm93IC09IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUgaXMgaW52YWxpZCBwaXhlbCAmJiBub3QgYXQgY29sIHRvcFxuICAgICAgICAgICAgICAgIGlmIChyb3cgPT09IHkgJiYgdGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCAtIDEsIHJvdyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5leHQgb25lIGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSByb3cgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgLSAxLCByb3cgLSAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93IC0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbCwgYXNzaWduIG1heCB2YWx1ZSB0byBhdm9pZCBsb29wIGJlbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gbmV3U3RhcnQ7IHJvdyA+PSAwOyByb3cgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wsIHJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGUgcGl4ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKChyb3cgKiB3ICsgY29sKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd0NvbC5wdXNoKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBib3R0b20gc2lkZVxuICAgICAgICBmb3IgKHJvdyA9IHk7IHJvdyA8IGg7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lIGlzIGludmFsaWQgcGl4ZWwgJiYgbm90IGF0IGNvbCBib3R0b21cbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSB5ICYmIHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgLSAxLCByb3cgKyAxKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5leHQgb25lIGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSByb3cgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgLSAxLCByb3cgKyAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93ICsgMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbCwgYXNzaWduIG1heCB2YWx1ZSB0byBhdm9pZCBsb29wIGJlbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSBuZXdTdGFydDsgcm93IDwgaDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGFyZSB3aXRoIHByZXZpb3VzIGNvbHVtblxuICAgICAgICAvLyBmb3IgZmlyc3QgY29sdW1uXG4gICAgICAgIC8vIHRoZSBnaXZlbiBwb2ludCBzaG91bGQgYmUgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgICAgICAgaWYgKGNvbCA9PT0geCkge1xuICAgICAgICAgICAgcHJldkNvbCA9IG5vd0NvbC5jb25jYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoRmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcmV2Q29sLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcHJldkNvbC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChub3dDb2xbal0gPT09IHByZXZDb2xbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHByZXZDb2xbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoRmxhZykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoRmxhZykge1xuICAgICAgICAgICAgcHJldkNvbCA9IG5vd0NvbC5jb25jYXQoKTtcbiAgICAgICAgICAgIG5vd0NvbCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYm91bmQgcmVhY2hcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmlsbCBpbWFnZSBkYXRhXG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuc2V0UGl4ZWxCeUluZGV4KHN0YWNrW2ldLCBjb2xvcik7XG4gICAgfVxufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbQml0bWFwRGF0YV1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQml0bWFwRGF0YTtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQb2ludDNEID0gcmVxdWlyZSgnLi4vZ2VvbS9Qb2ludDNEJyk7XG5cbnZhciBQaXhlbE9iamVjdCwgcDtcblBpeGVsT2JqZWN0ID0gZnVuY3Rpb24gKHByaW1pdGl2ZSwgcG9pbnQzRCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShwcmltaXRpdmUsIHBvaW50M0QpO1xufTtcbnAgPSBQaXhlbE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLnggPSBudWxsO1xucC55ID0gbnVsbDtcbnAuY2FudmFzID0gbnVsbDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwcmltaXRpdmUsIHBvaW50M0QpIHtcbiAgICBpZiAoIXByaW1pdGl2ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcmltaXRpdmUgaXMgbm90IGRlZmluZWRcIik7XG4gICAgfVxuXG4gICAgdmFyIHAzRCA9IHBvaW50M0QgfHwgbmV3IFBvaW50M0QoKTtcblxuICAgIHRoaXMuY2FudmFzID0gcHJpbWl0aXZlLmNhbnZhcztcbiAgICB0aGlzLnggPSBwcmltaXRpdmUubWF0cml4LnR4ICsgcDNELnggLSBwM0QueTtcbiAgICB0aGlzLnkgPSBwcmltaXRpdmUubWF0cml4LnR5ICsgTWF0aC5mbG9vcihwM0QueCAvIDIgKyBwM0QueSAvIDIpIC0gcDNELno7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1BpeGVsT2JqZWN0XVwiO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RzXG5cbm1vZHVsZS5leHBvcnRzID0gUGl4ZWxPYmplY3Q7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cbi8qZ2xvYmFsIGpRdWVyeTp0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUG9pbnQgPSByZXF1aXJlKCcuLi9nZW9tL1BvaW50Jyk7XG52YXIgUGl4ZWxPYmplY3QgPSByZXF1aXJlKCcuLi9kaXNwbGF5L1BpeGVsT2JqZWN0Jyk7XG5cbnZhciBQaXhlbFZpZXcsIHA7XG5QaXhlbFZpZXcgPSBmdW5jdGlvbiAoY2FudmFzLCBwb2ludCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShjYW52YXMsIHBvaW50KTtcbn07XG5wID0gUGl4ZWxWaWV3LnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAuY2FudmFzID0gbnVsbDtcbnAuY29udGV4dCA9IG51bGw7XG5wLnBvaW50ID0gbnVsbDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChjYW52YXMsIHBvaW50KSB7XG4gICAgaWYgKCFjYW52YXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzIGlzIG5vdCBkZWZpbmVkXCIpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChjYW52YXMgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgICAgIGNhbnZhcyA9IGNhbnZhcy5nZXQoMCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMucG9pbnQgPSBwb2ludCB8fCBuZXcgUG9pbnQoMCwgMCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnJlbmRlck9iamVjdCA9IGZ1bmN0aW9uIChwcmltaXRpdmUsIHBvaW50M0QpIHtcbiAgICB2YXIgcG8gPSBuZXcgUGl4ZWxPYmplY3QocHJpbWl0aXZlLCBwb2ludDNEKTtcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHBvLmNhbnZhcywgdGhpcy5wb2ludC54ICsgcG8ueCwgdGhpcy5wb2ludC55ICsgcG8ueSk7XG59O1xuXG5wLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltQaXhlbFZpZXddXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBpeGVsVmlldztcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBNYXRyaXgsIHA7XG5NYXRyaXggPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGEsIGIsIGMsIGQsIHR4LCB0eSk7XG59O1xucCA9IE1hdHJpeC5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzOlxuLyoqXG4gKiBQb3NpdGlvbiAoMCwgMCkgaW4gYSAzeDMgbWF0cml4LlxuICogQHByb3BlcnR5IGFcbiAqIEB0eXBlIE51bWJlclxuICoqL1xucC5hID0gMTtcblxuLyoqXG4gKiBQb3NpdGlvbiAoMCwgMSkgaW4gYSAzeDMgbWF0cml4LlxuICogQHByb3BlcnR5IGJcbiAqIEB0eXBlIE51bWJlclxuICoqL1xucC5iID0gMDtcblxuLyoqXG4gKiBQb3NpdGlvbiAoMSwgMCkgaW4gYSAzeDMgbWF0cml4LlxuICogQHByb3BlcnR5IGNcbiAqIEB0eXBlIE51bWJlclxuICoqL1xucC5jID0gMDtcblxuLyoqXG4gKiBQb3NpdGlvbiAoMSwgMSkgaW4gYSAzeDMgbWF0cml4LlxuICogQHByb3BlcnR5IGRcbiAqIEB0eXBlIE51bWJlclxuICoqL1xucC5kID0gMTtcblxuLyoqXG4gKiBQb3NpdGlvbiAoMiwgMCkgaW4gYSAzeDMgbWF0cml4LlxuICogQHByb3BlcnR5IHR4XG4gKiBAdHlwZSBOdW1iZXJcbiAqKi9cbnAudHggPSAwO1xuXG4vKipcbiAqIFBvc2l0aW9uICgyLCAxKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgdHlcbiAqIEB0eXBlIE51bWJlclxuICoqL1xucC50eSA9IDA7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gICAgdGhpcy5hID0gKGEgPT09IHVuZGVmaW5lZCkgPyAxIDogYTtcbiAgICB0aGlzLmIgPSBiIHx8IDA7XG4gICAgdGhpcy5jID0gYyB8fCAwO1xuICAgIHRoaXMuZCA9IChkID09PSB1bmRlZmluZWQpID8gMSA6IGQ7XG4gICAgdGhpcy50eCA9IHR4IHx8IDA7XG4gICAgdGhpcy50eSA9IHR5IHx8IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltNYXRyaXhdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHJpeDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQb2ludCwgcDtcblBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoeCwgeSk7XG59O1xucCA9IFBvaW50LnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAueCA9IDA7XG5wLnkgPSAwO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB0aGlzLnggPSAoeCA9PT0gdW5kZWZpbmVkID8gMCA6IHgpO1xuICAgIHRoaXMueSA9ICh5ID09PSB1bmRlZmluZWQgPyAwIDogeSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltQb2ludCB4IDogXCIgKyB0aGlzLnggKyBcIiwgeSA6IFwiICsgdGhpcy55ICsgXCJdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xuXG52YXIgUG9pbnQzRCwgcDtcblBvaW50M0QgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh4LCB5LCB6KTtcbn07XG5wID0gUG9pbnQzRC5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLnggPSAwO1xucC55ID0gMDtcbnAueiA9IDA7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgIHRoaXMueCA9ICh4ID09PSB1bmRlZmluZWQgPyAwIDogeCk7XG4gICAgdGhpcy55ID0gKHkgPT09IHVuZGVmaW5lZCA/IDAgOiB5KTtcbiAgICB0aGlzLnogPSAoeiA9PT0gdW5kZWZpbmVkID8gMCA6IHopO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b0dsb2JhbENvb3JkaW5hdGVzID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgIHZhciBwMkQgPSBuZXcgUG9pbnQoXG4gICAgICAgIHRoaXMueCAtIHRoaXMueSxcbiAgICAgICAgTWF0aC5mbG9vcih0aGlzLnggLyAyICsgdGhpcy55IC8gMikgLSB0aGlzLnpcbiAgICApO1xuXG4gICAgaWYgKG9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHAyRC54ID0gcDJELnggKyBvZmZzZXQueDtcbiAgICAgICAgcDJELnkgPSBwMkQueSArIG9mZnNldC55O1xuICAgIH1cblxuICAgIHJldHVybiBwMkQ7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltQb2ludDNEIHggOiBcIiArIHRoaXMueCArIFwiLCB5IDogXCIgKyB0aGlzLnkgKyBcIiwgejogXCIgKyB0aGlzLnogKyBcIl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQzRDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuLypnbG9iYWwgd2luZG93OnRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBvYmVsaXNrXG4gKiovXG52YXIgb2JlbGlzayA9IHt9O1xuXG5vYmVsaXNrLkN1YmUgPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvQ3ViZScpO1xub2JlbGlzay5CcmljayA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9CcmljaycpO1xub2JlbGlzay5QeXJhbWlkID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL1B5cmFtaWQnKTtcbm9iZWxpc2suU2lkZVggPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvU2lkZVgnKTtcbm9iZWxpc2suU2lkZVkgPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvU2lkZVknKTtcbm9iZWxpc2suU2xvcGVFYXN0ID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL1Nsb3BlRWFzdCcpO1xub2JlbGlzay5TbG9wZU5vcnRoID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL1Nsb3BlTm9ydGgnKTtcbm9iZWxpc2suU2xvcGVTb3V0aCA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9TbG9wZVNvdXRoJyk7XG5vYmVsaXNrLlNsb3BlV2VzdCA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9TbG9wZVdlc3QnKTtcblxub2JlbGlzay5Db2xvclBhdHRlcm4gPSByZXF1aXJlKCcuL3V0aWxzL0NvbG9yUGF0dGVybicpO1xub2JlbGlzay5Db2xvckdlb20gPSByZXF1aXJlKCcuL3V0aWxzL0NvbG9yR2VvbScpO1xub2JlbGlzay5DYW52YXNNYW5hZ2VyID0gcmVxdWlyZSgnLi91dGlscy9DYW52YXNNYW5hZ2VyJyk7XG5vYmVsaXNrLkNhbnZhc1Rvb2wgPSByZXF1aXJlKCcuL3V0aWxzL0NhbnZhc1Rvb2wnKTtcblxub2JlbGlzay5NYXRyaXggPSByZXF1aXJlKCcuL2dlb20vTWF0cml4Jyk7XG5vYmVsaXNrLlBvaW50ID0gcmVxdWlyZSgnLi9nZW9tL1BvaW50Jyk7XG5vYmVsaXNrLlBvaW50M0QgPSByZXF1aXJlKCcuL2dlb20vUG9pbnQzRCcpO1xuXG5vYmVsaXNrLlBpeGVsVmlldyA9IHJlcXVpcmUoJy4vZGlzcGxheS9QaXhlbFZpZXcnKTtcbm9iZWxpc2suUGl4ZWxPYmplY3QgPSByZXF1aXJlKCcuL2Rpc3BsYXkvUGl4ZWxPYmplY3QnKTtcbm9iZWxpc2suQml0bWFwRGF0YSA9IHJlcXVpcmUoJy4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG5cbm9iZWxpc2suQnJpY2tEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvQnJpY2tEaW1lbnNpb24nKTtcbm9iZWxpc2suQ3ViZURpbWVuc2lvbiA9IHJlcXVpcmUoJy4vZGltZW5zaW9ucy9DdWJlRGltZW5zaW9uJyk7XG5vYmVsaXNrLlB5cmFtaWREaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvUHlyYW1pZERpbWVuc2lvbicpO1xub2JlbGlzay5TaWRlWERpbWVuc2lvbiA9IHJlcXVpcmUoJy4vZGltZW5zaW9ucy9TaWRlWERpbWVuc2lvbicpO1xub2JlbGlzay5TaWRlWURpbWVuc2lvbiA9IHJlcXVpcmUoJy4vZGltZW5zaW9ucy9TaWRlWURpbWVuc2lvbicpO1xub2JlbGlzay5TbG9wZURpbWVuc2lvbiA9IHJlcXVpcmUoJy4vZGltZW5zaW9ucy9TbG9wZURpbWVuc2lvbicpO1xuXG5vYmVsaXNrLkN1YmVDb2xvciA9IHJlcXVpcmUoJy4vY29sb3JzL0N1YmVDb2xvcicpO1xub2JlbGlzay5QeXJhbWlkQ29sb3IgPSByZXF1aXJlKCcuL2NvbG9ycy9QeXJhbWlkQ29sb3InKTtcbm9iZWxpc2suU2lkZUNvbG9yID0gcmVxdWlyZSgnLi9jb2xvcnMvU2lkZUNvbG9yJyk7XG5vYmVsaXNrLlNsb3BlQ29sb3IgPSByZXF1aXJlKCcuL2NvbG9ycy9TbG9wZUNvbG9yJyk7XG5cbndpbmRvdy5vYmVsaXNrID0gb2JlbGlzaztcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdFByaW1pdGl2ZSwgcDtcbkFic3RyYWN0UHJpbWl0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xufTtcbnAgPSBBYnN0cmFjdFByaW1pdGl2ZS5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG4vKipcbiAqIHRoZSBjYW52YXMgZm9yIGRyYXdJbWFnZSB0byBhbnkgY2FudmFzXG4gKi9cbnAuY2FudmFzID0gbnVsbDtcblxuLy8gcHJvdGVjdCBwcm9wZXJ0aWVzXG4vKipcbiAqIHRoZSB3aWR0aCBvZiB0aGUgYml0bWFwIGluIDJkIGZsYXNoIGNvb3JkaW5hdGVcbiAqL1xucC53ID0gbnVsbDtcblxuLyoqXG4gKiB0aGUgaGVpZ2h0IG9mIHRoZSBiaXRtYXAgaW4gMmQgZmxhc2ggY29vcmRpbmF0ZVxuICovXG5wLmggPSBudWxsO1xuXG4vKipcbiAqIHRoZSBkaW1lbnNpb24gb2YgcHJpbWl0aXZlIGluIDNkIHBpeGVsIGNvb3JkaW5hdGVcbiAqL1xucC5kaW1lbnNpb24gPSBudWxsO1xuXG4vKipcbiAqIHRoZSBjb2xvciBvYmogb2YgdGhlIHByaW1pdGl2ZVxuICovXG5wLmNvbG9yID0gbnVsbDtcblxuLyoqXG4gKiB0aGUgYm9yZGVyIG9wdGlvbiBvZiB0aGUgcHJpbWl0aXZlXG4gKi9cbnAuYm9yZGVyID0gbnVsbDtcblxuLyoqXG4gKiB0aGUgc291cmNlIGJpdG1hcGRhdGEgY29udGFpbnMgcGl4ZWwgZ3JhcGhpY1xuICovXG5wLmJpdG1hcERhdGEgPSBudWxsO1xuXG4vKipcbiAqIHRoZSBwcmVzZXJ2ZSBjYW52YXMgb3B0aW9uXG4gKi9cbnAudXNlRGVmYXVsdENhbnZhcyA9IG51bGw7XG5cbi8qKlxuICogdGhlIG1hdHJpeCBvZmZzZXQgYmV0d2VlbiB0aGUgYml0bWFwIGFuZCB0aGUgM2QgcGl4ZWwgY29vcmRpbmF0ZSBaRVJPIHBvaW50XG4gKi9cbnAubWF0cml4ID0gbnVsbDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltBYnN0cmFjdFByaW1pdGl2ZV1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RQcmltaXRpdmU7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQnJpY2tEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL0JyaWNrRGltZW5zaW9uJyk7XG52YXIgU2lkZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1NpZGVDb2xvcicpO1xudmFyIE1hdHJpeCA9IHJlcXVpcmUoJy4uL2dlb20vTWF0cml4Jyk7XG52YXIgQml0bWFwRGF0YSA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQml0bWFwRGF0YScpO1xudmFyIEFic3RyYWN0UHJpbWl0aXZlID0gcmVxdWlyZSgnLi9BYnN0cmFjdFByaW1pdGl2ZScpO1xuXG52YXIgQnJpY2ssIHA7XG5CcmljayA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gQnJpY2sucHJvdG90eXBlID0gbmV3IEFic3RyYWN0UHJpbWl0aXZlKCk7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyIHx8IGJvcmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgQnJpY2tEaW1lbnNpb24oKSA6IGRpbWVuc2lvbjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IG5ldyBTaWRlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gKHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXMpIC8gMjtcblxuICAgIC8vIDIyLjYgZGVncmVlcyBpbXBsZW1lbnRhdGlvblxuICAgIHRoaXMudyAtPSAyO1xuICAgIHRoaXMuaCAtPSAxO1xuXG4gICAgLy8gdGhlIG1hdHJpeCBvZmZzZXQgYmV0d2VlbiB0aGUgYml0bWFwIGFuZCB0aGUgM2QgcGl4ZWwgY29vcmRpbmF0ZSBaRVJPIHBvaW50XG4gICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0cml4KCk7XG4gICAgdGhpcy5tYXRyaXgudHggPSAtdGhpcy5kaW1lbnNpb24ueUF4aXMgKyAyO1xuICAgIHRoaXMubWF0cml4LnR5ID0gMDtcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4T2Zmc2V0SW5uZXIsIHlPZmZzZXRJbm5lciwgeE9mZnNldE91dCwgeU9mZnNldE91dCwgaSwgaiwgYm9yZGVyQ29sb3I7XG5cbiAgICB4T2Zmc2V0SW5uZXIgPSB0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDI7XG4gICAgeU9mZnNldElubmVyID0gMDtcbiAgICB4T2Zmc2V0T3V0ID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxO1xuICAgIHlPZmZzZXRPdXQgPSB0aGlzLmggLSAxO1xuICAgIGJvcmRlckNvbG9yID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlciA6IHRoaXMuY29sb3IuaW5uZXI7XG5cbiAgICAvL3ggYXhpc1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRpbWVuc2lvbi54QXhpczsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0SW5uZXIgKyBpLCB5T2Zmc2V0SW5uZXIgKyBNYXRoLmZsb29yKGkgLyAyKSwgYm9yZGVyQ29sb3IpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldE91dCAtIGksIHlPZmZzZXRPdXQgLSBNYXRoLmZsb29yKGkgLyAyKSwgYm9yZGVyQ29sb3IpO1xuICAgIH1cblxuICAgIC8veSBheGlzXG4gICAgZm9yIChqID0gMDsgaiA8IHRoaXMuZGltZW5zaW9uLnlBeGlzOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRJbm5lciArIDEgLSBqLCB5T2Zmc2V0SW5uZXIgKyBNYXRoLmZsb29yKGogLyAyKSwgYm9yZGVyQ29sb3IpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldE91dCAtIDEgKyBqLCB5T2Zmc2V0T3V0IC0gTWF0aC5mbG9vcihqIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICB9XG5cbiAgICAvL2ZpbGwgYW4gcGl4ZWwgZ3JhcGhpYyBlbmNsb3NlZFxuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwoTWF0aC5mbG9vcih0aGlzLncgLyAyKSwgTWF0aC5mbG9vcih0aGlzLmggLyAyKSwgdGhpcy5jb2xvci5pbm5lcik7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbQnJpY2tdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJyaWNrO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEN1YmVEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL0N1YmVEaW1lbnNpb24nKTtcbnZhciBCcmlja0RpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvQnJpY2tEaW1lbnNpb24nKTtcbnZhciBTaWRlWERpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2lkZVhEaW1lbnNpb24nKTtcbnZhciBTaWRlWURpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2lkZVlEaW1lbnNpb24nKTtcbnZhciBDdWJlQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvQ3ViZUNvbG9yJyk7XG52YXIgU2lkZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1NpZGVDb2xvcicpO1xudmFyIE1hdHJpeCA9IHJlcXVpcmUoJy4uL2dlb20vTWF0cml4Jyk7XG52YXIgUGl4ZWxPYmplY3QgPSByZXF1aXJlKCcuLi9kaXNwbGF5L1BpeGVsT2JqZWN0Jyk7XG52YXIgQml0bWFwRGF0YSA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQml0bWFwRGF0YScpO1xudmFyIEFic3RyYWN0UHJpbWl0aXZlID0gcmVxdWlyZSgnLi9BYnN0cmFjdFByaW1pdGl2ZScpO1xudmFyIEJyaWNrID0gcmVxdWlyZSgnLi9CcmljaycpO1xudmFyIFNpZGVYID0gcmVxdWlyZSgnLi9TaWRlWCcpO1xudmFyIFNpZGVZID0gcmVxdWlyZSgnLi9TaWRlWScpO1xuXG52YXIgQ3ViZSwgcDtcbkN1YmUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IEN1YmUucHJvdG90eXBlID0gbmV3IEFic3RyYWN0UHJpbWl0aXZlKCk7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyIHx8IGJvcmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgQ3ViZURpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IEN1YmVDb2xvcigpIDogY29sb3I7XG59O1xuXG5wLmluaXRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcztcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi56QXhpcyArICh0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzKSAvIDI7XG5cbiAgICAvLyAyMi42IGRlZ3JlZXMgaW1wbGVtZW50YXRpb25cbiAgICB0aGlzLncgLT0gMjtcbiAgICB0aGlzLmggLT0gMTtcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLXRoaXMuZGltZW5zaW9uLnlBeGlzICsgMjtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC10aGlzLmRpbWVuc2lvbi56QXhpcztcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5iaXRtYXBEYXRhLmNhbnZhcztcbn07XG5cbnAuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJyaWNrLCBzaWRlWCwgc2lkZVksIHBvX2JyaWNrLCBwb194LCBwb195LCBjdHgsIGJtZCwgb2Zmc2V0WCwgb2Zmc2V0WSxcbiAgICAgICAgaSwgaiwgaztcbiAgICAvLyBob3Jpem9udGFsIGxheWVyXG4gICAgYnJpY2sgPSBuZXcgQnJpY2soXG4gICAgICAgIG5ldyBCcmlja0RpbWVuc2lvbih0aGlzLmRpbWVuc2lvbi54QXhpcywgdGhpcy5kaW1lbnNpb24ueUF4aXMpLFxuICAgICAgICBuZXcgU2lkZUNvbG9yKHRoaXMuY29sb3IuYm9yZGVyLCB0aGlzLmNvbG9yLmhvcml6b250YWwpLFxuICAgICAgICB0aGlzLmJvcmRlclxuICAgICk7XG5cbiAgICAvLyBsZWZ0IHNpZGVcbiAgICBzaWRlWCA9IG5ldyBTaWRlWChcbiAgICAgICAgbmV3IFNpZGVYRGltZW5zaW9uKHRoaXMuZGltZW5zaW9uLnhBeGlzLCB0aGlzLmRpbWVuc2lvbi56QXhpcyksXG4gICAgICAgIG5ldyBTaWRlQ29sb3IodGhpcy5jb2xvci5ib3JkZXIsIHRoaXMuY29sb3IubGVmdCksXG4gICAgICAgIHRoaXMuYm9yZGVyXG4gICAgKTtcblxuICAgIC8vIHJpZ2h0IHNpZGVcbiAgICBzaWRlWSA9IG5ldyBTaWRlWShcbiAgICAgICAgbmV3IFNpZGVZRGltZW5zaW9uKHRoaXMuZGltZW5zaW9uLnlBeGlzLCB0aGlzLmRpbWVuc2lvbi56QXhpcyksXG4gICAgICAgIG5ldyBTaWRlQ29sb3IodGhpcy5jb2xvci5ib3JkZXIsIHRoaXMuY29sb3IucmlnaHQpLFxuICAgICAgICB0aGlzLmJvcmRlclxuICAgICk7XG5cbiAgICBwb19icmljayA9IG5ldyBQaXhlbE9iamVjdChicmljayk7XG4gICAgcG9feCA9IG5ldyBQaXhlbE9iamVjdChzaWRlWCk7XG4gICAgcG9feSA9IG5ldyBQaXhlbE9iamVjdChzaWRlWSk7XG5cbiAgICBjdHggPSB0aGlzLmJpdG1hcERhdGEuY29udGV4dDtcbiAgICBjdHguZHJhd0ltYWdlKHBvX2JyaWNrLmNhbnZhcywgcG9fYnJpY2sueCArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMiwgcG9fYnJpY2sueSk7XG4gICAgY3R4LmRyYXdJbWFnZShwb194LmNhbnZhcywgcG9feC54LCBwb194LnkgKyB0aGlzLmRpbWVuc2lvbi56QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMiAtIDEpO1xuICAgIGN0eC5kcmF3SW1hZ2UocG9feS5jYW52YXMsIHBvX3kueCArIHRoaXMudyAtIDIsIHBvX3gueSArIHRoaXMuZGltZW5zaW9uLnpBeGlzICsgdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyIC0gMSk7XG5cbiAgICAvLyBoaWdobGlnaHQgJiBoaWdobGlnaHQgZml4XG4gICAgYm1kID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgpO1xuXG4gICAgaWYgKHRoaXMuYm9yZGVyKSB7XG4gICAgICAgIG9mZnNldFggPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDI7XG4gICAgICAgIG9mZnNldFkgPSAodGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcykgLyAyIC0gMjtcblxuICAgICAgICAvL3RoZSAycHggaW4gYm91bmRpbmcgd2l0aG91dCBoaWdodGxpZ2h0XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDI7IGkgKz0gMSkge1xuICAgICAgICAgICAgYm1kLnNldFBpeGVsKG9mZnNldFggKyAxIC0gaSwgb2Zmc2V0WSAtIE1hdGguZmxvb3IoaSAvIDIpLCB0aGlzLmNvbG9yLmJvcmRlckhpZ2hsaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3RoZSAycHggaW4gYm91bmRpbmcgd2l0aG91dCBoaWdodGxpZ2h0XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDI7IGogKz0gMSkge1xuICAgICAgICAgICAgYm1kLnNldFBpeGVsKG9mZnNldFggKyBqLCBvZmZzZXRZIC0gTWF0aC5mbG9vcihqIC8gMiksIHRoaXMuY29sb3IuYm9yZGVySGlnaGxpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB0aGlzLmRpbWVuc2lvbi56QXhpczsgayArPSAxKSB7XG4gICAgICAgICAgICBibWQuc2V0UGl4ZWwob2Zmc2V0WCwgb2Zmc2V0WSArIGssIHRoaXMuY29sb3IuYm9yZGVySGlnaGxpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRpbWVuc2lvbi56QXhpczsgaSArPSAxKSB7XG4gICAgICAgICAgICBibWQuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyLCAodGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcykgLyAyIC0gMSArIGksIHRoaXMuY29sb3IubGVmdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYm1kLmNvbnRleHQucHV0SW1hZ2VEYXRhKGJtZC5pbWFnZURhdGEsIDAsIDApO1xuICAgIGN0eC5kcmF3SW1hZ2UoYm1kLmNhbnZhcywgMCwgMCk7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbQ3ViZV1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZTtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQeXJhbWlkRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9QeXJhbWlkRGltZW5zaW9uJyk7XG52YXIgUHlyYW1pZENvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1B5cmFtaWRDb2xvcicpO1xudmFyIE1hdHJpeCA9IHJlcXVpcmUoJy4uL2dlb20vTWF0cml4Jyk7XG52YXIgQml0bWFwRGF0YSA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQml0bWFwRGF0YScpO1xudmFyIEFic3RyYWN0UHJpbWl0aXZlID0gcmVxdWlyZSgnLi9BYnN0cmFjdFByaW1pdGl2ZScpO1xuXG52YXIgUHlyYW1pZCwgcDtcblB5cmFtaWQgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IFB5cmFtaWQucHJvdG90eXBlID0gbmV3IEFic3RyYWN0UHJpbWl0aXZlKCk7XG5cbi8vIHByaXZhdGUgcHJvcGVydGllc1xucC5oU2l6ZSA9IG51bGw7XG5wLmhPZmZzZXQgPSBudWxsO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IFB5cmFtaWREaW1lbnNpb24oKSA6IGRpbWVuc2lvbjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IG5ldyBQeXJhbWlkQ29sb3IoKSA6IGNvbG9yO1xuXG4gICAgdGhpcy5oU2l6ZSA9IHRoaXMuZGltZW5zaW9uLnRhbGwgPyB0aGlzLmRpbWVuc2lvbi54QXhpcyAqIDIgOiB0aGlzLmRpbWVuc2lvbi54QXhpcztcbiAgICB0aGlzLmhPZmZzZXQgPSB0aGlzLmRpbWVuc2lvbi50YWxsID8gLTMgOiAtMjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzO1xuICAgIHRoaXMuaCA9IHRoaXMuaFNpemUgKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7XG5cbiAgICAvLyAyMi42IGRlZ3JlZXMgaW1wbGVtZW50YXRpb25cbiAgICB0aGlzLncgLT0gMjtcbiAgICB0aGlzLmggKz0gdGhpcy5oT2Zmc2V0O1xuXG4gICAgLy8gdGhlIG1hdHJpeCBvZmZzZXQgYmV0d2VlbiB0aGUgYml0bWFwIGFuZCB0aGUgM2QgcGl4ZWwgY29vcmRpbmF0ZSBaRVJPIHBvaW50XG4gICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0cml4KCk7XG4gICAgdGhpcy5tYXRyaXgudHggPSAtdGhpcy5kaW1lbnNpb24ueEF4aXMgKyAyO1xuICAgIHRoaXMubWF0cml4LnR5ID0gLXRoaXMuaFNpemUgLyAyICsgMiAtICh0aGlzLmRpbWVuc2lvbi50YWxsID8gdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyIDogMSk7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5iaXRtYXBEYXRhLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3Jib3JkZXJfbGVmdCwgY29sb3Jib3JkZXJfcmlnaHQsIGNvbG9yYm9yZGVyX2hpZ2hsaWdodCxcbiAgICAgICAgaSwgaiwgaywgbDEsIG0xLCBsMiwgbTI7XG5cbiAgICBjb2xvcmJvcmRlcl9sZWZ0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlciA6IHRoaXMuY29sb3IubGVmdDtcbiAgICBjb2xvcmJvcmRlcl9yaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLnJpZ2h0O1xuXG4gICAgY29sb3Jib3JkZXJfaGlnaGxpZ2h0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlckhpZ2hsaWdodCA6IGNvbG9yYm9yZGVyX2xlZnQ7XG5cbiAgICAvL3ogYXhpcyB8fCBoaWdodGxpZ2h0XG4gICAgZm9yIChrID0gMDsgayA8IHRoaXMuaFNpemUgKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgLSA0OyBrICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgayArIDMgKyB0aGlzLmhPZmZzZXQsIGNvbG9yYm9yZGVyX2hpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgLy94IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueEF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoaSwgdGhpcy5oU2l6ZSArIE1hdGguZmxvb3IoaSAvIDIpICsgdGhpcy5oT2Zmc2V0LCBjb2xvcmJvcmRlcl9sZWZ0KTtcbiAgICB9XG5cbiAgICAvL3kgYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi54QXhpczsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbChqICsgdGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyLCB0aGlzLmhTaXplICsgdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyIC0gTWF0aC5mbG9vcihqIC8gMikgLSAxICsgdGhpcy5oT2Zmc2V0LCBjb2xvcmJvcmRlcl9yaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRpbWVuc2lvbi50YWxsKSB7XG4gICAgICAgIC8vbGVmdCBlZGdlXG4gICAgICAgIGZvciAobDEgPSAwOyBsMSA8IHRoaXMuaFNpemU7IGwxICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbChsMSwgdGhpcy5oU2l6ZSAtIGwxICsgdGhpcy5oT2Zmc2V0LCBjb2xvcmJvcmRlcl9sZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcmlnaHQgZWRnZVxuICAgICAgICBmb3IgKG0xID0gMDsgbTEgPCB0aGlzLmhTaXplOyBtMSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwobTEgKyB0aGlzLmhTaXplIC0gMiwgbTEgKyAxICsgdGhpcy5oT2Zmc2V0LCBjb2xvcmJvcmRlcl9yaWdodCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvL2xlZnQgZWRnZVxuICAgICAgICBmb3IgKGwyID0gMDsgbDIgPCB0aGlzLmhTaXplIC0gMjsgbDIgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKE1hdGguZmxvb3IobDIgLyAyKSwgdGhpcy5oU2l6ZSAtIGwyICsgdGhpcy5oT2Zmc2V0LCBjb2xvcmJvcmRlcl9sZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcmlnaHQgZWRnZVxuICAgICAgICBmb3IgKG0yID0gMjsgbTIgPCB0aGlzLmhTaXplOyBtMiArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoTWF0aC5mbG9vcihtMiAvIDIpICsgdGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyLCBtMiArIDEgKyB0aGlzLmhPZmZzZXQsIGNvbG9yYm9yZGVyX3JpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5ib3JkZXIpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgdGhpcy5oU2l6ZSArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiAtIDEgKyB0aGlzLmhPZmZzZXQsIGNvbG9yYm9yZGVyX2xlZnQpO1xuICAgIH1cblxuICAgIC8vZmxvb2RmaWxsXG4gICAgdGhpcy5iaXRtYXBEYXRhLmZsb29kRmlsbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDEsIHRoaXMuaFNpemUgKyBNYXRoLmZsb29yKCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDEpIC8gMikgKyB0aGlzLmhPZmZzZXQgLSAxLCB0aGlzLmNvbG9yLnJpZ2h0KTtcbiAgICB0aGlzLmJpdG1hcERhdGEuZmxvb2RGaWxsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMywgdGhpcy5oU2l6ZSArIE1hdGguZmxvb3IoKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMSkgLyAyKSArIHRoaXMuaE9mZnNldCAtIDIsIHRoaXMuY29sb3IubGVmdCk7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbUHlyYW1pZF1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHlyYW1pZDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFNpZGVYRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9TaWRlWERpbWVuc2lvbicpO1xudmFyIFNpZGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TaWRlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcblxudmFyIFNpZGVYLCBwO1xuU2lkZVggPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IFNpZGVYLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IFNpZGVYRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgU2lkZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi54QXhpcztcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi56QXhpcyArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMjtcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gMDtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC10aGlzLmRpbWVuc2lvbi56QXhpcztcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4T2Zmc2V0SW5uZXIsIHlPZmZzZXRJbm5lciwgeE9mZnNldE91dCwgeU9mZnNldE91dCwgaSwgaiwgYm9yZGVyQ29sb3I7XG5cbiAgICB4T2Zmc2V0SW5uZXIgPSAwO1xuICAgIHlPZmZzZXRJbm5lciA9IHRoaXMuZGltZW5zaW9uLnpBeGlzO1xuICAgIHhPZmZzZXRPdXQgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDE7XG4gICAgeU9mZnNldE91dCA9IHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnpBeGlzIC0gMTtcbiAgICBib3JkZXJDb2xvciA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmlubmVyO1xuXG4gICAgLy94IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueEF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldElubmVyICsgaSwgeU9mZnNldElubmVyICsgTWF0aC5mbG9vcihpIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRPdXQgLSBpLCB5T2Zmc2V0T3V0IC0gTWF0aC5mbG9vcihpIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICB9XG5cbiAgICAvL3ogYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi56QXhpczsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0SW5uZXIsIHlPZmZzZXRJbm5lciAtIGosIGJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRPdXQsIHlPZmZzZXRPdXQgKyBqLCBib3JkZXJDb2xvcik7XG4gICAgfVxuXG4gICAgLy9maWxsIGFuIHBpeGVsIGdyYXBoaWMgZW5jbG9zZWRcbiAgICB0aGlzLmJpdG1hcERhdGEuZmxvb2RGaWxsKE1hdGguZmxvb3IodGhpcy53IC8gMiksIE1hdGguZmxvb3IodGhpcy5oIC8gMiksIHRoaXMuY29sb3IuaW5uZXIpO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1NpZGVYXVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlWDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTaWRlWURpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2lkZVlEaW1lbnNpb24nKTtcbnZhciBTaWRlQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvU2lkZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBTaWRlWSwgcDtcblNpZGVZID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTaWRlWS5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTaWRlWURpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNpZGVDb2xvcigpIDogY29sb3I7XG59O1xuXG5wLmluaXRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ID0gdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24uekF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDI7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC10aGlzLmRpbWVuc2lvbi55QXhpcyArIDI7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAtdGhpcy5kaW1lbnNpb24uekF4aXM7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5iaXRtYXBEYXRhLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeE9mZnNldElubmVyLCB5T2Zmc2V0SW5uZXIsIHhPZmZzZXRPdXQsIHlPZmZzZXRPdXQsIGksIGosIGJvcmRlckNvbG9yO1xuXG4gICAgeE9mZnNldElubmVyID0gMDtcbiAgICB5T2Zmc2V0SW5uZXIgPSB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi56QXhpcyAtIDE7XG4gICAgeE9mZnNldE91dCA9IHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMTtcbiAgICB5T2Zmc2V0T3V0ID0gdGhpcy5kaW1lbnNpb24uekF4aXM7XG4gICAgYm9yZGVyQ29sb3IgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5pbm5lcjtcblxuICAgIC8veSBheGlzXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnlBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRJbm5lciArIGksIHlPZmZzZXRJbm5lciAtIE1hdGguZmxvb3IoaSAvIDIpLCBib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0T3V0IC0gaSwgeU9mZnNldE91dCArIE1hdGguZmxvb3IoaSAvIDIpLCBib3JkZXJDb2xvcik7XG4gICAgfVxuXG4gICAgLy96IGF4aXNcbiAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb24uekF4aXM7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldElubmVyLCB5T2Zmc2V0SW5uZXIgKyBqLCBib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0T3V0LCB5T2Zmc2V0T3V0IC0gaiwgYm9yZGVyQ29sb3IpO1xuICAgIH1cblxuICAgIC8vZmlsbCBhbiBwaXhlbCBncmFwaGljIGVuY2xvc2VkXG4gICAgdGhpcy5iaXRtYXBEYXRhLmZsb29kRmlsbChNYXRoLmZsb29yKHRoaXMudyAvIDIpLCBNYXRoLmZsb29yKHRoaXMuaCAvIDIpLCB0aGlzLmNvbG9yLmlubmVyKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltTaWRlWV1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVk7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1Nsb3BlRGltZW5zaW9uJyk7XG52YXIgU2xvcGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TbG9wZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBTbG9wZUVhc3QsIHA7XG5TbG9wZUVhc3QgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IFNsb3BlRWFzdC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZURpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgKiAyICsgdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyO1xuXG4gICAgLy8gMjIuNiBkZWdyZWVzIGltcGxlbWVudGF0aW9uXG4gICAgdGhpcy53IC09IDI7XG4gICAgdGhpcy5oIC09IDM7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC0odGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyKTtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC0odGhpcy5kaW1lbnNpb24ueEF4aXMgKiAzIC8gMiAtIDIpO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhLmNvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuYml0bWFwRGF0YS5pbWFnZURhdGEsIDAsIDApO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5iaXRtYXBEYXRhLmNhbnZhcztcbn07XG5cbnAuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yQm9yZGVyTGVmdCwgY29sb3JCb3JkZXJSaWdodCxcbiAgICAgICAgaSwgaiwgaywgbSwgbjtcblxuICAgIGNvbG9yQm9yZGVyTGVmdCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmxlZnQ7XG4gICAgY29sb3JCb3JkZXJSaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLnJpZ2h0U2xvcGU7XG5cbiAgICAvLyB5IGF4aXNcbiAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoaiwgdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyIC0gTWF0aC5mbG9vcihqIC8gMikgLSAxLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKGogKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIHRoaXMuaCAtIE1hdGguZmxvb3IoaiAvIDIpIC0gMSwgY29sb3JCb3JkZXJSaWdodCk7XG4gICAgfVxuXG4gICAgLy8geCBheGlzXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKGksIHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiArIE1hdGguZmxvb3IoaSAvIDIpLCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8vIHogYXhpc1xuICAgIGZvciAoayA9IHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMiAtIDE7IGsgPCB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7IGsgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMCwgaywgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICB9XG5cbiAgICAvLyBzbG90XG4gICAgZm9yIChtID0gMDsgbSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzICogMiAtIDI7IG0gKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueUF4aXMgLSAxICsgTWF0aC5mbG9vcihtIC8gMiksIG0sIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMSArIE1hdGguZmxvb3IobSAvIDIpLCB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgKyBtIC0gMSwgY29sb3JCb3JkZXJSaWdodCk7XG4gICAgfVxuXG4gICAgLy8gZmxvb2QgZmlsbFxuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyLCAxLCB0aGlzLmNvbG9yLnJpZ2h0U2xvcGUpO1xuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAzLCB0aGlzLmggLSAzLCB0aGlzLmNvbG9yLmxlZnQpO1xuICAgIC8vIGhhY2sgc2luZ2xlIHBpeGVsXG4gICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgdGhpcy5oIC0gMiwgdGhpcy5jb2xvci5sZWZ0KTtcblxuICAgIC8vIGhpZ2hsaWdodFxuICAgIGlmICh0aGlzLmJvcmRlcikge1xuICAgICAgICBmb3IgKG4gPSAxOyBuIDwgdGhpcy5kaW1lbnNpb24ueEF4aXMgKiAyIC0gMzsgbiArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMSArIE1hdGguZmxvb3IobiAvIDIpLCB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgKyBuIC0gMSwgdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1Nsb3BlRWFzdF1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2xvcGVFYXN0O1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFNsb3BlRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9TbG9wZURpbWVuc2lvbicpO1xudmFyIFNsb3BlQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvU2xvcGVDb2xvcicpO1xudmFyIE1hdHJpeCA9IHJlcXVpcmUoJy4uL2dlb20vTWF0cml4Jyk7XG52YXIgQml0bWFwRGF0YSA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQml0bWFwRGF0YScpO1xudmFyIEFic3RyYWN0UHJpbWl0aXZlID0gcmVxdWlyZSgnLi9BYnN0cmFjdFByaW1pdGl2ZScpO1xudmFyIFNpZGVYID0gcmVxdWlyZSgnLi9TaWRlWCcpO1xudmFyIFNpZGVYRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9TaWRlWERpbWVuc2lvbicpO1xudmFyIFNpZGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TaWRlQ29sb3InKTtcbnZhciBQaXhlbE9iamVjdCA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvUGl4ZWxPYmplY3QnKTtcblxudmFyIFNsb3BlTm9ydGgsIHA7XG5TbG9wZU5vcnRoID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTbG9wZU5vcnRoLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgU2xvcGVDb2xvcigpIDogY29sb3I7XG59O1xuXG5wLmluaXRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcztcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi55QXhpcyAqIDMgLyAyICsgdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyO1xuXG4gICAgLy8gMjIuNiBkZWdyZWVzIGltcGxlbWVudGF0aW9uXG4gICAgdGhpcy53IC09IDI7XG4gICAgdGhpcy5oIC09IDM7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC0odGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyKTtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC0odGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyKTtcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5iaXRtYXBEYXRhLmNhbnZhcztcbn07XG5cbnAuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yQm9yZGVyTGVmdCwgY29sb3JCb3JkZXJSaWdodCwgY29sb3JCb3JkZXJIaWdobGlnaHQsXG4gICAgICAgIHNpZGVYLCBwb1gsIGN0eCwgYm1kLFxuICAgICAgICBpLCBqLCBuO1xuXG4gICAgY29sb3JCb3JkZXJMZWZ0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlciA6IHRoaXMuY29sb3IubGVmdDtcbiAgICBjb2xvckJvcmRlclJpZ2h0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlciA6IHRoaXMuY29sb3IucmlnaHQ7XG4gICAgY29sb3JCb3JkZXJIaWdobGlnaHQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVySGlnaGxpZ2h0IDogdGhpcy5jb2xvci5sZWZ0O1xuXG4gICAgc2lkZVggPSBuZXcgU2lkZVgoXG4gICAgICAgIG5ldyBTaWRlWERpbWVuc2lvbih0aGlzLmRpbWVuc2lvbi54QXhpcywgdGhpcy5oIC0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyKSxcbiAgICAgICAgbmV3IFNpZGVDb2xvcihjb2xvckJvcmRlckxlZnQsIHRoaXMuY29sb3IubGVmdClcbiAgICApO1xuXG4gICAgcG9YID0gbmV3IFBpeGVsT2JqZWN0KHNpZGVYKTtcblxuICAgIGN0eCA9IHRoaXMuYml0bWFwRGF0YS5jb250ZXh0O1xuICAgIGN0eC5kcmF3SW1hZ2UocG9YLmNhbnZhcywgcG9YLngsIHBvWC55ICsgdGhpcy5oIC0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyKTtcblxuICAgIGJtZCA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oKTtcblxuICAgIC8vIGNsb3NlIHRoZSBwYXRoIGZvciBmbG9vZGZpbGxcbiAgICBmb3IgKGkgPSB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi55QXhpcyAqIDMgLyAyICsgMjsgaSA8IHRoaXMuaDsgaSArPSAxKSB7XG4gICAgICAgIGJtZC5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDEsIGksIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgIH1cblxuICAgIC8vIHkgYXhpc1xuICAgIGZvciAoaiA9IDE7IGogPCB0aGlzLmRpbWVuc2lvbi55QXhpczsgaiArPSAxKSB7XG4gICAgICAgIGJtZC5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyArIGogLSAyLCB0aGlzLmggLSBNYXRoLmZsb29yKGogLyAyKSAtIDEsIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgICAgICBibWQuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgKyBqIC0gMiwgdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyIC0gMiArIGosIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgIH1cblxuICAgIC8vIGZsb29kIGZpbGxcbiAgICBibWQuZmxvb2RGaWxsKHRoaXMuZGltZW5zaW9uLnhBeGlzICsgMSwgdGhpcy5oIC0gMywgdGhpcy5jb2xvci5yaWdodCk7XG5cbiAgICAvL2hpZ2hsaWdodFxuICAgIGZvciAobiA9IHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMjsgbiA8IHRoaXMuaCAtIDE7IG4gKz0gMSkge1xuICAgICAgICBibWQuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxLCBuLCB0aGlzLmNvbG9yLnJpZ2h0KTtcbiAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgbiwgY29sb3JCb3JkZXJIaWdobGlnaHQpO1xuICAgIH1cblxuICAgIGJtZC5jb250ZXh0LnB1dEltYWdlRGF0YShibWQuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICBjdHguZHJhd0ltYWdlKGJtZC5jYW52YXMsIDAsIDApO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1Nsb3BlTm9ydGhdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsb3BlTm9ydGg7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1Nsb3BlRGltZW5zaW9uJyk7XG52YXIgU2xvcGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TbG9wZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBTbG9wZVNvdXRoLCBwO1xuU2xvcGVTb3V0aCA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gU2xvcGVTb3V0aC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZURpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyICsgdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAyO1xuXG4gICAgLy8gMjIuNiBkZWdyZWVzIGltcGxlbWVudGF0aW9uXG4gICAgdGhpcy53IC09IDI7XG4gICAgdGhpcy5oIC09IDM7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC0odGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyKTtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC0odGhpcy5kaW1lbnNpb24ueUF4aXMgKiAzIC8gMiAtIDIpO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhLmNvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuYml0bWFwRGF0YS5pbWFnZURhdGEsIDAsIDApO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5iaXRtYXBEYXRhLmNhbnZhcztcbn07XG5cbnAuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yQm9yZGVyTGVmdCwgY29sb3JCb3JkZXJSaWdodCxcbiAgICAgICAgaSwgaiwgaywgbSwgbjtcblxuICAgIGNvbG9yQm9yZGVyTGVmdCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmxlZnRTbG9wZTtcbiAgICBjb2xvckJvcmRlclJpZ2h0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlciA6IHRoaXMuY29sb3IucmlnaHQ7XG5cbiAgICAvLyB4IGF4aXNcbiAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb24ueEF4aXM7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoaiwgdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAyICsgTWF0aC5mbG9vcihqIC8gMikgLSAzLCBjb2xvckJvcmRlckxlZnQpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoaiArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMiwgTWF0aC5mbG9vcihqIC8gMiksIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgfVxuXG4gICAgLy8geSBheGlzXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnlBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiArIGksIHRoaXMuaCAtIE1hdGguZmxvb3IoaSAvIDIpIC0gMSwgY29sb3JCb3JkZXJSaWdodCk7XG4gICAgfVxuXG4gICAgLy8geiBheGlzXG4gICAgZm9yIChrID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyIC0gMTsgayA8IHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMjsgayArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh0aGlzLncgLSAxLCBrLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBzbG90XG4gICAgZm9yIChtID0gMDsgbSA8IHRoaXMuZGltZW5zaW9uLnlBeGlzICogMiAtIDI7IG0gKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoTWF0aC5mbG9vcihtIC8gMiksIHRoaXMuZGltZW5zaW9uLnlBeGlzICogMiAtIG0gLSAzLCBjb2xvckJvcmRlckxlZnQpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyICsgTWF0aC5mbG9vcihtIC8gMiksIHRoaXMuaCAtIG0gLSAxLCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8vIGZsb29kIGZpbGxcbiAgICB0aGlzLmJpdG1hcERhdGEuZmxvb2RGaWxsKHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMSwgMSwgdGhpcy5jb2xvci5sZWZ0U2xvcGUpO1xuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueEF4aXMsIHRoaXMuaCAtIDMsIHRoaXMuY29sb3IucmlnaHQpO1xuICAgIC8vIGhhY2sgc2luZ2xlIHBpeGVsXG4gICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMSwgdGhpcy5oIC0gMiwgdGhpcy5jb2xvci5yaWdodCk7XG5cbiAgICAvLyBoaWdobGlnaHRcbiAgICBpZiAodGhpcy5ib3JkZXIpIHtcbiAgICAgICAgZm9yIChuID0gMTsgbiA8IHRoaXMuZGltZW5zaW9uLnlBeGlzICogMiAtIDM7IG4gKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiArIE1hdGguZmxvb3IobiAvIDIpLCB0aGlzLmggLSBuIC0gMSwgdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW1Nsb3BlU291dGhdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsb3BlU291dGg7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1Nsb3BlRGltZW5zaW9uJyk7XG52YXIgU2xvcGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TbG9wZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG52YXIgU2lkZVkgPSByZXF1aXJlKCcuL1NpZGVZJyk7XG52YXIgU2lkZVlEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1NpZGVZRGltZW5zaW9uJyk7XG52YXIgU2lkZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1NpZGVDb2xvcicpO1xudmFyIFBpeGVsT2JqZWN0ID0gcmVxdWlyZSgnLi4vZGlzcGxheS9QaXhlbE9iamVjdCcpO1xuXG52YXIgU2xvcGVXZXN0LCBwO1xuU2xvcGVXZXN0ID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTbG9wZVdlc3QucHJvdG90eXBlID0gbmV3IEFic3RyYWN0UHJpbWl0aXZlKCk7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyIHx8IGJvcmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgU2xvcGVEaW1lbnNpb24oKSA6IGRpbWVuc2lvbjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzO1xuICAgIHRoaXMuaCA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICogMyAvIDIgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDI7XG5cbiAgICAvLyAyMi42IGRlZ3JlZXMgaW1wbGVtZW50YXRpb25cbiAgICB0aGlzLncgLT0gMjtcbiAgICB0aGlzLmggLT0gMztcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLSh0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDIpO1xuICAgIHRoaXMubWF0cml4LnR5ID0gLSh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIpO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3JCb3JkZXJMZWZ0LCBjb2xvckJvcmRlclJpZ2h0LCBjb2xvckJvcmRlckhpZ2hsaWdodCxcbiAgICAgICAgc2lkZVksIHBvWSwgY3R4LCBibWQsXG4gICAgICAgIGksIGosIG47XG5cbiAgICBjb2xvckJvcmRlckxlZnQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5sZWZ0O1xuICAgIGNvbG9yQm9yZGVyUmlnaHQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5yaWdodDtcbiAgICBjb2xvckJvcmRlckhpZ2hsaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQgOiB0aGlzLmNvbG9yLmxlZnQ7XG5cbiAgICBzaWRlWSA9IG5ldyBTaWRlWShcbiAgICAgICAgbmV3IFNpZGVZRGltZW5zaW9uKHRoaXMuZGltZW5zaW9uLnlBeGlzLCB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIpLFxuICAgICAgICBuZXcgU2lkZUNvbG9yKGNvbG9yQm9yZGVyUmlnaHQsIHRoaXMuY29sb3IucmlnaHQpXG4gICAgKTtcblxuICAgIHBvWSA9IG5ldyBQaXhlbE9iamVjdChzaWRlWSk7XG5cbiAgICBjdHggPSB0aGlzLmJpdG1hcERhdGEuY29udGV4dDtcbiAgICBjdHguZHJhd0ltYWdlKHBvWS5jYW52YXMsIHBvWS54ICsgdGhpcy53IC0gMiwgcG9ZLnkgKyB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIpO1xuXG4gICAgYm1kID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgpO1xuXG4gICAgLy8gY2xvc2UgdGhlIHBhdGggZm9yIGZsb29kZmlsbFxuICAgIGZvciAoaSA9IHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzICogMyAvIDIgKyAyOyBpIDwgdGhpcy5oOyBpICs9IDEpIHtcbiAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgaSwgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICB9XG5cbiAgICAvL3ggYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDE7IGogKz0gMSkge1xuICAgICAgICBibWQuc2V0UGl4ZWwoaiwgdGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgLSAzICsgTWF0aC5mbG9vcihqIC8gMiksIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIGJtZC5zZXRQaXhlbChqLCB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMiAtIDMgLSBqLCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8vIGZsb29kIGZpbGxcbiAgICBibWQuZmxvb2RGaWxsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMywgdGhpcy5oIC0gMywgdGhpcy5jb2xvci5sZWZ0KTtcblxuICAgIC8vaGlnaGxpZ2h0XG4gICAgZm9yIChuID0gdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyOyBuIDwgdGhpcy5oIC0gMTsgbiArPSAxKSB7XG4gICAgICAgIGJtZC5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIG4sIGNvbG9yQm9yZGVySGlnaGxpZ2h0KTtcbiAgICB9XG5cbiAgICBibWQuY29udGV4dC5wdXRJbWFnZURhdGEoYm1kLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgY3R4LmRyYXdJbWFnZShibWQuY2FudmFzLCAwLCAwKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltTbG9wZVdlc3RdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsb3BlV2VzdDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuLypnbG9iYWwgZG9jdW1lbnQ6dHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIENhbnZhc01hbmFnZXIsIHA7XG5DYW52YXNNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FudmFzTWFuYWdlciBpcyBhIHN0YXRpYyBDbGFzcywgY2Fubm90IGJlIGluc3RhbmNlZC4nKTtcbn07XG5wID0gQ2FudmFzTWFuYWdlcjtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAuZGVmYXVsdENhbnZhcyA9IG51bGw7XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldERlZmF1bHRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcC5kZWZhdWx0Q2FudmFzID0gcC5kZWZhdWx0Q2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJldHVybiBwLmRlZmF1bHRDYW52YXM7XG59O1xuXG5wLmdldE5ld0NhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltDYW52YXNNYW5hZ2VyXVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNNYW5hZ2VyO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIENhbnZhc1Rvb2wsIHA7XG5cbkNhbnZhc1Rvb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW52YXNUb29sIGlzIGEgc3RhdGljIENsYXNzLCBjYW5ub3QgYmUgaW5zdGFuY2VkLicpO1xufTtcbnAgPSBDYW52YXNUb29sO1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXRQaXhlbCA9IGZ1bmN0aW9uIChpbWFnZURhdGEsIHgsIHkpIHtcbiAgICB2YXIgZGF0YSwgaW5kZXgsIHIsIGcsIGI7XG5cbiAgICBkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XG4gICAgaW5kZXggPSAoeSAqIGltYWdlRGF0YS53aWR0aCArIHgpICogNDtcbiAgICByID0gZGF0YVtpbmRleF07XG4gICAgZyA9IGRhdGFbaW5kZXggKyAxXTtcbiAgICBiID0gZGF0YVtpbmRleCArIDJdO1xuXG4gICAgcmV0dXJuICgociA8PCAxNikgfCAoZyA8PCA4KSB8IGIpO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbQ2FudmFzVG9vbF1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzVG9vbDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDb2xvckdlb20sIHA7XG5cbkNvbG9yR2VvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbG9yR2VvbSBpcyBhIHN0YXRpYyBDbGFzcywgY2Fubm90IGJlIGluc3RhbmNlZC4nKTtcbn07XG5wID0gQ29sb3JHZW9tO1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXQzMiA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHJldHVybiBjb2xvciA8IDB4RkYwMDAwMDAgPyAoY29sb3IgKyAweEZGMDAwMDAwKSA6IGNvbG9yO1xufTtcblxucC5hcHBseUJyaWdodG5lc3MgPSBmdW5jdGlvbiAoY29sb3IsIGJyaWdodG5lc3MsIGhpZ2hsaWdodCkge1xuICAgIHZhciBhLCByLCBnLCBiLCB5LCB2LCB1O1xuXG4gICAgYSA9ICgoY29sb3IgPj4+IDI0KSAmIDB4MDAwMDAwRkYpO1xuICAgIHIgPSAoKGNvbG9yID4+PiAxNikgJiAweDAwMDAwMEZGKTtcbiAgICBnID0gKChjb2xvciA+Pj4gOCkgJiAweDAwMDAwMEZGKTtcbiAgICBiID0gKGNvbG9yICYgMHgwMDAwMDBGRik7XG5cbiAgICB5ID0gKChyICogMzEzNTI0KSA+PiAyMCkgKyAoKGcgKiA2MTU1MTQpID4+IDIwKSArICgoYiAqIDExOTUzOCkgPj4gMjApO1xuICAgIHUgPSAtKCgxNTUxODkgKiByKSA+PiAyMCkgLSAoKDMwMzAzOCAqIGcpID4+IDIwKSArICgoNDU4MjI3ICogYikgPj4gMjApO1xuICAgIHYgPSAoKDY0NDg3NCAqIHIpID4+IDIwKSAtICgoNTQwMDE2ICogZykgPj4gMjApIC0gKCgxMDQ4NTcgKiBiKSA+PiAyMCk7XG5cbiAgICBpZiAoIWhpZ2hsaWdodCkge1xuICAgICAgICB5ICs9IGJyaWdodG5lc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgeSA9IDYwICsgTWF0aC5wb3coeSwgMS4yKTtcbiAgICB9XG5cbiAgICByID0geSArICgoMTE5NTM3NiAqIHYpID4+IDIwKTtcbiAgICBnID0geSAtICgoNDA4OTQ0ICogdSkgPj4gMjApIC0gKCg2MDgxNzQgKiB2KSA+PiAyMCk7XG4gICAgYiA9IHkgKyAoKDIxMjg2MDkgKiB1KSA+PiAyMCk7XG5cbiAgICByID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ociwgMjU1KSk7XG4gICAgZyA9IE1hdGgubWF4KDAsIE1hdGgubWluKGcsIDI1NSkpO1xuICAgIGIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihiLCAyNTUpKTtcblxuICAgIHJldHVybiAoYSA8PCAyNCkgfCAociA8PCAxNikgfCAoZyA8PCA4KSB8IGI7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltDb2xvckdlb21dXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yR2VvbTtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDb2xvclBhdHRlcm4sIHA7XG5cbkNvbG9yUGF0dGVybiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbG9yUGF0dGVybiBpcyBhIHN0YXRpYyBDbGFzcywgY2Fubm90IGJlIGluc3RhbmNlZC4nKTtcbn07XG5wID0gQ29sb3JQYXR0ZXJuO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xucC5HUkFTU19HUkVFTiA9IDB4Q0NGRjAwO1xucC5ZRUxMT1cgPSAweEZGRkYwMDtcbnAuV0lORV9SRUQgPSAweEZGMDA5OTtcbnAuUElOSyA9IDB4RkY3Q0JGO1xucC5QVVJQTEUgPSAweENDMDBGRjtcbnAuQkxVRSA9IDB4MDBDQ0ZGO1xucC5HUkFZID0gMHhFRUVFRUU7XG5wLkJMQUNLID0gMHg2NjY2NjY7XG5wLkZJTkVfQ09MT1JTID1cbiAgICBbXG4gICAgICAgIHAuR1JBU1NfR1JFRU4sXG4gICAgICAgIHAuWUVMTE9XLFxuICAgICAgICBwLldJTkVfUkVELFxuICAgICAgICBwLlBJTkssXG4gICAgICAgIHAuUFVSUExFLFxuICAgICAgICBwLkJMVUUsXG4gICAgICAgIHAuR1JBWSxcbiAgICAgICAgcC5CTEFDS1xuICAgIF07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldFJhbmRvbUNvbWZvcnRhYmxlQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHAuRklORV9DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcC5GSU5FX0NPTE9SUy5sZW5ndGgpXTtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW0NvbG9yUGF0dGVybl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3JQYXR0ZXJuO1xuIl19
