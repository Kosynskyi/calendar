import { RotatingLines } from 'react-loader-spinner';
import { Box } from '../Box';

const Skeleton = () => {
  return (
    <Box
      s
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <RotatingLines />
    </Box>
  );
};

export default Skeleton;
