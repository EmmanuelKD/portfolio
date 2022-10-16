import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Botsrightbottom from "../assets/images/pngs/bottomRight.png";
import Topdot from "../assets/images/pngs/topdot.png";
// @ts-ignore
import Ellipse from '../assets/images/svgs/Ellipse.svg?component';
// @ts-ignore
import NumExp from "../assets/images/svgs/numExp.svg?component";
import Appbar from "../components/AppBar";
import ContactMe, { linkType } from "../components/ContactMe";
import CustomButton from "../components/CustomButton";
import Profimg from "../assets/images/pngs/me.png"
import { DESKTOP_APPBAR_HEIGHT, MOILE_APPBAR_HEIGHT } from "../constants";
import { StyleBox } from "../assets/styles";
import { LinkType, MyInfoDataType } from "../types";



export const StyleImg = styled("img")(({ theme }) => ({
  maxWidth: "95%",
  [theme.breakpoints.up("sm")]: {
    width: "auto"
  }
}));


export const StyleElappsisBox = styled(Ellipse)(({ theme }) => ({
  width: "200px",
  height: "200px",
  top: "25%",
  left: "-10%",
  position: "absolute",
  [theme.breakpoints.up("lg")]: {
    width: "350px",
    height: "350px",
  }
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  // height: "100%",
  display: "flex",
  flex: 1,
  opacity: .4,
  bottom: 0,
  top: theme.spacing(6),
  marginBottom: 0,
  zIndex: 0,
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {

    top: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    right: theme.spacing(2),
    opacity: .8,

  },
  [theme.breakpoints.up("lg")]: {
    width: "auto"
  },

}));

export const MainGridContainer = styled(Box)(({ theme }) => ({
  paddingX: 10,
  margin: 'auto',
  width: "100%",

  flex: 1,
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(2),
  position: 'relative',
  height: `calc(100% - ${MOILE_APPBAR_HEIGHT}px)`,
  minHeight: `calc(100vh - ${MOILE_APPBAR_HEIGHT}px)`,
  display: "flex",
  [theme.breakpoints.up("md")]: {
    paddingX: 16,
    minHeight: `calc(100vh - ${DESKTOP_APPBAR_HEIGHT}px)`,
    height: `calc(100% - ${DESKTOP_APPBAR_HEIGHT}px)`,
  },
  [theme.breakpoints.up("lg")]: {
    display: "grid"
  },
}));


export const InfoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alighItems: "center",
  color: "white",
  justifyContent: "start",
  height: "100%",
  position: "relative",

}));

export const StyleAppBarDottsBox = styled('img')(({ theme }) => ({
  width: "200px",
  height: "auto",
  top: "0",
  right: "0%",
  position: "absolute",
  [theme.breakpoints.up("lg")]: {
    width: "350px",
    height: "150px",
    right: "45%",
  },


}));

export const GreetLanding = styled('div')(({ theme }) => ({

  fontFamily: "Poppins",
  fontSize: "41px",
  fontWeight: "lighter",
  [theme.breakpoints.up("lg")]: {

  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2em"
    // "31px",
  }
}));


export const NameLanding = styled('div')(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: "bolder",
  fontSize: "3.75em",
  // "60px",
  lineHeight: "55px",
  [theme.breakpoints.up("lg")]: {

  }, [theme.breakpoints.up("sm")]: {
    fontSize: "3.75em",
    // "60px",
    // lineHeight: "3.75em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "7em",
    lineHeight: "95px",
    // lineHeight: "5.3em",
    // "85px",
  }
}));


export const ContentBody = styled('div')(({ theme }) => ({
  // border: "2px solid red",
  width: "100%",

  paddingTop: theme.spacing(10),
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  height: "100%",
  [theme.breakpoints.up("lg")]: {

  },
  [theme.breakpoints.up("md")]: {

  },
  [theme.breakpoints.up("sm")]: {
    // paddingTop: theme.spacing(10),
  }


}));
const LinkHeading = styled('div')(({ theme }) => ({

  fontSize: "19px",
  // fontWeight: "lighter",
  [theme.breakpoints.up("lg")]: {

  },
  [theme.breakpoints.up("md")]: {

  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(0),
  }


}));
const ProfessionalInfo = styled('div')(({ theme }) => ({

  fontSize: "19px",
  fontFamily: "Poppins",
  fontWeight: "normal",
  marginTop: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {

  },
  [theme.breakpoints.up("md")]: {

  },
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(1),
  }


}));



const catchMe: {
  name: string;
  url: string;
  type: number;
}[] = [
    {
      name: "LinkedIn",
      url: "https://google.com",
      type: linkType.linkedIn,
    },
    {
      name: "github",
      url: "https://google.com",
      type: linkType.github,
    },
    {
      name: "stackOverflow",
      url: "https://google.com",
      type: linkType.stackOverflow,
    },
  ];

export default function Landing({ data }: { data?: MyInfoDataType }) {
  return (
    <StyleBox sx={{
      backgroundColor: "#0e0c38",

    }}>
      <Appbar />
      <StyleElappsisBox />
      <div className="botsrightbottom">
        <img alt="" src={Botsrightbottom} height={182} width={55} />
      </div>

      <div className="numExp">
        <NumExp />
      </div>
      <StyleAppBarDottsBox src={Topdot} alt="" className="z-0" />
      <MainGridContainer>

        <ImageBox
          style={{ zIndex: 0 }}
        >
          <StyleImg
            alt={data?.name.first ? data.name.first : "Danquah"}
            src={data?.portfolioImageUrl ? data.portfolioImageUrl : Profimg}
          />
        </ImageBox>

        <InfoSection
          style={{ zIndex: 1 }}
        >
          <ContentBody>
            <GreetLanding >Hello, I am</GreetLanding>
            <NameLanding>
              {data?.name.first ? data?.name.first : "Emmanuel"} <br />
              {data?.name.last ? data?.name.last : "Danquah"}
              {/* i don't know why i do this but name is  coming from  my  backend i have to use it */}
            </NameLanding>
            <ProfessionalInfo >
              <br />
              A Seasoned{" "}
              <span style={{ color: "red" }}>
                Software Engineer &nbsp;
              </span>
              with  {data?.experienceYear ? data?.experienceYear : "3"} years of experience
            </ProfessionalInfo>

            <div style={{ flex: .5 }} />

            <LinkHeading>
              <br />
              Catch Me On
            </LinkHeading>
            <div>
              <ContactMe links={
                data?.socialLinks as LinkType[]
                // catchMe
              } />
            </div>
            <br />
            <div className={"buttonConainer "}>
              <a href="#getStarted">
                <CustomButton
                  text="Hire Me"
                  variant={"filled"}
                  innerButtonStyle={{ backgroundColor: "red", color: "white" }}
                />
              </a>
              <a href="#portfolio">
                <CustomButton
                  text="Portfolio"
                  variant={"outline"}
                  innerButtonStyle={{}}
                />
              </a>
            </div>

          </ContentBody>
        </InfoSection>


      </MainGridContainer>
    </StyleBox>
  );
}
