import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "../features/dashboard/pages/HomePage";
import GroupChat from "../features/chat/pages/GroupChat";
import Profile from "../features/profile/pages/Profile";
import Groups from "../features/groups/pages/Groups";
import AddNewGroup from "../features/groups/pages/AddNewGroup"

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                index: true,
                element:<HomePage/>
            },
            {
                path:"groups",
                element:<Groups/>
            },
            {
                path:"chat",
                element:<GroupChat/>
            },
            {
                path:"newGroup",
                element:<AddNewGroup/>
            },
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path:"*",
                element:<Navigate to="/" replace />
            }
        ]
    }
])