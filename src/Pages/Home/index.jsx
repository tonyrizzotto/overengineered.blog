import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/node/styles';
import { useQuery } from 'graphql-hooks';
import {
  Box,
  Typography,
} from '@mui/material';
import PageWrapper from '../../components/PageWrapper';
import GiantPillButton from '../../components/GiantPillButton';

const HELLO_QUERY = `
  query Hello($name: String!) {
    hello(name: $name)
  }
`;

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { palette, breakpoints } = theme;
  const { loading } = useQuery(HELLO_QUERY, {
    variables: {
      name: 'My Friend',
    },
  });

  if (loading) return <PageWrapper>Loading...</PageWrapper>;

  return (
    <PageWrapper>
      <Box>
        {!loading && (
          <Box
            sx={{
              display: 'grid',
              [breakpoints.up('md')]: {
                gridTemplateColumns: '80% 20%',
              },
            }}
          >
            <Box margin="0 1rem">
              <Box>
                <Typography
                  variant="h1"
                  color={palette.background.accent}
                  sx={{
                    [breakpoints.up('md')]: {
                      wordSpacing: '100vw',
                    },
                  }}
                >
                  Over Engineered Ideas
                </Typography>
                <Box paddingTop="1rem" lineHeight="10px">
                  <Typography variant="h4">Big ideas in small doses</Typography>
                  <Box paddingTop="1rem">
                    <Typography variant="h6">
                      Lets share ideas with words and learn through code...
                      or is it learn with words and share ideas with code?
                      Maybe a little bit of both...
                    </Typography>
                  </Box>
                  <GiantPillButton onClick={() => navigate('/blog')} />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </PageWrapper>
  );
}
