import { Box } from '@mui/material';

export default function AppFooter() {
  const year = new Date().getFullYear();
  const message = `© ${year} Tony Rizzotto`;
  return (
    <Box
      sx={{
        paddingBottom: '2rem',
        left: 0,
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      {message}
    </Box>
  );
}
