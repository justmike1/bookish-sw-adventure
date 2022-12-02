import Container from '@mui/material/Container';
import Navbar from '../../components/navbar';
import Bottom from '../../components/BottomPage';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Navbar></Navbar>
      <Bottom page='Home'></Bottom>
    </Container>
  );
}
