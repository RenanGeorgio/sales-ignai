import { Link, Typography } from "@mui/material";

export default function Copyright(props: any): JSX.Element {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        DiamondBigger
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
