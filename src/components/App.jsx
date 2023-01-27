import { useEffect } from "react";
import { useSelector } from "react-redux";
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

  return (
    <Box p="40px" backgroundColor="#F8FDF8 " height="100vh">
      <Header />
      <Calendar />
    </Box>
  );
}

export default App;
