import { Box, Card } from "@mui/material";
import { styled } from "@mui/system";
import { CSSProperties } from "react";
import { ProjectDataType } from "../types";
import { projectData } from "./moc/_mocData";

interface ProjectCardProps {
  style?: CSSProperties
  tailwindStyle?: string
  data: ProjectDataType;
  index: number
}


const CardMain = styled(Card, { shouldForwardProp: (prop) => prop !== "backgroundImgSrc" })<{
  backgroundImgSrc: string
}>(({ theme, backgroundImgSrc }) => ({
  minWidth: "256px",
  minHeight: "256px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  backgroundSize: "cover",

  alignItems: "center",
  backgroundImage: `url(${backgroundImgSrc})`,
  borderRadius: "40px",
  backgroundRepeat: "no-repeat",
  // flexDirection: "column",

  // zIndex: theme.zIndex.,
  // marginLeft: theme.spacing(5),
  // marginRight: theme.spacing(5),

  width: "100%",
  [theme.breakpoints.up("md")]: {
    // flex: 1,
    // width: "auto",
    // maxWidth: "auto",
    // marginLeft: theme.spacing(0),
    // width: "306px",
    // height: "306px",
    maxWidth: 300,
    "&:hover": {
      transform: "scale(1,1.2)",
      transitionTimingFunction: "ease-in-out",
      transition: "all 800ms",
    },


  },
  [theme.breakpoints.up("lg")]: {
    // display: "flex",
    // maxWidth: "auto",
    // width: "auto",
  }

  // border: "2px solid red",

}));



const ProjectInfo = styled('div')(({ theme }) => ({
  minWidth: "256px",
  minHeight: "256px",
  flex: 1,
  opacity: 0,
  backgroundColor: "red",
  borderRadius: "40px",

  "&:hover": {
    transition: "opacity 800ms",
    opacity: .9,
  },
  zIndex: 100000000,
  [theme.breakpoints.up("md")]: {

  },
  [theme.breakpoints.up("lg")]: {

  }


}));
export default function ProjectCard(props: ProjectCardProps) {
  const { data, index } = props;

  const {
    contributors,
    description,
    owner,
    imageUrl,
    name,
    projectStatus,
    role,
    technologies,
  } = data;

  return (
    <Box sx={{ p: theme => theme.spacing(2), py: theme => theme.spacing(3.5) }}>
      <CardMain
        backgroundImgSrc={imageUrl}
        style={{ ...props.style }}
      >
        <ProjectInfo>
          <Box
            sx={{
              p: th => th.spacing(2),
              color: "white",
              fontWeight: 500,
            }}
          >For {owner}</Box>
        </ProjectInfo>
      </CardMain>
    </Box>
  );
}

