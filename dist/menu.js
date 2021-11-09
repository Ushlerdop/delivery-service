/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n\r\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWtDO0FBQ0E7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUk7QUFDSix5REFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5LXNlcnZpY2UvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aFwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIjtcclxuaW1wb3J0IGNhcnQgZnJvbSBcIi4vbW9kdWxlcy9jYXJ0XCI7XHJcblxyXG5hdXRoKCk7XHJcbm1lbnUoKTtcclxuY2FydCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const $modalAuth = document.querySelector('.modal-auth');\r\n    const $buttonAuth = document.querySelector('.button-auth');\r\n    const $closeAuth = document.querySelector('.close-auth');\r\n    const $logInForm = document.getElementById('logInForm');\r\n    const $inputLogin = document.getElementById('login');\r\n    const $inputPassword = document.getElementById('password');\r\n    const $buttonOut = document.querySelector('.button-out');\r\n    const $userName = document.querySelector('.user-name');\r\n    const $buttonCart = document.querySelector('.button-cart');\r\n\r\n    const login = (user) => {\r\n        localStorage.setItem('user', JSON.stringify(user));\r\n        $buttonAuth.style.display = 'none';\r\n        $buttonOut.style.display = 'flex';\r\n        $buttonCart.style.display = 'flex';\r\n        $userName.style.display = 'flex';\r\n        $userName.textContent = user.login;\r\n        $modalAuth.style.display = 'none';\r\n    }\r\n\r\n    const logout = () => {\r\n        $buttonAuth.style.display = 'flex';\r\n        $buttonOut.style.display = 'none';\r\n        $buttonCart.style.display = 'none';\r\n        $userName.style.display = 'none';\r\n        $userName.textContent = '';\r\n        localStorage.removeItem('user');\r\n    }\r\n\r\n    $buttonAuth.addEventListener('click', () => {\r\n        $modalAuth.style.display = 'flex';\r\n    })\r\n\r\n    $buttonOut.addEventListener('click', () => {\r\n        logout();\r\n    })\r\n\r\n    $closeAuth.addEventListener('click', () => {\r\n        $modalAuth.style.display = 'none';\r\n    })\r\n\r\n    $logInForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        $inputLogin.value = $inputLogin.value.trim();\r\n        if ($inputLogin.value == '') {\r\n            alert('Введите имя');\r\n        } else {\r\n            const user = {\r\n                login: $inputLogin.value.trim(),\r\n                password: $inputPassword.value.trim(),\r\n            }\r\n            login(user);\r\n        }\r\n    })\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5LXNlcnZpY2UvLi9zcmMvbW9kdWxlcy9hdXRoLmpzP2U3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRtb2RhbEF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXV0aCcpO1xyXG4gICAgY29uc3QgJGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKTtcclxuICAgIGNvbnN0ICRjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpO1xyXG4gICAgY29uc3QgJGxvZ0luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dJbkZvcm0nKTtcclxuICAgIGNvbnN0ICRpbnB1dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJyk7XHJcbiAgICBjb25zdCAkaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG4gICAgY29uc3QgJGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3V0Jyk7XHJcbiAgICBjb25zdCAkdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk7XHJcbiAgICBjb25zdCAkYnV0dG9uQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2FydCcpO1xyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICAkYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICRidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAkYnV0dG9uQ2FydC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICR1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICR1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW47XHJcbiAgICAgICAgJG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICAkYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICRidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAkYnV0dG9uQ2FydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICR1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICR1c2VyTmFtZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSlcclxuXHJcbiAgICAkYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvZ291dCgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pXHJcblxyXG4gICAgJGxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkaW5wdXRMb2dpbi52YWx1ZSA9ICRpbnB1dExvZ2luLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAoJGlucHV0TG9naW4udmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9CS0LLQtdC00LjRgtC1INC40LzRjycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbjogJGlucHV0TG9naW4udmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICRpbnB1dFBhc3N3b3JkLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dpbih1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcbiAgICAgICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n    const $buttonCart = document.getElementById('cart-button');\r\n    const $modalCart = document.querySelector('.modal-cart');\r\n    const $closeModalCart = $modalCart.querySelector('.close');\r\n    const $cartBody = $modalCart.querySelector('.modal-body');\r\n\r\n    const cardItem = JSON.parse(localStorage.getItem('cart'));\r\n    console.log(cardItem);\r\n    function renderItems(data) {\r\n        data.forEach(({name, price, id, count} ) => {\r\n            const $foodRow = document.createElement('div');\r\n            $foodRow.classList.add('food-row');\r\n            $foodRow.innerHTML = `\r\n                <span class=\"food-name\">${name}</span>\r\n                <strong class=\"food-price\">${price} ₽</strong>\r\n                <div class=\"food-counter\">\r\n                    <button class=\"counter-button\">-</button>\r\n                    <span class=\"counter\">${count}</span>\r\n                    <button class=\"counter-button\">+</button>\r\n                </div>\r\n            `;\r\n            $cartBody.append($foodRow);\r\n        });\r\n    }  \r\n\r\n    $buttonCart.addEventListener('click', () => {\r\n        $modalCart.classList.add('is-open');\r\n    })\r\n\r\n    $closeModalCart.addEventListener('click', () => {\r\n        $modalCart.classList.remove('is-open');\r\n    })\r\n\r\n    renderItems(cardItem);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxLQUFLO0FBQy9DLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5LXNlcnZpY2UvLi9zcmMvbW9kdWxlcy9jYXJ0LmpzP2FjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FydCA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRidXR0b25DYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYnV0dG9uJyk7XHJcbiAgICBjb25zdCAkbW9kYWxDYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnQnKTtcclxuICAgIGNvbnN0ICRjbG9zZU1vZGFsQ2FydCA9ICRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbiAgICBjb25zdCAkY2FydEJvZHkgPSAkbW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ib2R5Jyk7XHJcblxyXG4gICAgY29uc3QgY2FyZEl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpO1xyXG4gICAgY29uc29sZS5sb2coY2FyZEl0ZW0pO1xyXG4gICAgZnVuY3Rpb24gcmVuZGVySXRlbXMoZGF0YSkge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoe25hbWUsIHByaWNlLCBpZCwgY291bnR9ICkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZm9vZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAkZm9vZFJvdy5jbGFzc0xpc3QuYWRkKCdmb29kLXJvdycpO1xyXG4gICAgICAgICAgICAkZm9vZFJvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb2QtbmFtZVwiPiR7bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiZm9vZC1wcmljZVwiPiR7cHJpY2V9IOKCvTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb3VudGVyLWJ1dHRvblwiPi08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj4ke2NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY291bnRlci1idXR0b25cIj4rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgJGNhcnRCb2R5LmFwcGVuZCgkZm9vZFJvdyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICBcclxuXHJcbiAgICAkYnV0dG9uQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbW9kYWxDYXJ0LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgIH0pXHJcblxyXG4gICAgJGNsb3NlTW9kYWxDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRtb2RhbENhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZW5kZXJJdGVtcyhjYXJkSXRlbSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnQiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const $cardsMenu = document.querySelector('.cards-menu');\r\n    const $restaurantTitle = document.querySelector('.restaurant-title');\r\n    const $rating = document.querySelector('.card-info .rating');\r\n    const $price = document.querySelector('.card-info .price');\r\n    const $category = document.querySelector('.card-info .category');\r\n\r\n    function addToCart (cardItem) {\r\n        const cartArray = localStorage.getItem('cart') ?\r\n        JSON.parse(localStorage.getItem('cart')) : \r\n        [];\r\n\r\n        let checkTheSame = cartArray.findIndex((element) => element.id === cardItem.id);\r\n        \r\n        if (checkTheSame === -1) {\r\n            cartArray.push(cardItem);\r\n        } else {\r\n            ++cartArray[checkTheSame].count;\r\n        }\r\n\r\n        localStorage.setItem('cart', JSON.stringify(cartArray));\r\n    }\r\n\r\n    function renderItems (data, place) {\r\n        data.forEach( ({description, id, image, name, price}) => {\r\n            const $divCard = document.createElement('div');\r\n            $divCard.classList.add('card');\r\n            $divCard.innerHTML = `\r\n                <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n                <div class=\"card-text\">\r\n                    <div class=\"card-heading\">\r\n                        <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n                    </div>\r\n                    <!-- /.card-heading -->\r\n                    <div class=\"card-info\">\r\n                        <div class=\"ingredients\">${description}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-buttons\">\r\n                        <button class=\"button button-primary button-add-cart\">\r\n                            <span class=\"button-card-text\">В корзину</span>\r\n                            <span class=\"button-cart-svg\"></span>\r\n                        </button>\r\n                        <strong class=\"card-price-bold\">${price} ₽</strong>\r\n                    </div>\r\n                </div>            \r\n            `;\r\n\r\n            $divCard.querySelector('.button-card-text').addEventListener('click', () => {\r\n                addToCart({ name, price, id, count: 1 });\r\n            })            \r\n\r\n            place.append($divCard);\r\n\r\n        });\r\n    }\r\n\r\n    async function changeTitle (restaurant) {\r\n        document.title = `${restaurant.name} — доставка еды на дом`;\r\n        $restaurantTitle.textContent = restaurant.name;\r\n        $rating.textContent = restaurant.stars;\r\n        $price.textContent = `От ${restaurant.price} ₽`;\r\n        $category.textContent = restaurant.kitchen;\r\n    }\r\n\r\n    async function appendFromFetch (fet, place) {\r\n        try {\r\n            let response = await fet;\r\n            let data = await response.json();\r\n            renderItems(data, place);\r\n        }\r\n        catch (error) {\r\n            console.error(error);\r\n        }\r\n    }\r\n\r\n    if (localStorage.getItem('restaurant')) {\r\n        const restaurant = JSON.parse(localStorage.getItem('restaurant'));\r\n        changeTitle(restaurant);\r\n        const menuFetch = fetch(`https://delivery-service-da3cc-default-rtdb.firebaseio.com/db/${restaurant.products}`);\r\n        appendFromFetch(menuFetch, $cardsMenu);\r\n    } else {\r\n        window.location.href = 'index.html';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0sU0FBUyxLQUFLO0FBQ2hEO0FBQ0E7QUFDQSxnRUFBZ0UsS0FBSztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsT0FBTztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlHQUFpRyxvQkFBb0I7QUFDckg7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5LXNlcnZpY2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzPzJmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRjYXJkc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbWVudScpO1xyXG4gICAgY29uc3QgJHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXVyYW50LXRpdGxlJyk7XHJcbiAgICBjb25zdCAkcmF0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaW5mbyAucmF0aW5nJyk7XHJcbiAgICBjb25zdCAkcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pbmZvIC5wcmljZScpO1xyXG4gICAgY29uc3QgJGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaW5mbyAuY2F0ZWdvcnknKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQgKGNhcmRJdGVtKSB7XHJcbiAgICAgICAgY29uc3QgY2FydEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSA/XHJcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSA6IFxyXG4gICAgICAgIFtdO1xyXG5cclxuICAgICAgICBsZXQgY2hlY2tUaGVTYW1lID0gY2FydEFycmF5LmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gY2FyZEl0ZW0uaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjaGVja1RoZVNhbWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNhcnRBcnJheS5wdXNoKGNhcmRJdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICArK2NhcnRBcnJheVtjaGVja1RoZVNhbWVdLmNvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0QXJyYXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJJdGVtcyAoZGF0YSwgcGxhY2UpIHtcclxuICAgICAgICBkYXRhLmZvckVhY2goICh7ZGVzY3JpcHRpb24sIGlkLCBpbWFnZSwgbmFtZSwgcHJpY2V9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkaXZDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICRkaXZDYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAgICAgJGRpdkNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIiR7bmFtZX1cIiBjbGFzcz1cImNhcmQtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXJlZ1wiPiR7bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRpbmcgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj4ke2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLWFkZC1jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbi1jYXJkLXRleHRcIj7QkiDQutC+0YDQt9C40L3Rgzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcnQtc3ZnXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImNhcmQtcHJpY2UtYm9sZFwiPiR7cHJpY2V9IOKCvTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAkZGl2Q2FyZC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNhcmQtdGV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0KHsgbmFtZSwgcHJpY2UsIGlkLCBjb3VudDogMSB9KTtcclxuICAgICAgICAgICAgfSkgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHBsYWNlLmFwcGVuZCgkZGl2Q2FyZCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZVRpdGxlIChyZXN0YXVyYW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgJHtyZXN0YXVyYW50Lm5hbWV9IOKAlCDQtNC+0YHRgtCw0LLQutCwINC10LTRiyDQvdCwINC00L7QvGA7XHJcbiAgICAgICAgJHJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQubmFtZTtcclxuICAgICAgICAkcmF0aW5nLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5zdGFycztcclxuICAgICAgICAkcHJpY2UudGV4dENvbnRlbnQgPSBg0J7RgiAke3Jlc3RhdXJhbnQucHJpY2V9IOKCvWA7XHJcbiAgICAgICAgJGNhdGVnb3J5LnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5raXRjaGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFwcGVuZEZyb21GZXRjaCAoZmV0LCBwbGFjZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldDtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zKGRhdGEsIHBsYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3RhdXJhbnQnKSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50JykpO1xyXG4gICAgICAgIGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVGZXRjaCA9IGZldGNoKGBodHRwczovL2RlbGl2ZXJ5LXNlcnZpY2UtZGEzY2MtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2RiLyR7cmVzdGF1cmFudC5wcm9kdWN0c31gKTtcclxuICAgICAgICBhcHBlbmRGcm9tRmV0Y2gobWVudUZldGNoLCAkY2FyZHNNZW51KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;