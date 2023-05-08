import { Box } from '@mui/material';
// import { useTheme } from '@mui/material/node/styles';

// eslint-disable-next-line react/prop-types
export default function BlogWrapper({ children }) {
  // const { typography } = useTheme();
  return (
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: { sm: '44rem' },
        lineHeight: 1.6,
      }}
    >
      {children}
    </Box>
  );
}
