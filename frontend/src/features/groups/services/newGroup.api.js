import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/",
    withCredentials:true
})


export async function createNewGroup({groupName , category , currency}) {
    try {
        const response = await api.post("/api/group/create",{
            groupName,
            category,
            currency
        })
        
        return response.data
    } catch (error) {
        throw error?.response
    }
}