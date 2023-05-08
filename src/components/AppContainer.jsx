import { Box } from '@mui/material';
import { useTheme } from '@mui/material/node/styles';
import { PixelRain } from './PixelRain';
import { useFunContext } from '../contexts/funContext';

// eslint-disable-next-line react/prop-types
export default function AppContainer({ children }) {
  const { breakpoints } = useTheme();
  const { fun } = useFunContext();
  return (
    <Box
      sx={{
        margin: '0 5%',
        [breakpoints.up('lg')]: {
          margin: '0 auto',
          maxWidth: '1100px',
        },
      }}
    >
      <PixelRain play={fun} />
      {children}
    </Box>
  );
}
