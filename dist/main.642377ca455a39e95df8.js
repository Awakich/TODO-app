/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const form = document.querySelector('#form')\r\nconst input = form.querySelector('#input')\r\nconst task = document.querySelector('.tasks-block')\r\n\r\nform.addEventListener('submit', submitHandler)\r\n\r\nfunction submitHandler(element){\r\n    element.preventDefault()\r\n\r\n    const value = input.value\r\n\r\n    if (!value){\r\n        input.classList.add('input-task-unfill')\r\n    }else{\r\n        input.classList.remove('input-task-unfill')\r\n    }\r\n\r\n    const task__inner = document.createElement('div')\r\n    task__inner.classList.add('task__inner')\r\n\r\n    const content = document.createElement('div')\r\n    content.classList.add('content')\r\n\r\n    task__inner.appendChild(content)\r\n\r\n    const btns_block = document.createElement('div')\r\n    const input_btns = document.createElement('input')\r\n    const edit = document.createElement('button')\r\n    const deleted = document.createElement('button')\r\n    const couple = document.createElement('div')\r\n\r\n    btns_block.classList.add('btns-block')\r\n    edit.classList.add('btn_edit')\r\n    deleted.classList.add('btn_deleted')\r\n    input_btns.classList.add('btns-block__inner')\r\n    input_btns.type = 'text'\r\n    input_btns.setAttribute('readonly', 'readonly')\r\n    input_btns.value = input.value\r\n    couple.classList.add('couple-blocks')\r\n\r\n    edit.textContent = 'Edit'\r\n    deleted.textContent = 'Delete'\r\n\r\n    btns_block.appendChild(edit)\r\n    btns_block.appendChild(deleted)\r\n\r\n    task__inner.appendChild(input_btns)\r\n    task.appendChild(btns_block)\r\n    couple.appendChild(task__inner)\r\n    couple.appendChild(btns_block)\r\n    task.appendChild(couple)\r\n}\n\n//# sourceURL=webpack://TODO-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;