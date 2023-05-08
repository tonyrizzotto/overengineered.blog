import { Box } from '@mui/material';
import { styled } from '@mui/system';

const CodeSnippet = styled(Box, {
  shouldForwardProp: (props) => props,
})(({ theme: { palette, custom } }) => ({
  margin: '20px 0',
  backgroundColor: palette.background.codeSnippet,
  padding: '.5rem 1rem',
  color: palette.text.codeSnippet,
  borderRadius: '18px',
  boxShadow: custom.shadows.codeSnippet,
  zIndex: 100,
}));

export default CodeSnippet;
