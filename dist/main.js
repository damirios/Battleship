/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factoryFunctions.js":
/*!*********************************!*\
  !*** ./src/factoryFunctions.js ***!
  \*********************************/
/***/ ((module) => {

const shipFactory = function(length, shipBlocks = []) {
    let ship = {};
    ship.length = length;
    ship.hitBlocks = shipBlocks;

    // fill hitBlocks property with falses, because these blocks does not hit initially
    for (let i = 0; i < length; i++) {
        ship.hitBlocks.push(false);
    }
    
    ship.hit = (position) => {
        if ( position < length ) {
            if ( ship.hitBlocks[position] == false ) {
                ship.hitBlocks[position] = true;
            }
        }
    }
    
    ship.isSunk = () => {
        let isSunk = true;
        for (let i = 0; i < ship.hitBlocks.length; i++) {
            if ( ship.hitBlocks[i] == false ) {
                isSunk = false;
                break;
            }
        }
        return isSunk;
    }

    return ship;
}

const gameboardFactory = function() {
    let gameboard = {};

    

    return gameboard;
}

// export {shipFactory, gameboardFactory}

module.exports = {shipFactory};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/factoryFunctions.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxXQUFXOztBQUVYLGtCQUFrQjs7Ozs7O1VDMUNsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3J5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoaXBGYWN0b3J5ID0gZnVuY3Rpb24obGVuZ3RoLCBzaGlwQmxvY2tzID0gW10pIHtcbiAgICBsZXQgc2hpcCA9IHt9O1xuICAgIHNoaXAubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHNoaXAuaGl0QmxvY2tzID0gc2hpcEJsb2NrcztcblxuICAgIC8vIGZpbGwgaGl0QmxvY2tzIHByb3BlcnR5IHdpdGggZmFsc2VzLCBiZWNhdXNlIHRoZXNlIGJsb2NrcyBkb2VzIG5vdCBoaXQgaW5pdGlhbGx5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzaGlwLmhpdEJsb2Nrcy5wdXNoKGZhbHNlKTtcbiAgICB9XG4gICAgXG4gICAgc2hpcC5oaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICAgICAgaWYgKCBwb3NpdGlvbiA8IGxlbmd0aCApIHtcbiAgICAgICAgICAgIGlmICggc2hpcC5oaXRCbG9ja3NbcG9zaXRpb25dID09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIHNoaXAuaGl0QmxvY2tzW3Bvc2l0aW9uXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2hpcC5pc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGxldCBpc1N1bmsgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaGl0QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIHNoaXAuaGl0QmxvY2tzW2ldID09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIGlzU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1N1bms7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaXA7XG59XG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZ2FtZWJvYXJkID0ge307XG5cbiAgICBcblxuICAgIHJldHVybiBnYW1lYm9hcmQ7XG59XG5cbi8vIGV4cG9ydCB7c2hpcEZhY3RvcnksIGdhbWVib2FyZEZhY3Rvcnl9XG5cbm1vZHVsZS5leHBvcnRzID0ge3NoaXBGYWN0b3J5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZmFjdG9yeUZ1bmN0aW9ucy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==