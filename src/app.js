// import { DataStore } from '@aws-amplify/datastore';
// import { Customers } from './models';

/*
await DataStore.save(
  new Customers({
    name: 'Lorem ipsum dolor sit amet',
    mins: 1020,
  })
);
*/

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import {
  createCustomers,
  updateCustomers,
  deleteCustomers,
} from './graphql/mutations';
//import { createCustomers } from '../amplify/backend/api/AmplifyCounter/build/schema.graphql';
Amplify.configure(awsconfig);

const createNewCustomer = async e => {
  e.preventDefault();

  const customer = {
    name: document.getElementById('name').value,
  };

  try {
    // Make the API request: provide the createGif operation, provide the user's gif data
    const newCustomer = await API.graphql(
      graphqlOperation(createCustomers, { input: customer })
    );
    // Print the data to the console once it comes back
    console.log(newCustomer);
    // Reset the form (make the fields blank again)
    document.getElementById('create-form').reset();
  } catch (err) {
    // If the request fails, print the error message to the console
    console.error(err);
  }
};

// run our createNewGif function when the form is submitted
document
  .getElementById('create-form')
  .addEventListener('submit', createNewCustomer);

// Follow instructions for https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/#create-the-graphql-api
// Create etc in app.js
