import { useState } from "react";

interface UseMutationState {
    loading: boolean;
    data?: undefined|any;
    error?: undefined|any;
}

type UseMutationResult = [(data:any) => void, UseMutationState];

const useMutation = (url:string):UseMutationResult => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);

    function mutation(data:any){
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json().catch(()=>{}))
        .then((json)=> setData(json))
        .catch(setError)
        .finally(() => setLoading(false))
    }

    return [mutation, {loading, data, error}];
}

export default useMutation;
