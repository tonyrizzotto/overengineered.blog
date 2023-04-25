import { useNavigate } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import { Box, Button } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';

const HELLO_QUERY = `
  query Hello($name: String!) {
    hello(name: $name)
  }
`;

export default function Home() {
  const navigate = useNavigate();
  const { loading, data } = useQuery(HELLO_QUERY, {
    variables: {
      name: 'My Friend',
    },
  });

  if (loading) return <PageWrapper>Loading...</PageWrapper>;

  return (
    <PageWrapper>
      {!loading && (
        <Box>
          <Box>
            {data.hello}
            ! Welcome to a completely over-engineered blog!
          </Box>
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
