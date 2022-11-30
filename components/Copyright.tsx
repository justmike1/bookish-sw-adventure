import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

var sourceUrl: string = `${process.env.NEXT_PUBLIC_GITHUB_USER!}/${process.env.NEXT_PUBLIC_REPOSITORY!}`;

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink target="_blank" color="inherit" href={sourceUrl}>
        Mike Joseph's Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
