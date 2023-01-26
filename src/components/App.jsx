import "./App.css";
import Calendar from "./Calendar/Calendar";
import Header from "./Header/Header";
import { Box } from "./Box";

function App() {
  return (
    <Box p="40px">
      <Header />
      <Calendar />
    </Box>
  );
}

export default App;
