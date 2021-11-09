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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS1zZXJ2aWNlLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcblxyXG5hdXRoKCk7XHJcbm1lbnUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const $modalAuth = document.querySelector('.modal-auth');\r\n    const $buttonAuth = document.querySelector('.button-auth');\r\n    const $closeAuth = document.querySelector('.close-auth');\r\n    const $logInForm = document.getElementById('logInForm');\r\n    const $inputLogin = document.getElementById('login');\r\n    const $inputPassword = document.getElementById('password');\r\n    const $buttonOut = document.querySelector('.button-out');\r\n    const $userName = document.querySelector('.user-name');\r\n\r\n    const login = (user) => {\r\n        localStorage.setItem('user', JSON.stringify(user));\r\n        $buttonAuth.style.display = 'none';\r\n        $buttonOut.style.display = 'flex';\r\n        $userName.style.display = 'flex';\r\n        $userName.textContent = user.login;\r\n        $modalAuth.style.display = 'none';\r\n    }\r\n\r\n    const logout = () => {\r\n        $buttonAuth.style.display = 'flex';\r\n        $buttonOut.style.display = 'none';\r\n        $userName.style.display = 'none';\r\n        $userName.textContent = '';\r\n        localStorage.removeItem('user');\r\n    }\r\n\r\n    $buttonAuth.addEventListener('click', () => {\r\n        $modalAuth.style.display = 'flex';\r\n    })\r\n\r\n    $buttonOut.addEventListener('click', () => {\r\n        logout();\r\n    })\r\n\r\n    $closeAuth.addEventListener('click', () => {\r\n        $modalAuth.style.display = 'none';\r\n    })\r\n\r\n    $logInForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        $inputLogin.value = $inputLogin.value.trim();\r\n        if ($inputLogin.value == '') {\r\n            alert('Введите имя');\r\n        } else {\r\n            const user = {\r\n                login: $inputLogin.value.trim(),\r\n                password: $inputPassword.value.trim(),\r\n            }\r\n            login(user);\r\n        }\r\n    })\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5LXNlcnZpY2UvLi9zcmMvbW9kdWxlcy9hdXRoLmpzP2U3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRtb2RhbEF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXV0aCcpO1xyXG4gICAgY29uc3QgJGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKTtcclxuICAgIGNvbnN0ICRjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpO1xyXG4gICAgY29uc3QgJGxvZ0luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dJbkZvcm0nKTtcclxuICAgIGNvbnN0ICRpbnB1dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJyk7XHJcbiAgICBjb25zdCAkaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG4gICAgY29uc3QgJGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3V0Jyk7XHJcbiAgICBjb25zdCAkdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk7XHJcblxyXG4gICAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgICRidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgJGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICR1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICR1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW47XHJcbiAgICAgICAgJG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICAkYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICRidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAkdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAkdXNlck5hbWUudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgfVxyXG5cclxuICAgICRidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICRtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pXHJcblxyXG4gICAgJGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2dvdXQoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJGNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KVxyXG5cclxuICAgICRsb2dJbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGlucHV0TG9naW4udmFsdWUgPSAkaW5wdXRMb2dpbi52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKCRpbnB1dExvZ2luLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQktCy0LXQtNC40YLQtSDQuNC80Y8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgbG9naW46ICRpbnB1dExvZ2luLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAkaW5wdXRQYXNzd29yZC52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9naW4odXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG4gICAgICAgIGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const $cardsMenu = document.querySelector('.cards-menu');\r\n    const $restaurantTitle = document.querySelector('.restaurant-title');\r\n    const $rating = document.querySelector('.card-info .rating');\r\n    const $price = document.querySelector('.card-info .price');\r\n    const $category = document.querySelector('.card-info .category');\r\n\r\n    function renderItems (data, place) {\r\n        data.forEach( ({description, id, image, name, price}) => {\r\n            const $divCard = document.createElement('div');\r\n            $divCard.classList.add('card');\r\n            $divCard.innerHTML = `\r\n                <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n                                <div class=\"card-text\">\r\n                                    <div class=\"card-heading\">\r\n                                        <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n                                    </div>\r\n                                    <!-- /.card-heading -->\r\n                                    <div class=\"card-info\">\r\n                                        <div class=\"ingredients\">${description}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"card-buttons\">\r\n                                        <button class=\"button button-primary button-add-cart\">\r\n                                            <span class=\"button-card-text\">В корзину</span>\r\n                                            <span class=\"button-cart-svg\"></span>\r\n                                        </button>\r\n                                        <strong class=\"card-price-bold\">${price} ₽</strong>\r\n                                    </div>\r\n                                </div>\r\n            \r\n            `;\r\n            place.append($divCard);\r\n\r\n        });\r\n    }\r\n\r\n    async function changeTitle (restaurant) {\r\n        document.title = `${restaurant.name} — доставка еды на дом`;\r\n        $restaurantTitle.textContent = restaurant.name;\r\n        $rating.textContent = restaurant.stars;\r\n        $price.textContent = `От ${restaurant.price} ₽`;\r\n        $category.textContent = restaurant.kitchen;\r\n    }\r\n\r\n    async function appendFromFetch (fet, place) {\r\n        try {\r\n            let response = await fet;\r\n            let data = await response.json();\r\n            renderItems(data, place);\r\n        }\r\n        catch (error) {\r\n            console.error(error);\r\n        }\r\n    }\r\n\r\n    if (localStorage.getItem('restaurant')) {\r\n        const restaurant = JSON.parse(localStorage.getItem('restaurant'));\r\n        changeTitle(restaurant);\r\n        const menuFetch = fetch(`https://delivery-service-da3cc-default-rtdb.firebaseio.com/db/${restaurant.products}`);\r\n        appendFromFetch(menuFetch, $cardsMenu);\r\n    } else {\r\n        window.location.href = 'index.html';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxTQUFTLEtBQUs7QUFDaEQ7QUFDQTtBQUNBLGdGQUFnRixLQUFLO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpR0FBaUcsb0JBQW9CO0FBQ3JIO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS1zZXJ2aWNlLy4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCAkY2FyZHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLW1lbnUnKTtcclxuICAgIGNvbnN0ICRyZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudC10aXRsZScpO1xyXG4gICAgY29uc3QgJHJhdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWluZm8gLnJhdGluZycpO1xyXG4gICAgY29uc3QgJHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaW5mbyAucHJpY2UnKTtcclxuICAgIGNvbnN0ICRjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWluZm8gLmNhdGVnb3J5Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVySXRlbXMgKGRhdGEsIHBsYWNlKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKCAoe2Rlc2NyaXB0aW9uLCBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZGl2Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAkZGl2Q2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgICAgICRkaXZDYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9XCJjYXJkLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1yZWdcIj4ke25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLWhlYWRpbmcgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50c1wiPiR7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLWFkZC1jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FyZC10ZXh0XCI+0JIg0LrQvtGA0LfQuNC90YM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJjYXJkLXByaWNlLWJvbGRcIj4ke3ByaWNlfSDigr08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBwbGFjZS5hcHBlbmQoJGRpdkNhcmQpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjaGFuZ2VUaXRsZSAocmVzdGF1cmFudCkge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gYCR7cmVzdGF1cmFudC5uYW1lfSDigJQg0LTQvtGB0YLQsNCy0LrQsCDQtdC00Ysg0L3QsCDQtNC+0LxgO1xyXG4gICAgICAgICRyZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSByZXN0YXVyYW50Lm5hbWU7XHJcbiAgICAgICAgJHJhdGluZy50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQuc3RhcnM7XHJcbiAgICAgICAgJHByaWNlLnRleHRDb250ZW50ID0gYNCe0YIgJHtyZXN0YXVyYW50LnByaWNlfSDigr1gO1xyXG4gICAgICAgICRjYXRlZ29yeS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQua2l0Y2hlbjtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhcHBlbmRGcm9tRmV0Y2ggKGZldCwgcGxhY2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXQ7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICByZW5kZXJJdGVtcyhkYXRhLCBwbGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50JykpIHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKTtcclxuICAgICAgICBjaGFuZ2VUaXRsZShyZXN0YXVyYW50KTtcclxuICAgICAgICBjb25zdCBtZW51RmV0Y2ggPSBmZXRjaChgaHR0cHM6Ly9kZWxpdmVyeS1zZXJ2aWNlLWRhM2NjLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9kYi8ke3Jlc3RhdXJhbnQucHJvZHVjdHN9YCk7XHJcbiAgICAgICAgYXBwZW5kRnJvbUZldGNoKG1lbnVGZXRjaCwgJGNhcmRzTWVudSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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