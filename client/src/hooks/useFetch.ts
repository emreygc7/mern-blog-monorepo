import useSWR from "swr";
import { fetcher } from "../api/axiosInstance";

export default function useFetch(url: string, params?: {}) {
    if(params && Object.keys(params).length > 0){
        url = `${url}?${new URLSearchParams(params).toString()}`
    }

    const { data, error, isLoading, mutate } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
    });
    return { data, error, isLoading, mutate };
}
