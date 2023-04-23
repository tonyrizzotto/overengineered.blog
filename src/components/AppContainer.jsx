import { Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function AppContainer({ children }) {
  return (
    <Box sx={{ margin: '0 5%' }}>
      {children}
    </Box>
  );
}
