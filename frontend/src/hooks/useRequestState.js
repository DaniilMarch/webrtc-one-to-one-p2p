import {useState} from 'react';

const useRequestState = (key, initial) => {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(initial);

    const requestState = {
        [`${key}Processing`]: processing,
        [`${key}Error`]: error,
        [`${key}Result`]: result,
    }

    const requestActions = {
        processing: () => setProcessing(true),
        error: error => {
            setProcessing(false);
            setError(error);
        },
        result: result => {
            setProcessing(false);
            setResult(result);
        },
        clear: () => {
            setProcessing(false);
            setError(null);
            setResult(initial);
        }
    }

    return {
        [`${key}Actions`]: requestActions,
        [`${key}RequestState`]: requestState
    }
}

export default useRequestState;
