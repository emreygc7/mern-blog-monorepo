import axios from 'axios'

const baseURL = import.meta.env.VITE_BASEURL

export const fetcher = (url: string) => instance.get(url).then((res) => res.data);

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export {
    instance,
}