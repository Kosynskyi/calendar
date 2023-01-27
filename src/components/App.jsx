import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calendar from "./Calendar/Calendar";
import Header from "./Header/Header";
import { Box } from "./Box";
import { objectCalendar } from "../data/objectCalendar";
import isLeapYear from "date-fns/isLeapYear";
import { selectCurrentYear } from "./redux/Date/selector";

function App() {
  const currentYear = useSelector(selectCurrentYear);
  useEffect(() => {
    isLeapYear(currentYear, objectCalendar);
  }, [currentYear]);

  console.log("currentYear", currentYear);

  return (
    <Box p="40px" backgroundColor="#F8FDF8 " height="100vh">
      <Header />
      <Calendar />
      <ToastContainer />
    </Box>
  );
}

export default App;
