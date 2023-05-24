import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../auth';

export default function Dashboard() {
  const { isAuthenticated } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {}, [isAuthenticated]);

  if (!isAuthenticated) navigate('/');

  return (
    <Box>
      {isAuthenticated && (<Box> Welcome to the dashboard </Box>)}
    </Box>
  );
}
