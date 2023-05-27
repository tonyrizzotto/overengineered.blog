import { Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function PostContainer({ showBlogList, children }) {
  return (
    <Box sx={{ display: !showBlogList && 'none' }}>
      {children}
    </Box>
  );
}
