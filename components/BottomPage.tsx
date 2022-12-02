import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from './Link';
import BasedOn from './BasedOn';
import Copyright from './Copyright';
import { useState } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LightModeIcon from '@mui/icons-material/LightMode';

const boxSx = {
    my: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

type Page = {
    page: string
}

const themeLight = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

export default function bottom ({ page }: Page) {
    const [light, setLight] = useState(true);
    const hRef: string = `/${page.toLowerCase()}`;
    return (
        <Box
        sx={boxSx}
      >
        <Box 
        m='2rem'
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="0"
        maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href={page.toLowerCase() == 'home' ? '/' : hRef}>
            Go to the {page.toLowerCase()} page
          </Button>
        </Box>
        <ThemeProvider theme={light ? themeLight : themeDark}>
            <CssBaseline />
            <Button variant="contained" onClick={() => setLight((prev) => !prev)}><LightModeIcon></LightModeIcon>Theme</Button>
          </ThemeProvider>
        <BasedOn />
        <Copyright />
      </Box>
    )
}
