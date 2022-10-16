import { Avatar, Box, CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";
import * as React from 'react';
import { CapabilityDataType } from '../types';
import { Capability } from "./moc/_CapabilityMoc";

const Main = styled(Card)(({ theme }) => ({
  borderRadius: "5px",
  margin: theme.spacing(2),
  flexDirection: "column",
  cursor: "pointer",

  [theme.breakpoints.up("md")]: {
    maxWidth: 300,
    backgroundColor: 'transparent',
    shadowOpacity: 0,
  },
  [theme.breakpoints.up("lg")]: {
    // display: "flex",
    // maxWidth: "auto",
    // width: "auto",
  }
}));



// const StyledCardMedia = styled(CardMedia)(({ theme }) => ({

//   height: "110px",
//   [theme.breakpoints.up("md")]: {


//   },
//   [theme.breakpoints.up("lg")]: {

//   }
// }));


const StyledCardMedia = styled(Box)(({ theme }) => ({

  height: "110px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {


  },
  [theme.breakpoints.up("lg")]: {

  }
}));


const StyledCardContent = styled(CardContent)(({ theme }) => ({

  height: "100px",
  textAlign: "center",
  color: "white",

  [theme.breakpoints.up("md")]: {
  },

  [theme.breakpoints.up("lg")]: {
  }
}));


const StyledText = styled(Typography)(({ theme }) => ({

  color: "black",
  [theme.breakpoints.up("md")]: {

    color: "white",

  },
  [theme.breakpoints.up("lg")]: {

  },
  [theme.breakpoints.up("lg")]: {

  }
}));
export default function CapabilityCard({ data }: { data: CapabilityDataType }) {
  const { image, title, description, experienceLevel } = data;

  return (
    <Main
      elevation={0}

    >
      <StyledCardMedia>
        <img
          alt={title}
          src={image}
          style={{ width: 100, height: 100 }}
        />
      </StyledCardMedia>

      <StyledCardContent

      >
        <StyledText
          gutterBottom variant="h5">
          {title}
        </StyledText>
        <StyledText variant="body2">
          {
            description
          }
        </StyledText>
      </StyledCardContent>

      {/* <CardActions>
        <Button size="small">More</Button>
      </CardActions> */}

    </Main>
  );



  //   <Main
  //     elevation={0}
  //   >
  //     <StyledCardMedia
  //       image={image}
  //     />
  //     <StyledCardContent>
  //       <Typography gutterBottom variant="h5" component="div">
  //         {title}
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //         {
  //           discreption
  //         }
  //       </Typography>
  //     </StyledCardContent>

  //     <CardActions>
  //       <Button size="small">More</Button>
  //     </CardActions>

  //   </Main>
  // );
}