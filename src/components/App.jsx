import Calendar from "./Calendar/Calendar";
import Header from "./Header/Header";
import { Box } from "./Box";

function App() {
  return (
    <Box p="40px" backgroundColor="#F8FDF8 " height="100vh">
      <Header />
      <Calendar />
    </Box>
  );
}

export default App;
