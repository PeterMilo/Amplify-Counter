import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCustomers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly mins?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly mins?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customers = LazyLoading extends LazyLoadingDisabled ? EagerCustomers : LazyCustomers

export declare const Customers: (new (init: ModelInit<Customers>) => Customers) & {
  copyOf(source: Customers, mutator: (draft: MutableModel<Customers>) => MutableModel<Customers> | void): Customers;
}