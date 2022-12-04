//import { Amplify, API, graphqlOperation } from 'aws-amplify';
//import awsconfig from './aws-exports';
//import {  createCustomers,  updateCustomers,  deleteCustomers,} from './graphql/mutations';
//import { listCustomers } from './graphql/queries';
const Amplify = require('aws-amplify');
const API = require('aws-amplify');
const graphqlOperation = require('aws-amplify');
const awsconfig = require('./aws-exports');
const createCustomers = require('./graphql/mutations');
const deleteCustomers = require('./graphql/mutations');
const listCustomers = require('./graphql/queries');

Amplify.configure(awsconfig);

let currentCustomerId = '';
let currentCustomerVersion = '';

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

    getCustomers();

    // Reset the form (make the fields blank again)
    document.getElementById('create-form').reset();
  } catch (err) {
    // If the request fails, print the error message to the console
    console.error(err);
  }
};

const getCustomers = async () => {
  // select the container element & reset its current contents
  const container = document.querySelector('.container');
  container.innerHTML = '';

  // make a request to get all our gifs
  const customers = await API.graphql(graphqlOperation(listCustomers));

  // loop through customers, create new customer element and add to container
  customers.data.listCustomers.items.map(customer => {
    const name = document.createElement('p');
    name.innerHTML = customer.name;
    name.addEventListener('click', e => {
      currentCustomerId = customer.id;
      currentCustomerVersion = customer._version;
      document.getElementById('edit-name').value = customer.name;
      console.log(currentCustomerId);
      console.log(currentCustomerVersion);
    });

    document.querySelector('.container').appendChild(name);
  });
};

// remove customer section
const removeCustomer = e => {
  e.preventDefault();

  API.graphql(
    graphqlOperation(deleteCustomers, {
      input: { id: currentCustomerId, _version: currentCustomerVersion },
    })
  );
  console.log('Customer removed');
  getCustomers();
};

document
  .getElementById('delete-button')
  .addEventListener('click', removeCustomer);

// run our createNewGif function when the form is submitted
document
  .getElementById('create-form')
  .addEventListener('submit', createNewCustomer);

// run this function on page load
getCustomers();

// Link for troubleshooting: https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
// Latest error: Uncaught ReferenceError: require is not defined at app.js:5:17

// Potentially try build commands in npm to resolve issues?
