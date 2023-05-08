import { Box } from '@mui/material';
import { styled } from '@mui/system';

const CodeSnippet = styled(Box, {
  shouldForwardProp: (props) => props,
})(({ theme: { palette, custom } }) => ({
  margin: '3rem 0',
  backgroundColor: palette.background.codeSnippet,
  padding: '1rem',
  // color: palette.text.codeSnippet,
  borderRadius: '18px',
  boxShadow: custom.shadows.codeSnippet,
  zIndex: 100,
  overflow: 'scroll',
}));

export default CodeSnippet;
