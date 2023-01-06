import ContactMe from "../components/ContactMe";
import { styled } from "@mui/system";
import { StyleAppBarLogo } from "../assets/styles";
import { LinkType, MyInfoDataType } from "../types";

const
  FooterNavUl = styled('ul')(({ theme }) => ({
    display: "flex",
    overflow: "wrap",
    justifyContent: "space-between",
    listStyleImage: "1",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      width: "400px",
      // width: "310px",
    },

  }));
const
  FooterContent = styled('div')(({ theme }) => ({
    width: "100%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "2px solid red",
    [theme.breakpoints.up("md")]: {

    },

  }));

const
  FooterLi = styled('li')(({ theme }) => ({

    [theme.breakpoints.up("md")]: {

    },

  }));


// .footer {
//   background-color: #040221;
//   border-top: 1px solid grey;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// @media (max-width: 600px) {
//   .grid {
//     width: 100%;
//     flex-direction: column;
//   }
// }

export default function Footer({ data }: { data?: MyInfoDataType }) {
  return (
    <div className="portfolioFooterMain">
      <div className="portfolioFooterHorLine"></div>
      <FooterContent>
        <div style={{ maxWidth: "200px" }}>
          <StyleAppBarLogo
          > Portfolio</StyleAppBarLogo>
        </div>

        <div>
          <FooterNavUl >
            <FooterLi>About</FooterLi>
            <FooterLi>Portfolio</FooterLi>
            <FooterLi>Contact</FooterLi>
            <FooterLi>Get Started</FooterLi>
          </FooterNavUl>
        </div>
        <div>
          <ContactMe links={data?.socialLinks as LinkType[]} />
        </div>

      </FooterContent>

      <div style={{ textAlign: "center" }}>
        Design by Graphic studios build with love by me
      </div>
    </div>
  );
}
