import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/node/styles';

const GiantButton = styled(Button, {
  shouldForwardProp: (props) => props,
})(() => ({
  position: 'relative',
  padding: '0 1rem',
  width: 'fit-content',
  height: '64px',
  fontSize: '1rem',
  lineHeight: '64px',
  transition: 'all 0.9s',
  border: '1px solid',
  cursor: 'pointer',
}));

const ButtonBox = styled(Box)(() => ({
  marginTop: '2rem',
  display: 'flex',
}));

function GiantPillButton({ onClick }) {
  return (
    <ButtonBox>
      <GiantButton onClick={() => onClick()}>
        Come see what&#39;s on my mind.
      </GiantButton>
    </ButtonBox>
  );
}

GiantPillButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GiantPillButton;
