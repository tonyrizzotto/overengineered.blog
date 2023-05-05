import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';
import blogMap from './blogmap';

export default function Blog() {
  const navigate = useNavigate();

  const posts = blogMap.map((post) => (
    <>
      <Box>
        {post.title}
      </Box>
      <Button
        onClick={() => navigate(post.path)}
      >
        View
      </Button>
    </>
  ));

  return (
    <PageWrapper>
      {posts}
    </PageWrapper>
  );
}
