import { useDispatch } from "react-redux";
import { addGroup, setError, setGroups, setLoading, setValidationError, } from "../states/newGroup.slice.js"; // Apne groupSlice ka sahi path check kar lena
import { allGroups, createNewGroup } from "../services/newGroup.api.js";

function getErrorMessage(error, fallback) {
    const data = error?.data || error?.response?.data || error;
    const firstError = Array.isArray(data?.errors) ? data.errors[0] : null;
    const message =
        data?.message ||
        (typeof firstError === "string" ? firstError : firstError?.message) ||
        error?.message;

    return typeof message === "string" ? message : fallback;
}

export function useCreateGroup() {
    const dispatch = useDispatch();

    async function handleCreateGroup({ groupName, category, currency }) {
        try {
            dispatch(setLoading(true));
            dispatch(setError(null));
            dispatch(setValidationError([]));

            const data = await createNewGroup({ groupName, category, currency });

            const createdGroup = data?.group || data?.data;
            if (createdGroup) {
                dispatch(addGroup(createdGroup));
            }

            if (data?.message) {
                alert(data.message);
            }

            return createdGroup;
        } catch (error) {
            const message = getErrorMessage(error, "Failed to create group");
            dispatch(setError(message));
            dispatch(setValidationError(error?.data?.errors || error?.response?.data?.errors || []));
            alert(message);
            return null;
        } finally {
            dispatch(setLoading(false));
        }
    }

    async function handleGetAllGroups() {
        try {
            dispatch(setLoading(true));
            dispatch(setError(null));

            const data = await allGroups();

            // Backend response se groups array nikal kar Redux mein set karo
            const groupsList = Array.isArray(data?.groups)
                ? data.groups
                : Array.isArray(data?.data)
                    ? data.data
                    : [];

            dispatch(setGroups(groupsList));
            return groupsList;
        } catch (error) {
            const message = getErrorMessage(error, "Failed to fetch groups");
            dispatch(setError(message));
            return [];
        }finally {
            dispatch(setLoading(false));
        }
    }

    return { handleCreateGroup,handleGetAllGroups };
}