import withLoggedIn from "@/routes/private/withLoggedIn.tsx";
import { Button } from "@/components/ui/button.tsx";
import useRefreshToken from "@/hooks/auth/use-refresh-token.ts";

const Dashboard = withLoggedIn(() => {
  const refresh =useRefreshToken()
  return <div className='text-white'>
    <Button onClick={refresh}>Refresh</Button>
  </div>;
});

export default Dashboard;
