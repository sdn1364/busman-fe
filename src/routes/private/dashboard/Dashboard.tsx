import WithAuth from "@/routes/WithAuth";
import Timebar from "./components/Timebar";
import Calendar from "./components/Calendar";
import CalendarProvider from "@/components/context/CalendarContext";

const Dashboard = WithAuth(() => {
  return (
    <div className="flex w-full flex-col">
      <CalendarProvider>
        <Timebar />
        <Calendar />
      </CalendarProvider>
    </div>
  );
});

export default Dashboard;
