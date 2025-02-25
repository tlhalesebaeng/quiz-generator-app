import { useState } from 'react';
import api from '../requestInstance';

// An object with functions for performing http requests
const functions = {
    post: (url, data) => {
        return api.post(url, data);
    },
};

export function useFetch() {
    const [error, setError] = useState('');

    async function res(url, data, method) {
        const response = await functions[method](url, data);

        if (response.status < 200 || response.status >= 300) {
            // Set the error
            const responseData = response.data;
            if (responseData) {
                setError(responseData.message);
            } else {
                setError('Could not process login request');
            }
        }

        return response;
    }

    return { error, res };
}
