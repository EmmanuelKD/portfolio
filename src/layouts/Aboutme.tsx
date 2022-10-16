import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getMyInfo } from "../api/portfolio";
import me from "../assets/images/me.jpg";
import { StyleBox } from "../assets/styles";
import CustomButton from "../components/CustomButton";
import TitleComponent from "../components/TitleComponent";
import { MyInfoDataType } from "../types";



const StyledContentMain = styled(Box)(({ theme }) => ({
  display: 'flex',

  maxWidth: "700px",
  maxHeight: "549px",

  width: "100%",
  height: "100%",
  position: "relative",
  [theme.breakpoints.up("sm")]: {

  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "end",
    paddingRight: theme.spacing(5),
  },
  [theme.breakpoints.up("lg")]: {

  }
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#0e0c38",
  // width: "65%",
  // height: "65%",
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    // width: "60%",
    // height: "80%",

  },
  [theme.breakpoints.up("md")]: {
    // width: "60%",
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up(1140)]: {
    // width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    // width: "40%",
  }

}));

const Me = styled('img')(({ theme }) => ({
  width: "100%",
  height: "100%",

}));

const StyledEffect = styled('img')(({ theme }) => ({
  position: "absolute",
  marginLeft: -50,
  marginBottom: -50,
  width: "auto",
  height: "auto",
  border: "2px solid red",
  [theme.breakpoints.up("sm")]: {
    // width: "60%",
    // height: "80%",
  },
  [theme.breakpoints.up("md")]: {
    // width: "60%",
    // marginLeft: 0,
    // marginRight: -30,
    // marginBottom: -50,
  },
  [theme.breakpoints.up(1140)]: {
    // width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    // width: "40%",
  }
}));


const GridMain = styled(Grid)(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.up("sm")]: {
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
  [theme.breakpoints.up(1140)]: {

  },
  [theme.breakpoints.up("lg")]: {

  }
}));

export default function AboutMe({ data }: { data?: MyInfoDataType }) {
  const theme = useTheme()
  const smallDevices = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <StyleBox sx={{
      paddingBottom: th => th.spacing(2),
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      backgroundColor: "#040221"
    }}
      id={"about"}>

      <GridMain container spacing={2} >
        <Grid
          item
          sm={12}
          md={5}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            color: "white",
          }}>

          <TitleComponent title="About Me" />
          <p>
            {
              data ? data?.aboutMe.p1 :
                `Dynamic and results–oriented individual, well experience in web and mobile application development.
            Acknowledged for being relentless.`}
          </p>
          <p style={{ display: smallDevices ? "none" : "block" }}>
            {
              data ? data?.aboutMe.p2 :
                ` Exemplifies commitment to continual skill and knowledge improvement through comprehensive software engineering exposure.
            Highly analytical and organized in delivering high-quality work while orchestrating a wide variety of duties in a
            fast–paced environment.`}
            <br />
          </p>

          <br />
          {
            data ? data?.aboutMe.p3 :
              `Known as an effective team player with strong communication skills while exhibiting professional excellence.`}          <div style={{ flex: .5 }}></div>

          <a href={data?.cvUrl} download="danquahCV.pdf">
            <CustomButton
              text="Download CV"
              variant={"outline"}
              innerButtonStyle={{
                maxWidth: "200px",
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2)
              }}
            />
          </a>
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledContentMain>
            <StyledImageContainer>
              <Me src={me} alt="" />
            </StyledImageContainer>
          </StyledContentMain>
        </Grid>

      </GridMain>

    </StyleBox>
  );
}
