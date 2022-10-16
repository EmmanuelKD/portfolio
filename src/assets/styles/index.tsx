import { styled } from "@mui/system";

export const StyleBox = styled('div')(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  }
}));

export const Info = styled('p')(({ theme }) => ({
  color: "white",
  display: "none",
  // margin: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    display: "block",
  }
}));


export const StyleAppBarLogo = styled('div')(({ theme }) => ({
  width: "auto",
  fontSize: "2.5rem",
  // "40px",
  marginTop: 0,
  flex: 1,
  color: "white",
  fontFamily: "Freestyle Script",

  [theme.breakpoints.up("md")]: {
    width: "100%"
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "4.375rem"
    // "70px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "5rem"
    // "80px",
  }
}));
