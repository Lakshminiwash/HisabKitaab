import { useDispatch } from "react-redux";
import { login, register } from "../service/auth.api";
import { setError, setLoading, setUser, setValidationError } from "../state/auth.slice";


export function useAuth(){
    const dispatch = useDispatch();

    async function handleRegister({userName,email,password,contact}) {
        try {
             dispatch(setLoading(true))
            dispatch(setError(null))
            dispatch(setValidationError([]))
            const data = await register({userName,email,password,contact})
            dispatch(setUser(data.user));
            return data.user;
        } catch (error) {
            dispatch(setError(error || "registration failed"))
            dispatch(setValidationError(error?.errors || error.response?.data?.message || []))
        } finally {
            dispatch(setLoading(false))
        }
    }

    async function handleLogin({email,password}) {
        try {
            dispatch(setError(null))
            dispatch(setLoading(true))
            const data = await login({email,password})
            dispatch(setUser(data.user))
            return data.user
            
        } catch (error) {
            dispatch(setError(error || "login failed"))
        }finally{
            dispatch(setLoading(false))
        }
    }

    return {
        handleRegister,
        handleLogin
    }
}