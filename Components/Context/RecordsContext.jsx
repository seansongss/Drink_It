import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
    const [records, setRecords] = useState({});

    const loadRecords = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(keys);
            const loadedRecords = items.reduce((acc, [key, value]) => {
                acc[key] = JSON.parse(value);
                return acc;
            }, {});
            setRecords(loadedRecords);
        } catch (error) {
            console.error('Failed to load records:', error);
        }
    };

    useEffect(() => {
        loadRecords();
    }, []);

    return (
        <RecordsContext.Provider value={{ records, loadRecords }}>
            {children}
        </RecordsContext.Provider>
    );
};
