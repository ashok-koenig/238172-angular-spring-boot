"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
console.log(utils_1.message);
console.log((0, utils_1.welcomeUser)("John"));
var obj = new utils_1.default("Peter", 24);
obj.display();
