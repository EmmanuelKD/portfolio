import { useState } from "react";
import menu from "../assets/images/pngs/menu.png"
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { display } from "@mui/system";
import { DESKTOP_APPBAR_HEIGHT, MOILE_APPBAR_HEIGHT } from "../constants";
import { StyleAppBarLogo } from "../assets/styles";



export const StyleLi = styled('li', { shouldForwardProp: (props) => props !== "selected" })<{
  selected?: boolean
}>(({ theme, selected }) => ({
  ...(selected ? {
    transition: "transform 500ms ease-in-out 25ms",
    backgroundColor: "red",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      bottom: "-4px",
      border: "red .5px solid",

    }
  } : { backgroundColor: "transparent" }),

  "a": {
    fontFamily: "Poppins",
    fontWeight: 600,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: theme.spacing(2),
    // "8px",
    marginRight: theme.spacing(2),
  },
  paddingBottom: theme.spacing(1),
  textAlign: "start",
  fontSize: "17px",
  fontStyle: "normal",
  fontWeight: "normal",

  marginLeft: theme.spacing(1),
  // marginLeft: "20px",
  cursor: "pointer",

  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(3),

  },
  [theme.breakpoints.up("sm")]: {

  }
}));

export const StyleUl = styled('ul')(({ theme }) => ({
  listStyle: "none",
  justifyContent: "baseline",
  alighItem: "center",
  width: "100%",
  position: "relative",
  // border:"1px solid red",
  marginTop: 0,
  color: 'white',
  display: "none",

  height: "100%",
  // maxHeight: "7.25rem",
  [theme.breakpoints.up("lg")]: {
    // marginTop: "16px",

  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}));
export const StyleMenuBar = styled('img')(({ theme }) => ({
  display: 'block',
  width: "30px",
  height: "30px",
  [theme.breakpoints.up("lg")]: {

  },
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));


export const StyleAppBar = styled('div')(({ theme }) => ({
  zIndex: 1100,
  width: "100%",
  position: "relative",
  display: "flex",
  height: MOILE_APPBAR_HEIGHT,
  // alignItems:"start",
  // alignItems: "start",
  // paddingX: 10,
  [theme.breakpoints.up("md")]: {
    height: DESKTOP_APPBAR_HEIGHT,
  }
}));


export default function Appbar() {
  const [selected, setSelected] = useState("about");


  return (
    <StyleAppBar>
      <StyleAppBarLogo
      > Portfolio</StyleAppBarLogo>

      <div>

        <StyleMenuBar
          alt="menu"
          src={menu}
        />

        <StyleUl>
          <StyleLi
            selected={selected === "about"}
            onClick={() => {
              setSelected("about");
            }}
          >
            <a href="#about">About</a>
          </StyleLi>

          <StyleLi
            selected={selected === "portfolio"}
            // className={`navLi   ${ && "activeNav"}`}
            onClick={() => {
              setSelected("portfolio");
            }}
          >
            <a href="#portfolio">Portfolio</a>
          </StyleLi>
          <StyleLi
            sx={{
              marginRight: th => th.spacing(4),
            }}
            selected={selected === "experience"}
            // className={`navLi  ${selected === "experience" && "activeNav"}`}
            onClick={() => {
              setSelected("experience");
            }}
          >
            <a href="#experience">Worked At</a>
          </StyleLi>
          <Box
            sx={{
              alignSelf: "flex-end",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "30px",

              border: "1px solid white",
              "a": {
                textAlign: "center",
                height: "100%",
                padding: theme => theme.spacing(1),
              }
            }}
            onClick={() => {
              setSelected("getStarted");
            }}
          >
            <a href="#getStarted">Get Started</a>
          </Box>
        </StyleUl>
      </div>  {/* */}
    </StyleAppBar>
  );
}
