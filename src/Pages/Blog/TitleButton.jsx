import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const TitleButton = styled(Typography, {
  shouldForwardProp: (props) => props,
})(({ theme }) => ({
  color: theme.palette.background.accent,
  textAlign: 'left',
  cursor: 'pointer',
  transition: '0.3s ease-out',
  width: 'fit-content',
  '&:hover': {
    color: theme.palette.text.primaryAccent,
  },
}));

export default TitleButton;
