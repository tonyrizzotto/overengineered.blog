/* global window */
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useFunContext } from '../../contexts/funContext';
import PageWrapper from '../../components/PageWrapper';
import BlogWrapper from '../../components/BlogWrapper';
import TitleButton from './TitleButton';
import PostContainer from './PostContainer';
import blogMap from './blogmap';

export default function Blog() {
  const [showBlogList, setShowBlogList] = useState(true);
  const { setFun } = useFunContext();
  const navigate = useNavigate();

  const isAtBlogHome = window.location.pathname === '/articles';
  const handleTitleClick = (destination) => {
    setShowBlogList((prevState) => !prevState);
    setFun(false);
    navigate(destination);
  };

  const handleBackNavigation = () => {
    setShowBlogList(true);
    navigate('/articles');
  };

  /*
    Iterate through the blog map to make a set of posts
    TODO: Think about pagination.
  */
  const posts = blogMap.map(({ path, metadata }) => (
    <Box marginBottom="3rem" key={metadata.title} display="flex" flexDirection="column" gap="5px">
      <TitleButton variant="h4" onClick={() => handleTitleClick(path)}>{metadata.title}</TitleButton>
      <Box display="inline-block">
        <Typography variant="caption">{metadata.date}</Typography>
        <Typography variant="caption" paddingLeft="1rem" sx={{ wordSpacing: '4px' }}>{metadata.length}</Typography>
      </Box>
      <Typography variant="p">{metadata.subTitle}</Typography>
    </Box>
  ));

  useEffect(() => {
    if (isAtBlogHome) {
      setShowBlogList(true);
    } else {
      setShowBlogList(false);
    }
  }, [isAtBlogHome]);

  return (
    <PageWrapper>
      <BlogWrapper>
        {!isAtBlogHome && (<Button onClick={handleBackNavigation}>Go Back</Button>)}
        <PostContainer showBlogList={showBlogList}>{posts}</PostContainer>
        <Outlet />
      </BlogWrapper>
    </PageWrapper>
  );
}
