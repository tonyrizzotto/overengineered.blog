import { Box } from '@mui/material';
import { styled } from '@mui/system';

const PageWrapper = styled(Box, {
  shouldForwardProp: (props) => props,
})(() => ({
  margin: '4rem 0',
}));

export default PageWrapper;
