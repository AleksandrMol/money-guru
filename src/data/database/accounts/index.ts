import { addRxPlugin, RxCollection, RxDatabase, RxJsonSchema } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { IAccountCard } from './interfaces/account-card';

addRxPlugin(RxDBDevModePlugin);


interface AccountCollection extends RxCollection<IAccountCard> {}

interface MyDatabaseCollections {
  accounts: AccountCollection;
}

export type MyDatabase = RxDatabase<MyDatabaseCollections>;

let dbPromise: Promise<MyDatabase> | null = null;

const _create = async () => {
  const accountsDB = await createRxDatabase<MyDatabaseCollections>({
    name: 'accounts',
    storage: getRxStorageDexie()
  });

  const accountSchema: RxJsonSchema<IAccountCard> = {
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        maxLength: 256,
      },
      name: {
        type: 'string'
      },
      count: {
        type: 'number'
      },
      icon: {
        type: 'string'
      }
    },
    required: ['id', 'name', 'count', 'icon']
  }

  await accountsDB.addCollections({
    accounts: {
      schema: accountSchema
    }
  });

  return accountsDB;
}

export const getAccountDb = () => {
  if (!dbPromise) {
    dbPromise = _create();
  }
  return dbPromise;
};
