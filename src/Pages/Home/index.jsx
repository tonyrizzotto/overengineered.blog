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
        <Box>
          <Stack>
            <Typography variant="h1" color={palette.background.accent}>
              Completely over-engineered
            </Typography>
            <Box
              paddingTop="1rem"
              lineHeight="10px"
              sx={{
                width: '90%',
                [breakpoints.up('md')]: {
                  maxWidth: '70%',
                },
                [breakpoints.up('lg')]: {
                  maxWidth: '880px',
                },
              }}
            >
              <Typography variant="h3">
                It would be reasonable to lack works justifying the technology used
                to build this website, alas... here it is.
              </Typography>
              <Box paddingTop="1rem">
                <Typography variant="h6">
                  My main interest in life is understanding how things work and using that knowledge
                  to make things better. My main goal here is to share ideas with words and learn
                  through code... or is it learn with words and share ideas with code?
                  Maybe a little bit of both...
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Button
            onClick={() => navigate('/blog')}
          >
            Navigate to Blog
          </Button>
        </Box>
      )}
    </PageWrapper>
  );
}
