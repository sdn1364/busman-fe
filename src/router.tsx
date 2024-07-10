import {createBrowserRouter} from "react-router-dom";
import PrivateLayout from "@/components/layout/private/PrivateLayout.tsx";
import PublicLayout from "@/components/layout/public/PublicLayout.tsx";

export const router = createBrowserRouter([
    {
        id: 'root',
        path: '/',
        children: [
            {
                id: 'publicLayout',
                element: <PublicLayout/>,
                children: [
                    {
                        index: true,
                        path: '/',
                        element: <div>this is home</div>
                    },
                    {
                        path: '/login',
                        element: <div>this is login</div>
                    },
                    {
                        path: '/register',
                        element: <div>this is register</div>
                    }
                ]
            },
            {
                id: 'privateLayout',
                element: <PrivateLayout/>,
                children: []
            }

        ]
    }
])