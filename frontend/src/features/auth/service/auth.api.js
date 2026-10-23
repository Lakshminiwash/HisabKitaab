import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
})


export async function register({ userName, email, password, contact }) {
    try {
        const response = await api.post("/api/auth/register", {
            userName,
            email,
            password,
            contact
        })

        return response.data
    } catch (error) {
        throw error?.response;
    }
}

export async function login({ email, password }) {
    try {
        const response = await api.post("/api/auth/login", {
            email,
            password
        })

        return response.data
    } catch (error) {
        throw error?.response?.data ;
    }
}

export async function getMe() {
    const response = await api.get("/api/auth/getMe")
    return response.data;
}