import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/node/styles';

const GiantButton = styled(Button, {
  shouldForwardProp: (props) => props,
})(() => ({
  position: 'relative',
  color: 'white',
  width: '256px',
  height: '64px',
  lineHeight: '64px',
  transition: 'all 0.9s',
  border: '1px solid rgba(255, 255, 255, 0.5)',
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
