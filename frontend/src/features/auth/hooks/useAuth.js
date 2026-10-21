import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../service/auth.api";
import { setError, setLoading, setUser, setValidationError } from "../state/auth.slice";


export function useAuth() {
    const dispatch = useDispatch();

    async function handleRegister({ userName, email, password, contact }) {
        try {
            dispatch(setLoading(true))
            dispatch(setError(null))
            dispatch(setValidationError([]))
            const data = await register({ userName, email, password, contact })
            dispatch(setUser(data.user));
            alert(data.message)
            return data.user;

        } catch (error) {
            dispatch(setError(error || "registration failed"))
            dispatch(setValidationError(error || []))
            alert(error?.data?.message || error?.data?.errors[0]?.message)
        } finally {
            dispatch(setLoading(false))
        }
    }

    async function handleLogin({ email, password }) {
        try {
            dispatch(setError(null))
            dispatch(setLoading(true))
            const data = await login({ email, password })
            dispatch(setUser(data.user))
            alert(data.message)
            return data.user

        } catch (error) {
            dispatch(setError(error || "login failed"))
            alert(error?.message || error?.errors[0]?.message)
        } finally {
            dispatch(setLoading(false))
        }
    }

    return {
        handleRegister,
        handleLogin
    }
}