import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/node/styles';
import { useQuery } from 'graphql-hooks';
import {
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import PageWrapper from '../../components/PageWrapper';

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
      {!loading && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            [breakpoints.up('md')]: {
              display: 'grid',
              gridTemplateColumns: '80% 20%',
            },
          }}
        >
          <Stack marginRight="1rem">
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
              <Typography variant="h4">Much technology in small doses</Typography>
              <Box paddingTop="1rem">
                <Typography variant="h6">
                  Understanding how things work and using that knowledge to make things better.

                  Lets share ideas with words and learn through code...
                  or is it learn with words and share ideas with code? Maybe a little bit of both...
                </Typography>
              </Box>
              <Button onClick={() => navigate('/blog')}>Navigate to Blog</Button>
            </Box>
          </Stack>
          <Box backgroundColor={palette.background.accent} width="100%" height="100%" />
        </Box>
      )}
    </PageWrapper>
  );
}
