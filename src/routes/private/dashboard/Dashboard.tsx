import Timebar from "./components/Timebar";
import Calendar from "./components/Calendar";
import CalendarProvider from "@/components/context/CalendarContext";

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
