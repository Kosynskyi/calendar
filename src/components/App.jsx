import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calendar from "./Calendar/Calendar";
import Header from "./Header/Header";
import { Box } from "./Box";

function App() {
  return (
    <Box p="40px" backgroundColor="#F8FDF8 " height="100vh">
      <Header />
      <Calendar />
      <ToastContainer />
    </Box>
  );
}

export default App;
