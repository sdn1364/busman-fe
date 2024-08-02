import Timebar from "./components/Timebar";
import Calendar from "./components/Calendar";
import CalendarProvider from "@/components/context/CalendarContext";
import WithAuth from "@/routes/WithAuth";

const Dashboard = WithAuth(() => {
  return (
    <CalendarProvider>
      <div className="flex w-full flex-col">
        <Timebar />
        <Calendar />
      </div>
    </CalendarProvider>
  );
});

export default Dashboard;
