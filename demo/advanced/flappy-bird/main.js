// control bar
var ControlBar = function () {
    this.size = 20;
    this.snap = false;
};

var con = new ControlBar();
var gui = new dat.GUI();

var conSize = gui.add(con, 'size', 6, 40).step(2);
conSize.onChange(function () {
    draw();
});

var conSnap = gui.add(con, 'snap');
conSnap.onChange(function () {
    draw();
});

var WIDTH = 17;
var HEIGHT = 12;

var img = document.getElementById('animation');
var ctx = document.createElement('canvas').getContext("2d");
var canvas = document.getElementById('canvas-demo');

var stack = [];
var point = new obelisk.Point(400, 50);
var pixelView = new obelisk.PixelView(canvas, point);

function getPixel(data, x, y) {
    var index = (y * WIDTH + x) * 4;
    var r = data[index];
    var g = data[index + 1];
    var b = data[index + 2];
    return ((r << 16) | (g << 8) | b);
}

function draw() {
    var size = con.size;
    var snap = con.snap ? 2 : 0;
    stack = [];
    ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);
    var imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
    pixelView.clear();

    var color = new obelisk.SideColor().getByInnerColor(obelisk.ColorPattern.GRAY);
    var dimension = new obelisk.BrickDimension(size, size);
    var brick = new obelisk.Brick(dimension, color);
    for (var y = 0; y <= HEIGHT; y++) {
        for (var x = 0; x <= WIDTH; x++) {
            var p3d = new obelisk.Point3D(x * (size - snap), y * (size - snap), 0);
            pixelView.renderObject(brick, p3d)
        }
    }

    for (var y = 0; y < HEIGHT; y++) {
        for (var x = 0; x < WIDTH; x++) {
            var pixelColor = getPixel(imgData.data, x, y);
            if (pixelColor !== 0xFFFFFF) {
                var cube;
                var flag = false;
                for (var i in stack) {
                    if (stack[i][1] === pixelColor) {
                        cube = stack[i][0];
                        flag = true;
                        break;
                    }
                }

                if (!flag) {
                    var color = new obelisk.CubeColor().getByHorizontalColor(pixelColor);
                    var dimension = new obelisk.CubeDimension(size, size, size - 2);
                    cube = new obelisk.Cube(dimension, color, false);
                    stack.push([cube, pixelColor]);
                }
                var p3d = new obelisk.Point3D(x * (size - snap), y * (size - snap), 0);
                pixelView.renderObject(cube, p3d);
            }
        }
    }
}

draw();
