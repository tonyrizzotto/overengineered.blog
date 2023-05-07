import { Button } from '@mui/material';
import { styled } from '@mui/system';

const TitleButton = styled(Button, {
  shouldForwardProp: (props) => props,
})(() => ({
  textDecoration: 'none',
}));

export default TitleButton;
