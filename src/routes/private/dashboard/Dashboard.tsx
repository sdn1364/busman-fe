import CalendarProvider from "@/components/context/CalendarContext";
import Calendar from "./components/Calendar";
import Timebar from "./components/Timebar";

const Dashboard = () => {
  return (
    <CalendarProvider>
      <div className="flex w-full flex-col">
        <Timebar />
        <Calendar />
      </div>
    </CalendarProvider>
  );
};

export default Dashboard;
