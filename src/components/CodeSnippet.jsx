import { styled, Box } from '@mui/material';

const CodeSnippet = styled(Box, {
  shouldForwardProp: (props) => props,
})(({ theme: { palette } }) => ({
  margin: '20px 0',
  backgroundColor: palette.mode === 'dark' ? palette.grey[800] : palette.grey[500],
  padding: '.5rem 1rem',
  color: palette.text.primary,
  borderRadius: '18px',
}));

export default CodeSnippet;
