import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import BasedOn from '../src/BasedOn';
import Copyright from '../src/Copyright';
import Navbar from '../components/navbar';
import { boxSx } from '../components/boxSx';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Navbar></Navbar>
      <Box
        sx={boxSx}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Mike Joseph's site
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <BasedOn />
        <Copyright />
      </Box>
    </Container>
  );
}
