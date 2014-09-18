var vm = require('vm');
var path = require('path');
var readFileSync = require('fs').readFileSync;

module.exports = function (Canvas) {
  // shim of document.createElement
  var document = {};

  document.createElement = function () {
    var canvas = new Canvas(50,50);

    canvas.setAttribute = function () {};

    return canvas;
  };

  var browserContext = vm.createContext({
    window: {},
    document: document,
    console: console,
    obelisk: {}
  });


  var content = readFileSync(path.join(__dirname, '..', 'build', 'obelisk.js'));

  vm.runInContext(content, browserContext);

  var windowObelisk = browserContext.window.obelisk;

  // Move elements created under window.obelisk to obelisk object
  Object.keys(windowObelisk).forEach(function (windowObeliskKey) {
    var value = windowObelisk[windowObeliskKey];

    browserContext.obelisk[windowObeliskKey] = value;
  });

  return browserContext.obelisk;

};
