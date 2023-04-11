"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBookById = exports.getTotalBooks = exports.deleteBookById = exports.getBookById = exports.createNewBook = exports.getBooks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.querys.getAllBooks);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getBooks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getBooks = getBooks;

var createNewBook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, description, quantity, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            quantity = req.body.quantity; // validating

            if (!(description == null || name == null)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "Bad Request. Please fill all fields"
            }));

          case 4:
            if (quantity == null) quantity = 0;
            _context2.prev = 5;
            _context2.next = 8;
            return (0, _database.getConnection)();

          case 8:
            pool = _context2.sent;
            _context2.next = 11;
            return pool.request().input("id", _database.sql.Char, name).input("title", _database.sql.Char, title).input("author", _database.sql.Char, author).input("genre", _database.sql.Char, avRating).input("avRating", _database.sql["double"], avRating).input("ISBN", _database.sql.Char(14), ISBN).input("copiesSold", _database.sql.Int, copiesSold).input("price", _database.sql["double"], price).input("publisher", _database.sql.Char, publisher).input("yearPublised", _database.sql.Int, yearPublised).input("description", _database.sql.Text, description).query(_database.querys.addNewBook);

          case 11:
            res.json({
              id: id,
              title: title,
              author: author,
              genre: genre,
              avRating: avRating,
              ISBN: ISBN,
              copiesSold: copiesSold,
              price: price,
              publisher: publisher,
              yearPublised: yearPublised,
              description: description
            });
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](5);
            res.status(500);
            res.send(_context2.t0.message);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 14]]);
  }));

  return function createNewBook(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewBook = createNewBook;

var getBookById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("id", req.params.id).query(_database.querys.getBookById);

          case 6:
            result = _context3.sent;
            return _context3.abrupt("return", res.json(result.recordset[0]));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getBookById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getBookById = getBookById;

var deleteBookById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("id", req.params.id).query(_database.querys.deleteBook);

          case 6:
            result = _context4.sent;

            if (!(result.rowsAffected[0] === 0)) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.sendStatus(404));

          case 9:
            return _context4.abrupt("return", res.sendStatus(204));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function deleteBookById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteBookById = deleteBookById;

var getTotalBooks = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.getConnection)();

          case 2:
            pool = _context5.sent;
            _context5.next = 5;
            return pool.request().query(_database.querys.getTotalBooks);

          case 5:
            result = _context5.sent;
            console.log(result);
            res.json(result.recordset[0][""]);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getTotalBooks(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getTotalBooks = getTotalBooks;

var updateBookById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, id, title, author, genre, avRating, ISBN, copiesSold, price, publisher, yearPublised, description, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, title = _req$body2.title, author = _req$body2.author, genre = _req$body2.genre, avRating = _req$body2.avRating, ISBN = _req$body2.ISBN, copiesSold = _req$body2.copiesSold, price = _req$body2.price, publisher = _req$body2.publisher, yearPublised = _req$body2.yearPublised, description = _req$body2.description; // validating

            if (!(description == null || name == null || quantity == null)) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              msg: "Bad Request. Please fill all fields"
            }));

          case 3:
            _context6.prev = 3;
            _context6.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input("id", _database.sql.Char, id).input("title", _database.sql.Char, title).input("author", _database.sql.Char, author).input("genre", _database.sql.Char, avRating).input("avRating", _database.sql["double"], avRating).input("ISBN", _database.sql.Char(14), ISBN).input("copiesSold", _database.sql.Int, copiesSold).input("price", _database.sql["double"], price).input("publisher", _database.sql.Char, publisher).input("yearPublised", _database.sql.Int, yearPublised).input("description", _database.sql.Text, description).query(_database.querys.updateBookById);

          case 9:
            res.json({
              id: id,
              title: title,
              author: author,
              genre: genre,
              avRating: avRating,
              ISBN: ISBN,
              copiesSold: copiesSold,
              price: price,
              publisher: publisher,
              yearPublised: yearPublised,
              description: description
            });
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](3);
            res.status(500);
            res.send(_context6.t0.message);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 12]]);
  }));

  return function updateBookById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateBookById = updateBookById;