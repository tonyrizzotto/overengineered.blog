import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  if (error.status === 404) {
    return (
      <Box>
        <Typography>Sorry - this is not a real page...</Typography>
        <Button onClick={() => navigate('/')}>Lets go back home, shall we?</Button>
      </Box>
    );
  }
  return (
    <Box>
      <Typography>Hmmmmmm.... something must be up.</Typography>
      <Button onClick={() => navigate('/')}>Lets go back home, shall we?</Button>

    </Box>
  );
}
