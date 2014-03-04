var WIDTH = 64;
var HEIGHT = 28;

var img = document.getElementById('animation');
var ctx = document.createElement('canvas').getContext("2d");
var canvas = document.getElementById('canvas-uncle');

var stack = [];
var size = 8;
var point = new obelisk.Point(50, 120);
var pixelView = new obelisk.PixelView(canvas, point);

function draw() {
    ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);
    var imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
    pixelView.clear();
    for (var y = HEIGHT - 1; y >= 0; y--) {
        for (var x = 0; x < WIDTH - 1; x++) {
            var pixelColor = obelisk.CanvasTool.getPixel(imgData, x, y);
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
                    var fixedColor = obelisk.ColorGeom.applyBrightness(pixelColor, 50)
                    var color = new obelisk.CubeColor().getByHorizontalColor(fixedColor);
                    var dimension = new obelisk.CubeDimension(size, size + 2, size);
                    cube = new obelisk.Cube(dimension, color, false);
                    stack.push([cube, pixelColor]);
                }
                var p3d = new obelisk.Point3D(x * (size - 2), 0, (HEIGHT - 1 - y) * (size));
                pixelView.renderObject(cube, p3d);
            }
        }
    }
}
// render interval
window.setInterval(draw, 50);

// build floor
var canvasFloor = document.getElementById('canvas-floor');
var pixelViewFloor = new obelisk.PixelView(canvasFloor, point);
var floorDimension = new obelisk.CubeDimension((size - 2) * (WIDTH + 2), (size - 2) * 9, size);
var floor = new obelisk.Cube(floorDimension, new obelisk.CubeColor(), false);
pixelViewFloor.renderObject(floor, new obelisk.Point3D(-20, -30, 0));
