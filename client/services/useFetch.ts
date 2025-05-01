import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch= true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async() => {
        try {
            setLoading(true);
            setError(null);
            console.log("Calling fetch function...");
            const result = await fetchFunction();
            setData(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                console.error(err);
                setError(new Error("An unknown error occurred"));
            }
        } finally {
            setLoading(false);
        }
    }


    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        console.log("useEffect triggered");
            fetchData();
    }, []);

    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;