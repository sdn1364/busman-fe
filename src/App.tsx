import {Route, Routes} from "react-router-dom";
import Dashboard from "@/routes/Dashboard.tsx";

function App() {
    return (
        <div>
            <Routes>
                // public routes

                // protected routes
                <Route path="/" element={<Dashboard/>} />
            </Routes>
        </div>
    )
}

export default App
