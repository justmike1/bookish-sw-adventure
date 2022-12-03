import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navbar from '../../components/navbar';
import Bottom from '../../components/BottomPage';
import Box from '@mui/material/Box';
import { boxSx } from '../../components/BottomPage';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Navbar></Navbar>
      <Box sx={boxSx}>
        <Typography variant="h5" component="h2">
        Hey! Thanks for being interested for my CV! But currently I am employed @ Antidote Health.<br></br><br></br>Feel free to add me on Linkedin though! (link in toolbar).
        </Typography>  
        </Box>
      <Bottom page='Home'></Bottom>
    </Container>
  );
}
