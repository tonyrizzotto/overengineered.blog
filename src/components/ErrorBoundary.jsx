import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';
import PageWrapper from './PageWrapper';

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  if (error.status === 404) {
    return (
      <PageWrapper>
        <Box>
          <Typography>Sorry - this is not a real page...</Typography>
          <Button onClick={() => navigate('/')}>Lets go back home, shall we?</Button>
        </Box>
      </PageWrapper>
    );
  }
  return (
    <PageWrapper>
      <Box>
        <Typography>Hmmmmmm.... something must be up.</Typography>
        <Button onClick={() => navigate('/')}>Lets go back home, shall we?</Button>
      </Box>
    </PageWrapper>
  );
}
