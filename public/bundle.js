/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addNewItem.ts":
/*!***************************!*\
  !*** ./src/addNewItem.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNew": () => (/* binding */ AddNew)
/* harmony export */ });
function AddNewItem() {
    ;
    var oldItems = JSON.parse(window.localStorage.getItem('objectItems'));
    if (oldItems == null) {
        window.localStorage.setItem("objectItems", JSON.stringify(window.objectItems));
    }
    var file = document.getElementById("upload");
    var select = document.getElementById('selectId');
    select = select.options[select.selectedIndex].value;
    var item = {
        name: document.getElementById("nameId").value,
        description: document.getElementById("DescrId").value,
        id: oldItems.length,
        temp: select,
        status: 0,
        imageUrl: "../image/" + file.files[0].name,
        category: 0
    };
    if (item.temp == "Watches") {
        item.category = 1;
    }
    if (item.temp == "Mobile phones") {
        item.category = 2;
    }
    if (item.temp == "Audio") {
        item.category = 3;
    }
    if (item.temp == "Game gadgets") {
        item.category = 4;
    }
    oldItems.push({
        category: item.category,
        id: item.id,
        name: item.name,
        description: item.description,
        imageUrl: item.imageUrl,
        status: item.status,
        temp: item.temp
    });
    window.localStorage.removeItem("objectItems");
    window.localStorage.setItem('objectItems', JSON.stringify(oldItems));
}
var AddNew = function () {
    AddNewItem();
};



/***/ }),

/***/ "./src/addToLocalStorage.ts":
/*!**********************************!*\
  !*** ./src/addToLocalStorage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectItems": () => (/* binding */ objectItems)
/* harmony export */ });
var objectItems = [
    {
        category: 1,
        id: 0,
        name: "watches",
        description: "some text",
        imageUrl: "../image/watches1.jpg",
        status: 0,
        temp: "Watches"
    },
    {
        category: 1,
        id: 1,
        name: "watches",
        description: "some text2",
        imageUrl: "../image/watches2.jpg",
        status: 0,
        temp: "Watches"
    },
    {
        category: 2,
        id: 2,
        name: "Mobile phones",
        description: "some text3",
        imageUrl: "../image/pixel.jpg",
        status: 0,
        temp: "Mobile phones"
    },
    {
        category: 3,
        id: 3,
        name: "Audio",
        description: "some text4",
        imageUrl: "../image/audio.jpg",
        status: 0,
        temp: "Audio"
    },
    {
        category: 4,
        id: 4,
        name: "Game gadget",
        description: "some text4",
        imageUrl: "../image/game.jpg",
        status: 0,
        temp: "Game gadget"
    }
];



/***/ }),

/***/ "./src/buttonBuyClick.ts":
/*!*******************************!*\
  !*** ./src/buttonBuyClick.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickToBuy": () => (/* binding */ clickToBuy)
/* harmony export */ });
var clickToBuy = function () {
    ChangeColor();
    ChangeInnerText();
};
function ChangeColor() {
    var event;
    document.getElementById(event.srcElement.id).style.backgroundColor = "black";
}
function ChangeInnerText() {
    var event;
    document.getElementById(event.srcElement.id).innerHTML = "Added";
}



/***/ }),

/***/ "./src/displayGoods.ts":
/*!*****************************!*\
  !*** ./src/displayGoods.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowGoods": () => (/* binding */ ShowGoods)
/* harmony export */ });
;
function DivShow() {
    var _a;
    var goods = JSON.parse(window.localStorage.getItem('objectItems'));
    if (goods == null) {
        window.localStorage.setItem("objectItems", JSON.stringify(window.objectItems));
        goods = JSON.parse(window.localStorage.getItem('objectItems'));
    }
    for (var x = 0; x < goods.length; x++) {
        var div = document.createElement('div');
        div.className = 'container__item container__item--busketImage';
        div.innerHTML = " \n        <div class=\"container__item container__item--image\">\n            <img width=\"200\" height=\"200\" src=\"".concat(goods[x].imageUrl, "\" alt=\"watch\"/>\n        </div>\n        <label id =\"").concat(goods[x].id, "\" class=\"container__item container__item--category\" >Category:").concat(goods[x].category, "</label>\n        <label class=\"container__item container__item--para\" >Name:").concat(goods[x].name, "</label>\n        <label class=\"container__item container__item--para\" >Description:").concat(goods[x].description, "</label>\n        <button type=\"button\" id=\"clickBuy").concat(goods[x].id, "\" class=\"container__item container__item--buttonBuy\" onclick=\"clickToBuy()\">Buy</button>\n        ");
        (_a = document.getElementById('contentGood')) === null || _a === void 0 ? void 0 : _a.appendChild(div);
    }
}
var ShowGoods = function () {
    //document.addEventListener("DOMContentLoaded", DivShow);  
    DivShow();
};



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addNewItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNewItem */ "./src/addNewItem.ts");
/* harmony import */ var _addToLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToLocalStorage */ "./src/addToLocalStorage.ts");
/* harmony import */ var _buttonBuyClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonBuyClick */ "./src/buttonBuyClick.ts");
/* harmony import */ var _displayGoods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayGoods */ "./src/displayGoods.ts");




var openNav = function () {
    document.getElementById("mySidenav").style.width = "250px";
};
var closeNav = function () {
    document.getElementById("mySidenav").style.width = "0";
};
window.openNav = openNav;
window.closeNav = closeNav;
window.AddNew = _addNewItem__WEBPACK_IMPORTED_MODULE_0__.AddNew;
window.objectItems = _addToLocalStorage__WEBPACK_IMPORTED_MODULE_1__.objectItems;
window.clickToBuy = _buttonBuyClick__WEBPACK_IMPORTED_MODULE_2__.clickToBuy;
window.ShowGoods = _displayGoods__WEBPACK_IMPORTED_MODULE_3__.ShowGoods;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sU0FBUyxHQUFHO0lBRWQsMkRBQTJEO0lBQzNELE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQUVrQjs7Ozs7OztVQzdDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNVO0FBQ0o7QUFDSDtBQUUxQyxJQUFNLE9BQU8sR0FBRztJQUVNLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUU7QUFDbkYsQ0FBQztBQUVDLElBQU0sUUFBUSxHQUFHO0lBQ0ksUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUM5RSxDQUFDO0FBRUMsTUFBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDakMsTUFBYyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDbkMsTUFBYyxDQUFDLE1BQU0sR0FBRywrQ0FBTSxDQUFDO0FBQy9CLE1BQWMsQ0FBQyxXQUFXLEdBQUcsMkRBQVcsQ0FBQztBQUN6QyxNQUFjLENBQUMsVUFBVSxHQUFHLHVEQUFVLENBQUM7QUFDdkMsTUFBYyxDQUFDLFNBQVMsR0FBRyxvREFBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmR3aXRobGVzcy8uL3NyYy9hZGROZXdJdGVtLnRzIiwid2VicGFjazovL2Zyb250ZW5kd2l0aGxlc3MvLi9zcmMvYWRkVG9Mb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmR3aXRobGVzcy8uL3NyYy9idXR0b25CdXlDbGljay50cyIsIndlYnBhY2s6Ly9mcm9udGVuZHdpdGhsZXNzLy4vc3JjL2Rpc3BsYXlHb29kcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZHdpdGhsZXNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kd2l0aGxlc3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kd2l0aGxlc3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZHdpdGhsZXNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmR3aXRobGVzcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gQWRkTmV3SXRlbSgpe1xyXG5cclxuICAgaW50ZXJmYWNlIEl0ZW0ge1xyXG4gICAgICBuYW1lIDogc3RyaW5nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgICBpZDogbnVtYmVyLFxyXG4gICAgICB0ZW1wOiBzdHJpbmcsXHJcbiAgICAgIHN0YXR1cyA6IDAsXHJcbiAgICAgIGltYWdlVXJsIDogc3RyaW5nLFxyXG4gICAgICBjYXRlZ29yeSA6IG51bWJlclxyXG4gICB9OyAgXHJcbiAgICAgICAgIHZhciBvbGRJdGVtcyA6IEFycmF5PEl0ZW0+ID0gSlNPTi5wYXJzZSgod2luZG93IGFzIGFueSkubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29iamVjdEl0ZW1zJykpO1xyXG5cclxuICAgICAgICAgaWYob2xkSXRlbXMgPT0gbnVsbClcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvYmplY3RJdGVtc1wiLCBKU09OLnN0cmluZ2lmeSgod2luZG93IGFzIGFueSkub2JqZWN0SXRlbXMpKTtcclxuICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgdmFyIGZpbGUgOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZFwiKTtcclxuICAgICAgICAgdmFyIHNlbGVjdCA6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RJZCcpO1xyXG4gICAgICAgICBzZWxlY3QgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWVcclxuICAgICAgICAgXHJcbiAgICAgIGxldCBpdGVtIDogSXRlbSA9IHtcclxuICAgICAgbmFtZSA6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVJZFwiKSkudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uIDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGVzY3JJZFwiKSkudmFsdWUsXHJcbiAgICAgIGlkIDogb2xkSXRlbXMubGVuZ3RoLFxyXG4gICAgICB0ZW1wIDogc2VsZWN0LFxyXG4gICAgICBzdGF0dXMgOiAwLFxyXG4gICAgICBpbWFnZVVybCA6IFwiLi4vaW1hZ2UvXCIgKyBmaWxlLmZpbGVzWzBdLm5hbWUsXHJcbiAgICAgIGNhdGVnb3J5IDogMFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKGl0ZW0udGVtcCA9PSBcIldhdGNoZXNcIilcclxuICAgICAge1xyXG4gICAgICAgICBpdGVtLmNhdGVnb3J5ID0gMVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLnRlbXAgPT0gXCJNb2JpbGUgcGhvbmVzXCIpXHJcbiAgICAgIHtcclxuICAgICAgICAgaXRlbS5jYXRlZ29yeSA9IDJcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS50ZW1wID09IFwiQXVkaW9cIilcclxuICAgICAge1xyXG4gICAgICAgICBpdGVtLmNhdGVnb3J5ID0gM1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLnRlbXAgPT0gXCJHYW1lIGdhZGdldHNcIilcclxuICAgICAge1xyXG4gICAgICAgICBpdGVtLmNhdGVnb3J5ID0gNFxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgICAgb2xkSXRlbXMucHVzaChcclxuICAgICAgICAge1xyXG4gICAgICAgICBjYXRlZ29yeSA6IGl0ZW0uY2F0ZWdvcnksXHJcbiAgICAgICAgIGlkIDogaXRlbS5pZCwgXHJcbiAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSwgXHJcbiAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLCBcclxuICAgICAgICAgaW1hZ2VVcmwgOiBpdGVtLmltYWdlVXJsLCBcclxuICAgICAgICAgc3RhdHVzOiBpdGVtLnN0YXR1cyxcclxuICAgICAgICAgdGVtcCA6IGl0ZW0udGVtcFxyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm9iamVjdEl0ZW1zXCIpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmplY3RJdGVtcycsIEpTT04uc3RyaW5naWZ5KG9sZEl0ZW1zKSk7XHJcbiAgIH1cclxuICAgICBcclxuICAgY29uc3QgQWRkTmV3ID0gKCkgPT57XHJcbiAgIFxyXG4gICAgICBBZGROZXdJdGVtKCk7XHJcbiAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IHtBZGROZXd9OyIsImNvbnN0IG9iamVjdEl0ZW1zID0gW1xyXG5cclxuICAgIHtcclxuIFxyXG4gICAgICAgY2F0ZWdvcnkgOiAxLFxyXG4gICAgICAgaWQgOiAwLFxyXG4gICAgICAgbmFtZSA6IFwid2F0Y2hlc1wiLFxyXG4gICAgICAgZGVzY3JpcHRpb24gOiBcInNvbWUgdGV4dFwiLFxyXG4gICAgICAgaW1hZ2VVcmwgOiBcIi4uL2ltYWdlL3dhdGNoZXMxLmpwZ1wiLFxyXG4gICAgICAgc3RhdHVzIDogMCxcclxuICAgICAgIHRlbXA6XCJXYXRjaGVzXCJcclxuICAgIH0sXHJcbiBcclxuICAgICAge1xyXG4gXHJcbiAgICAgICBjYXRlZ29yeSA6IDEsXHJcbiAgICAgICBpZCA6IDEsXHJcbiAgICAgICBuYW1lIDogXCJ3YXRjaGVzXCIsXHJcbiAgICAgICBkZXNjcmlwdGlvbiA6IFwic29tZSB0ZXh0MlwiLFxyXG4gICAgICAgaW1hZ2VVcmwgOiBcIi4uL2ltYWdlL3dhdGNoZXMyLmpwZ1wiLFxyXG4gICAgICAgc3RhdHVzIDogMCxcclxuICAgICAgIHRlbXA6XCJXYXRjaGVzXCJcclxuICAgIH0sXHJcbiBcclxuICAgICAge1xyXG4gXHJcbiAgICAgICAgY2F0ZWdvcnkgOiAyLFxyXG4gICAgICAgIGlkIDogMixcclxuICAgICAgICBuYW1lIDogXCJNb2JpbGUgcGhvbmVzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcInNvbWUgdGV4dDNcIixcclxuICAgICAgICBpbWFnZVVybCA6IFwiLi4vaW1hZ2UvcGl4ZWwuanBnXCIsXHJcbiAgICAgICAgc3RhdHVzIDogMCxcclxuICAgICAgICB0ZW1wIDogXCJNb2JpbGUgcGhvbmVzXCJcclxuICAgIH0sXHJcbiBcclxuICAgICAge1xyXG4gXHJcbiAgICAgICBjYXRlZ29yeSA6IDMsXHJcbiAgICAgICBpZCA6IDMsXHJcbiAgICAgICBuYW1lIDogXCJBdWRpb1wiLFxyXG4gICAgICAgZGVzY3JpcHRpb24gOiBcInNvbWUgdGV4dDRcIixcclxuICAgICAgIGltYWdlVXJsICA6IFwiLi4vaW1hZ2UvYXVkaW8uanBnXCIsXHJcbiAgICAgICBzdGF0dXMgOiAwLFxyXG4gICAgICAgdGVtcCA6IFwiQXVkaW9cIlxyXG4gICAgfSxcclxuIFxyXG4gICAge1xyXG4gXHJcbiAgICAgICBjYXRlZ29yeSA6IDQsXHJcbiAgICAgICBpZCA6IDQsXHJcbiAgICAgICBuYW1lIDogXCJHYW1lIGdhZGdldFwiLFxyXG4gICAgICAgZGVzY3JpcHRpb24gOiBcInNvbWUgdGV4dDRcIixcclxuICAgICAgIGltYWdlVXJsIDogXCIuLi9pbWFnZS9nYW1lLmpwZ1wiLFxyXG4gICAgICAgc3RhdHVzIDogMCxcclxuICAgICAgIHRlbXA6XCJHYW1lIGdhZGdldFwiXHJcbiAgICB9XHJcbiBdXHJcbiAgIFxyXG4gZXhwb3J0ICB7b2JqZWN0SXRlbXN9OyIsIlxyXG5jb25zdCBjbGlja1RvQnV5ID0gKCkgPT5cclxue1xyXG4gICAgQ2hhbmdlQ29sb3IoKTtcclxuICAgIENoYW5nZUlubmVyVGV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGFuZ2VDb2xvcigpIHtcclxuXHJcbiAgICB2YXIgZXZlbnQgOiBhbnk7XHJcbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQuc3JjRWxlbWVudC5pZCkpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhbmdlSW5uZXJUZXh0KCkge1xyXG4gICAgdmFyIGV2ZW50IDogYW55XHJcbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQuc3JjRWxlbWVudC5pZCkpLmlubmVySFRNTCA9IFwiQWRkZWRcIjtcclxufVxyXG5cclxuZXhwb3J0ICB7Y2xpY2tUb0J1eX07IiwiaW50ZXJmYWNlIEl0ZW0ge1xyXG4gICAgbmFtZSA6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgdGVtcDogc3RyaW5nLFxyXG4gICAgc3RhdHVzIDogMCxcclxuICAgIGltYWdlVXJsIDogc3RyaW5nLFxyXG4gICAgY2F0ZWdvcnkgOiBudW1iZXJcclxufTtcclxuXHJcbmZ1bmN0aW9uIERpdlNob3coKXtcclxuICAgIHZhciBnb29kcyA6IEFycmF5PEl0ZW0+ID0gSlNPTi5wYXJzZSgod2luZG93IGFzIGFueSkubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29iamVjdEl0ZW1zJykpO1xyXG5cclxuICAgIGlmKGdvb2RzID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib2JqZWN0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoKHdpbmRvdyBhcyBhbnkpLm9iamVjdEl0ZW1zKSk7XHJcbiAgICAgICAgZ29vZHMgPSAgSlNPTi5wYXJzZSgod2luZG93IGFzIGFueSkubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29iamVjdEl0ZW1zJykpO1xyXG4gICAgfSBcclxuXHJcbiAgICBmb3IobGV0IHggPSAwOyB4IDwgZ29vZHMubGVuZ3RoOyB4KyspXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdjb250YWluZXJfX2l0ZW0gY29udGFpbmVyX19pdGVtLS1idXNrZXRJbWFnZSc7XHJcbiAgICAgXHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lcl9faXRlbSBjb250YWluZXJfX2l0ZW0tLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiBzcmM9XCIke2dvb2RzW3hdLmltYWdlVXJsfVwiIGFsdD1cIndhdGNoXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxsYWJlbCBpZCA9XCIke2dvb2RzW3hdLmlkfVwiIGNsYXNzPVwiY29udGFpbmVyX19pdGVtIGNvbnRhaW5lcl9faXRlbS0tY2F0ZWdvcnlcIiA+Q2F0ZWdvcnk6JHtnb29kc1t4XS5jYXRlZ29yeX08L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lcl9faXRlbSBjb250YWluZXJfX2l0ZW0tLXBhcmFcIiA+TmFtZToke2dvb2RzW3hdLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJfX2l0ZW0gY29udGFpbmVyX19pdGVtLS1wYXJhXCIgPkRlc2NyaXB0aW9uOiR7Z29vZHNbeF0uZGVzY3JpcHRpb259PC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsaWNrQnV5JHtnb29kc1t4XS5pZH1cIiBjbGFzcz1cImNvbnRhaW5lcl9faXRlbSBjb250YWluZXJfX2l0ZW0tLWJ1dHRvbkJ1eVwiIG9uY2xpY2s9XCJjbGlja1RvQnV5KClcIj5CdXk8L2J1dHRvbj5cclxuICAgICAgICBgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnRHb29kJyk/LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5jb25zdCBTaG93R29vZHMgPSAoKSA9PlxyXG57ICAgXHJcbiAgICAvL2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIERpdlNob3cpOyAgXHJcbiAgICBEaXZTaG93KCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7U2hvd0dvb2RzfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIgIGltcG9ydCB7QWRkTmV3fSAgZnJvbSAnLi9hZGROZXdJdGVtJztcclxuICBpbXBvcnQge29iamVjdEl0ZW1zfSBmcm9tIFwiLi9hZGRUb0xvY2FsU3RvcmFnZVwiXHJcbiAgaW1wb3J0IHtjbGlja1RvQnV5fSBmcm9tIFwiLi9idXR0b25CdXlDbGlja1wiXHJcbiAgaW1wb3J0IHtTaG93R29vZHN9IGZyb20gXCIuL2Rpc3BsYXlHb29kc1wiXHJcblxyXG5jb25zdCBvcGVuTmF2ID0gKCkgPT4ge1xyXG5cclxuICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpKS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIiA7XHJcbn1cclxuXHJcbiAgY29uc3QgY2xvc2VOYXYgPSAoKSA9PiB7XHJcbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIikpLnN0eWxlLndpZHRoID0gXCIwXCI7XHJcbiB9XHJcbiBcclxuICAod2luZG93IGFzIGFueSkub3Blbk5hdiA9IG9wZW5OYXY7XHJcbiAgKHdpbmRvdyBhcyBhbnkpLmNsb3NlTmF2ID0gY2xvc2VOYXY7XHJcbiAgKHdpbmRvdyBhcyBhbnkpLkFkZE5ldyA9IEFkZE5ldztcclxuICAod2luZG93IGFzIGFueSkub2JqZWN0SXRlbXMgPSBvYmplY3RJdGVtcztcclxuICAod2luZG93IGFzIGFueSkuY2xpY2tUb0J1eSA9IGNsaWNrVG9CdXk7XHJcbiAgKHdpbmRvdyBhcyBhbnkpLlNob3dHb29kcyA9IFNob3dHb29kcztcclxuXHJcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9