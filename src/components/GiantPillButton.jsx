import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/node/styles';

const GiantButton = styled(Button, {
  shouldForwardProp: (props) => props,
})(() => ({
  padding: '1rem 3rem',
  borderRadius: '50px',
  fontSize: '25px',
  '&:hover': {
    borderColor: '#0062cc',
    color: 'white',
    boxShadow: 'none',
    transition: '.7s ease-in',
  },
  '&:active': {
    boxShadow: 'none',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
}));

const ButtonBox = styled(Box)(() => ({
  marginTop: '2rem',
  display: 'flex',
}));

function GiantPillButton({ onClick }) {
  return (
    <ButtonBox>
      <GiantButton onClick={() => onClick()}>
        Navigate to Blog Land!
      </GiantButton>
    </ButtonBox>
  );
}

GiantPillButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GiantPillButton;
