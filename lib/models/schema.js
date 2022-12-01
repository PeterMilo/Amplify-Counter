"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const schema = exports.schema = {
  "models": {
    "Customers": {
      "name": "Customers",
      "fields": {
        "id": {
          "name": "id",
          "isArray": false,
          "type": "ID",
          "isRequired": true,
          "attributes": []
        },
        "name": {
          "name": "name",
          "isArray": false,
          "type": "String",
          "isRequired": true,
          "attributes": []
        },
        "mins": {
          "name": "mins",
          "isArray": false,
          "type": "Int",
          "isRequired": false,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        },
        "updatedAt": {
          "name": "updatedAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        }
      },
      "syncable": true,
      "pluralName": "Customers",
      "attributes": [{
        "type": "model",
        "properties": {}
      }, {
        "type": "auth",
        "properties": {
          "rules": [{
            "allow": "public",
            "operations": ["create", "update", "delete", "read"]
          }]
        }
      }]
    }
  },
  "enums": {},
  "nonModels": {},
  "codegenVersion": "3.3.2",
  "version": "38a1d6d5139671713bd4ea2f0eb58c49"
};