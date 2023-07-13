import { useState } from "react";

const useMutation = (url:string):[
    (data:any) => void,
    {loading: boolean; data: undefined|any; error: undefined|any;}
] => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);

    function mutation(data:any){
        
    }

    return [mutation, {loading, data, error}];
}

export default useMutation;
