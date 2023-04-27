import { Box } from '@mui/material';
import { useTheme } from '@mui/material/node/styles';
// eslint-disable-next-line react/prop-types
export default function AppContainer({ children }) {
  const { breakpoints } = useTheme();
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
      {children}
    </Box>
  );
}
