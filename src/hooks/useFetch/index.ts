import { useState } from "react";

type CallbackType<T> = () => Promise<T>;

type useFetchReturnType = {
    isLoading: boolean;
    isError: string | unknown;
    fetching: () => Promise<void>
}

const useFetch = <T>(callback: CallbackType<T>): useFetchReturnType => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | unknown>();

    const fetching = async (): Promise<void> => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setIsError(e)
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        isError,
        fetching
    }
}

export default useFetch;