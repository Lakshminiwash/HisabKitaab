import { useDispatch } from "react-redux";
import { getMe, login, logOut, register, updateProfile } from "../service/auth.api";
import { logoutUser, setError, setLoading, setUser, setValidationError } from "../state/auth.slice";

function getErrorMessage(error, fallback) {
    const data = error?.data || error?.response?.data || error;
    const firstError = Array.isArray(data?.errors) ? data.errors[0] : null;
    const message = data?.message
        || (typeof firstError === "string" ? firstError : firstError?.message)
        || error?.message;

    return typeof message === "string" ? message : fallback;
}
    
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
            const message = getErrorMessage(error, "Registration failed")
            dispatch(setError(message))
            dispatch(setValidationError(error || []))
            alert(message)
        } finally {
            dispatch(setLoading(false))
        }
    }

    async function handleUpdateProfile({ userName, contact }) {
        try {
            dispatch(setLoading(true))
            dispatch(setError(null))
            dispatch(setValidationError([]))
            const data = await updateProfile({ userName, contact })
            dispatch(setUser(data.user))
            alert(data.message)
            return data.user
        } catch (error) {
            const message = getErrorMessage(error, "Profile update failed")
            dispatch(setError(message))
            dispatch(setValidationError(error || []))
            alert(message)
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
            const message = getErrorMessage(error, "Login failed")
            dispatch(setError(message))
            dispatch(setValidationError(error || []))
            alert(message)
        } finally {
            dispatch(setLoading(false))
        }
    }

    async function handleGetMe() {
        try {
            dispatch(setLoading(true))
            const data = await getMe()
            dispatch(setUser(data.user));
        } catch (error) {
            dispatch(setError(getErrorMessage(error, "Failed to fetch user data")))
        } finally {
            dispatch(setLoading(false))
        }
    }

    async function handleLogOut() {
        await logOut();
        dispatch(logoutUser())
    }

    return {
        handleRegister,
        handleLogin,
        handleGetMe,
        handleLogOut,
        handleUpdateProfile,
    }
}