// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customers } = initSchema(schema);

export {
  Customers
};