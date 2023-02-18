import { openDB } from 'idb';

const initdb = async () =>

  // TODO: Add a comment explaining what this method does
  // This code defines and initializes an IndexedDB database named "todos" with a single object store named "todos". The openDB method is used to open the database and create the object store

  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // The upgrade function checks if the "todos" object store already exists in the database. If it does, the function does nothing. If it doesn't exist, the function creates the object store using the createObjectStore method on the db object.
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // The createObjectStore method takes two arguments: the name of the object store and an options object. In this code, the options object has two properties: keyPath, which specifies the property on the object to use as the key, and autoIncrement, which is set to true to automatically generate a key for each object added to the object store.
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
