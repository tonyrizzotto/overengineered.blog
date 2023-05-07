import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';
import BlogWrapper from '../../components/BlogWrapper';
import TitleButton from './TitleButton';
import blogMap from './blogmap';

export default function Blog() {
  const navigate = useNavigate();

  const posts = blogMap.map(({ path, metadata }) => (
    <>
      <TitleButton onClick={() => navigate(path)}>{metadata.title}</TitleButton>
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
