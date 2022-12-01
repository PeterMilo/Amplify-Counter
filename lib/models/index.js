"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Customers = undefined;
var _datastore = require("@aws-amplify/datastore");
var _schema = require("./schema");
// @ts-check

const {
  Customers
} = (0, _datastore.initSchema)(_schema.schema);
exports.Customers = Customers;