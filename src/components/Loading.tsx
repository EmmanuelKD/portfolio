import { Box } from "@mui/system";
import LoadGif from "../assets/images/gif/Dual Ball-1.1s-214px.gif";

import { Tab } from "@mui/material";
import { styled } from "@mui/system";

const LoadingImg = styled("img")(({ theme }) => ({
    width: 56, height: 56,
    [theme.breakpoints.up("md")]: {
        width: 80, height: 80
    },

}));
export default function Loading() {

    return (
        <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LoadingImg src={LoadGif} />
        </Box>
    )
}