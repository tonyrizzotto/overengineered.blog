import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/node/styles';
import {
  Box,
  Typography,
} from '@mui/material';
import PageWrapper from '../../components/PageWrapper';
import GiantPillButton from '../../components/GiantPillButton';

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { palette, breakpoints } = theme;
  return (
    <PageWrapper>
      <Box sx={{ display: 'grid', [breakpoints.up('md')]: { gridTemplateColumns: '80% 20%' } }}>
        <Box margin="0 1rem">
          <Box>
            <Typography variant="h1" color={palette.text.header} sx={{ wordSpacing: '100vw' }}>
              Over Engineered Ideas
            </Typography>
            <Box paddingTop="2rem" lineHeight="10px">
              <Typography variant="h3">Big ideas in small doses</Typography>
              <Box paddingTop="2rem">
                <Typography variant="h6">
                  I can not guarantee this will be the most performant website
                  you&#39;ve ever visited. What I can guarantee, however, is that I&#39;ve
                  tried my absolute best to make it not so.  👍
                </Typography>
              </Box>
              <GiantPillButton onClick={() => navigate('/blog')} />
            </Box>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}
