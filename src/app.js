import { DataStore } from '@aws-amplify/datastore';
import { Customers } from './models';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

/*
await DataStore.save(
  new Customers({
    name: 'Lorem ipsum dolor sit amet',
    mins: 1020,
  })
);
*/

const createNewCustomer = async e => {
  e.preventDefault();

  const customer = {
    name: document.getElementById('name').ariaValueMax,
  };
};
