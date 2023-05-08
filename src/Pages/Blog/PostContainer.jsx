import { Box } from '@mui/material';

export default function PostContainer({ showBlogList, children }) {
  return (
    <Box sx={{ display: !showBlogList && 'none' }}>
      {children}
    </Box>
  );
}
