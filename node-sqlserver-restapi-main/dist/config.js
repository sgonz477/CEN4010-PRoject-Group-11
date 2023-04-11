"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "Ktglez02",
  dbServer: process.env.DB_SERVER || "localhost",
  dbDatabase: process.env.DB_DATABASE || "bookBase"
};
exports["default"] = _default;