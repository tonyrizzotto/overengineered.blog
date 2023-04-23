import { Box, Link } from '@mui/material';

export default function MenuBar() {
  return (
    <Box display="inline-block">
      <Link href="/" paddingRight="10px">Home</Link>
      <Link href="/blog/2023-04-22">Latest</Link>
    </Box>
  );
}
