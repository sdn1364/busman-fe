import {RouterProvider} from "react-router-dom";
import {router} from "@/router.tsx";
import {ThemeProvider} from "@/components/context/theme-provider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AuthProvider from "@/components/context/AuthContext.tsx";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </AuthProvider>
        </QueryClientProvider>
    )
}

export default App
