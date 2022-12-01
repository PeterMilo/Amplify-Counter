"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createCustomers = /* GraphQL */exports.createCustomers = `
  mutation CreateCustomers(
    $input: CreateCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    createCustomers(input: $input, condition: $condition) {
      id
      name
      mins
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
const updateCustomers = /* GraphQL */exports.updateCustomers = `
  mutation UpdateCustomers(
    $input: UpdateCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    updateCustomers(input: $input, condition: $condition) {
      id
      name
      mins
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
const deleteCustomers = /* GraphQL */exports.deleteCustomers = `
  mutation DeleteCustomers(
    $input: DeleteCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    deleteCustomers(input: $input, condition: $condition) {
      id
      name
      mins
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;