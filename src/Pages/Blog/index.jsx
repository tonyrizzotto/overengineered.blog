import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';

export default function Blog() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Box>
        I have some blog posts, son!
      </Box>
      <Button onClick={() => navigate('/blog/2023-04-22')}>My First Post</Button>
    </PageWrapper>
  );
}
