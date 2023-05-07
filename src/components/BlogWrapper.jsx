import { Box } from '@mui/material';
// eslint-disable-next-line react/prop-types
export default function BlogWrapper({ children }) {
  return (
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: { sm: '42rem' },
      }}
    >
      {children}
    </Box>
  );
}
