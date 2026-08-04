import axios from "axios"

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"

export const api = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true
})

api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers = config.headers || {}
            config.headers.Authorization = `Bearer ${token}`
        } else if (config.headers) {
            delete config.headers.Authorization
        }
    }
    return config
})

export function setAuthToken(token) {
    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
        delete api.defaults.headers.common.Authorization
    }
}

if (typeof window !== "undefined") {
    const savedToken = localStorage.getItem("token")
    if (savedToken) {
        setAuthToken(savedToken)
    }
}
