import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../components/Link';
import BasedOn from '../components/BasedOn';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import { boxSx } from '../components/BoxSx';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Navbar></Navbar>
      <Box
        sx={boxSx}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Mike Joseph's site
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <BasedOn />
        <Copyright />
      </Box>
    </Container>
  );
}
