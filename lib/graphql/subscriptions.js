"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const onCreateCustomers = /* GraphQL */exports.onCreateCustomers = `
  subscription OnCreateCustomers(
    $filter: ModelSubscriptionCustomersFilterInput
  ) {
    onCreateCustomers(filter: $filter) {
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
const onUpdateCustomers = /* GraphQL */exports.onUpdateCustomers = `
  subscription OnUpdateCustomers(
    $filter: ModelSubscriptionCustomersFilterInput
  ) {
    onUpdateCustomers(filter: $filter) {
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
const onDeleteCustomers = /* GraphQL */exports.onDeleteCustomers = `
  subscription OnDeleteCustomers(
    $filter: ModelSubscriptionCustomersFilterInput
  ) {
    onDeleteCustomers(filter: $filter) {
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