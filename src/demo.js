// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_int32 = require("rescript/lib/js/caml_int32.js");

function add(a, b) {
  return a + b | 0;
}

function sub(a, b) {
  return a - b | 0;
}

function mul(a, b) {
  return Math.imul(a, b);
}

var div = Caml_int32.div;

function toString(prim) {
  return String(prim);
}

var Int = {
  add: add,
  sub: sub,
  mul: mul,
  div: div,
  toString: toString
};

function add$1(a, b) {
  return a + b;
}

function sub$1(a, b) {
  return a - b;
}

function mul$1(a, b) {
  return a * b;
}

function div$1(a, b) {
  return a / b;
}

function toString$1(prim) {
  return String(prim);
}

var Float = {
  add: add$1,
  sub: sub$1,
  mul: mul$1,
  div: div$1,
  toString: toString$1
};

exports.Int = Int;
exports.Float = Float;
/* No side effect */
