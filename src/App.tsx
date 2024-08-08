import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AllProviders from "./components/AllProviders";

function App() {
  return (
    <AllProviders>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </AllProviders>
  );
}

export default App;
