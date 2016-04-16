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
    return '[ColorPattern]';
};

module.exports = ColorPattern;
