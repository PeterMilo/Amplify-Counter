"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const getCustomers = /* GraphQL */exports.getCustomers = `
  query GetCustomers($id: ID!) {
    getCustomers(id: $id) {
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
const listCustomers = /* GraphQL */exports.listCustomers = `
  query ListCustomers(
    $filter: ModelCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mins
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
const syncCustomers = /* GraphQL */exports.syncCustomers = `
  query SyncCustomers(
    $filter: ModelCustomersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        mins
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;