"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEmailAccount = createEmailAccount;
exports.loginEmailAccount = loginEmailAccount;
exports.logout = logout;
exports.SignUpError = SignUpError;
exports.loginError = loginError;

var _firebase = _interopRequireDefault(require("../../Firebase/firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createEmailAccount(email, password) {
  return function _callee(dispatch) {
    var user;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_firebase["default"].auth().createUserWithEmailAndPassword(email, password));

          case 3:
            user = _context.sent;
            console.log(user);
            dispatch(loggedIn(user));
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            dispatch(SignUpError(_context.t0.message));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
}

function loginEmailAccount(email, password) {
  return function _callee2(dispatch) {
    var user;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_firebase["default"].auth().signInWithEmailAndPassword(email, password));

          case 3:
            user = _context2.sent;
            console.log(user);
            dispatch(loggedIn(user));
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            dispatch(loginError(_context2.t0.message));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
}

function logout() {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_firebase["default"].auth().signOut());

          case 3:
            dispatch(loggedOut());
            _context3.next = 8;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 6]]);
  };
}

function loggedIn(user) {
  return {
    type: "LOGGED_IN",
    payload: user
  };
}

function loggedOut() {
  return {
    type: "LOGGED_OUT "
  };
}

function SignUpError(error) {
  return {
    type: "SIGNUP_ERROR",
    payload: error
  };
}

function loginError(error) {
  return {
    type: "LOGIN_ERROR",
    payload: error
  };
}