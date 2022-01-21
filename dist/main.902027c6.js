// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var time = g('#time');
var now = new Date();
render(now);
var left = g('.left');
left.addEventListener('click', function () {
    render(new Date(now - 86400 * 1000 * 30));
});
var right = g('.right');
right.addEventListener('click', function () {
    render(new Date(now - 0 + 86400 * 1000 * 30));
});

function g(selector) {
    return document.querySelector(selector);
}
function gs(selector) {
    return document.querySelectorAll(selector);
}
function render(main) {
    now = main;
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    time.textContent = year + '年' + month + '月';

    var firstDayOfCurrentMonth = new Date(year, month - 1, 1);
    var weekdayOfFirstDayOfCurrentMonth = firstDayOfCurrentMonth.getDay();
    var lastDayOfNextMonth = new Date(new Date(year, month, 1) - 86400 * 1000);
    var dayOfLastDayOfNextMonth = lastDayOfNextMonth.getDate();
    var weekdayOfLastDayOfCurrentMonth = lastDayOfNextMonth.getDay();
    var numberOfMonth = dayOfLastDayOfNextMonth;

    var days = g('#days');
    days.innerHTML = "";
    for (var i = 1; i < weekdayOfFirstDayOfCurrentMonth; i++) {
        var li = document.createElement('li');
        var d = new Date(firstDayOfCurrentMonth - 86400 * 1000 * i);
        li.textContent = d.getDate();
        li.className = 'daysOfLastMonth';
        days.prepend(li);
    }
    for (var _i = 1; _i <= numberOfMonth; _i++) {
        var _li = document.createElement('li');
        _li.textContent = _i;
        if (_i === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear()) {
            _li.classList.add('today');
        }
        days.append(_li);
    }
    for (var _i2 = weekdayOfLastDayOfCurrentMonth + 1; _i2 <= 7; _i2++) {
        var delta = _i2 - weekdayOfLastDayOfCurrentMonth;
        var _li2 = document.createElement('li');
        var _d = new Date(lastDayOfNextMonth - 0 + 86400 * 1000 * delta);
        _li2.textContent = _d.getDate();
        _li2.className = 'daysOfLastMonth';
        days.append(_li2);
    }
}
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.902027c6.map