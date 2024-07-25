import WithAuth from "@/routes/WithAuth";

const Dashboard = WithAuth(() => {
  return <div className=""> this is Dashboard </div>;
});

export default Dashboard;
