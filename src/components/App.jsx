import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from './Calendar/Calendar';
import Header from './Header/Header';
import { selectIsLoading } from './redux/Notes/notesSelector';
import { Box } from './Box';
import Skeleton from './Skeleton/Skeleton';

function App() {
  const loading = useSelector(selectIsLoading);

  return (
    <Box p="40px" backgroundColor="#F8FDF8 " height="100vh">
      <Header />
      {loading && <Skeleton />}
      <Calendar />
      <ToastContainer />
    </Box>
  );
}

export default App;
