import { useRealm, useObject, useQuery } from '@realm/react';
import Realm from 'realm';
import { ObjectId } from 'bson';

const db = {
    create: (realm, schemaName, object) => {
        try {
            realm.write(() => {
                realm.create(schemaName, object);
            });
            console.log(`New ${schemaName} created with the following id: ${object._id}`);
        } catch (err) {
            console.error('Error creating object:', err);
        }
    },

    read: (realm, schemaName, query) => {
        try {
            const result = realm.objects(schemaName).filtered(query);
            console.log('Document found:', result);
            return result;
        } catch (err) {
            console.error('Error reading object:', err);
        }
    },

    update: (realm, schemaName, query, updateObject) => {
        try {
            realm.write(() => {
                const objects = realm.objects(schemaName).filtered(query);
                objects.forEach(obj => {
                    for (const key in updateObject) {
                        obj[key] = updateObject[key];
                    }
                });
            });
            console.log(`Document(s) updated with the following criteria: ${query}`);
        } catch (err) {
            console.error('Error updating object:', err);
        }
    },

    delete: (realm, schemaName, query) => {
        try {
            realm.write(() => {
                const objects = realm.objects(schemaName).filtered(query);
                realm.delete(objects);
            });
            console.log(`Document(s) deleted with the following criteria: ${query}`);
        } catch (err) {
            console.error('Error deleting object:', err);
        }
    }
};

export default db;
