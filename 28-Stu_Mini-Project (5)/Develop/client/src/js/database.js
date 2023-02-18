// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initDb = async () => {
    // Open the 'contacts' database and create a new object store named 'people'
    const db = await openDB('contacts', 1, {
        upgrade(db) {
            db.createObjectStore('people', { keyPath: 'id', autoIncrement: true });
        }
    });
    return db;
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email) => {
    const db = await initDb();
    const tx = db.transaction('people', 'readwrite');
    const store = tx.objectStore('people');
    const result = await store.add({ name, home, cell, email });
    await tx.done;
    return result;
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
    const db = await initDb();
    const tx = db.transaction('people', 'readonly');
    const store = tx.objectStore('people');
    const result = await store.getAll();
    console.log(result)
    await tx.done;
    return result;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    const db = await initDb();
    const tx = db.transaction('people', 'readwrite');
    const store = tx.objectStore('people');
    const result = await store.delete(id);
    await tx.done;
    return result;
};

initDb();
