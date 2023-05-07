import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';
import BlogWrapper from '../../components/BlogWrapper';
import blogMap from './blogmap';

export default function Blog() {
  const navigate = useNavigate();

  const posts = blogMap.map(({ path, metadata }) => (
    <>
      <Button onClick={() => navigate(path)}>{metadata.title}</Button>
      <Typography variant="caption">{metadata.subTitle}</Typography>
    </>
  ));

  return (
    <PageWrapper>
      <BlogWrapper>
        {posts}
      </BlogWrapper>
    </PageWrapper>
  );
}
