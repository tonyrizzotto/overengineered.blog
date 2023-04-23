import { Box } from '@mui/material';
import { styled } from '@mui/system';

const CodeSnippet = styled(Box, {
  shouldForwardProp: (props) => props,
})(({ theme: { palette, shadows } }) => ({
  margin: '20px 0',
  backgroundColor: palette.background.codeSnippet,
  padding: '.5rem 1rem',
  color: palette.text.primary,
  borderRadius: '18px',
  boxShadow: shadows[15],
}));

export default CodeSnippet;
