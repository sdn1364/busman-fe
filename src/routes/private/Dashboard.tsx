import { Button } from "@/components/ui/button.tsx";
import useRefreshToken from "@/hooks/auth/use-refresh-token.ts";
import { useEffect } from "react";
import useAxiosPrivate from "@/hooks/auth/use-private-axios";
import WithAuth from "../WithAuth";

const Dashboard = WithAuth(() => {
  const refresh = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get("/auth/profile")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-white">
      <Button onClick={refresh}>Refresh</Button>
    </div>
  );
});

export default Dashboard;
