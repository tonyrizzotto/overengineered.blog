import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';
import BlogWrapper from '../../components/BlogWrapper';
import TitleButton from './TitleButton';
import blogMap from './blogmap';

export default function Blog() {
  const navigate = useNavigate();

  const posts = blogMap.map(({ path, metadata }) => (
    <Box marginBottom="3rem" key={metadata.title}>
      <TitleButton variant="h4" onClick={() => navigate(path)}>{metadata.title}</TitleButton>
      <Box display="inline-block">
        <Typography variant="caption">{metadata.date}</Typography>
        <Typography variant="caption" paddingLeft="1rem" sx={{ wordSpacing: '4px' }}>{metadata.length}</Typography>
      </Box>
      <Typography variant="subtitle1">{metadata.subTitle}</Typography>
    </Box>
  ));

  return (
    <PageWrapper>
      <BlogWrapper>
        {posts}
        <Outlet />
      </BlogWrapper>
    </PageWrapper>
  );
}
