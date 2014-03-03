var canvas = document.getElementById('canvas-demo');

var point = new obelisk.Point(500, 200);
var pixelView = new obelisk.PixelView(canvas, point);

function buildCube(xDimension, yDimension, zDimension, border) {
    var color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.GRASS_GREEN);
    var dimension = new obelisk.CubeDimension(xDimension, yDimension, zDimension);
    var cube = new obelisk.Cube(dimension, color, border);
    pixelView.clear();
    pixelView.renderObject(cube);
}

// control bar
var ControlBar = function () {
    this.xDimension = 80;
    this.yDimension = 120;
    this.zDimension = 50;
    this.border = true;
};

var con = new ControlBar();
var gui = new dat.GUI();

var conX = gui.add(con, 'xDimension', 6, 400).step(2);
conX.onChange(function (value) {
    buildCube(value, con.yDimension, con.zDimension, con.border);
});

var conY = gui.add(con, 'yDimension', 6, 400).step(2);
conY.onChange(function (value) {
    buildCube(con.xDimension, value, con.zDimension, con.border);
});

var conZ = gui.add(con, 'zDimension', 6, 400).step(2);
conZ.onChange(function (value) {
    buildCube(con.xDimension, con.yDimension, value, con.border);
});

var conBorder = gui.add(con, 'border');
conBorder.onChange(function (value) {
    buildCube(con.xDimension, con.yDimension, con.zDimension, value);
});

// build first one
buildCube(con.xDimension, con.yDimension, con.zDimension, con.border);
