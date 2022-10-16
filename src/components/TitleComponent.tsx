import { styled } from "@mui/system";

const TitleBody = styled('div')(({ theme }) => ({

    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "white",
    [theme.breakpoints.up("md")]: {
        flexDirection: "column",
    },

}));

const AboutMeTitleLine = styled('div')(({ theme }) => ({

    width: "250px",
    backgroundColor: "red",
    height: "2px",
    [theme.breakpoints.up("md")]: {
        width: "300px",
        // flexDirection: "column",
    },

}));


const AboutMeTitleText = styled('div')(({ theme }) => ({

    fontWeight: "600",
    fontSize: "30px",
    [theme.breakpoints.up("md")]: {
    },

}));


export default function TitleComponent({ title, line_tailwindStyle }: { title: string, line_tailwindStyle?: string }) {

    return (
        <TitleBody>
            <AboutMeTitleText style={{ paddingRight: "5px" }}>{title}</AboutMeTitleText>
            <AboutMeTitleLine style={{ backgroundColor: "red" }} />
        </TitleBody>
    )
}