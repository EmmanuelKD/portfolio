import { Avatar, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getWorkExperience } from "../../api/portfolio";
import { CompaniesDetailsType } from "../../types";
import CustomSlider from "../CustomSlider";
import MapSVG from "./mapSVG";



const Stylebox = styled(Box)(({ theme }) => ({

    width: "100%",
    [theme.breakpoints.up("md")]: {
        width: "50%",
    },

}));
const StyleCard = styled(Card)(({ theme }) => ({
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2), 
    minWidth: "256px",
    minHeight: "256px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
        maxWidth: 300
    },

}));


export default function CustomExperienceMap() {

    const [currentSelectedRegion, setCurrentSelectedRegion] = useState("africa")

    const { data, error, isLoading, } = useQuery(['getWorkExperience'], getWorkExperience, {
        staleTime: 1000 * 10// keep cache for minute
    });

    useEffect(() => {
        // console.log(data)
    }, [data])


    useEffect(() => {
        let currentSelected = document.getElementById(currentSelectedRegion);
        if (currentSelected)
            currentSelected.classList.add("selected")
    }, [currentSelectedRegion])


    return (
        <Grid container>
            <Grid item
                sm={12}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Stylebox>
                    <MapSVG
                        location={
                            Object.keys(data ?? {}).map((key, i) => {
                                // @ts-ignore
                                return data[key].companies.length > 0 ? key : ""
                            })

                        }
                        onLocationClick={
                            (location: string) => {
                                let currentSelected = document.getElementById(currentSelectedRegion)
                                if (currentSelected)
                                    currentSelected.classList.remove("selected")
                                setCurrentSelectedRegion(location)

                            }
                        }
                    />
                </Stylebox>
            </Grid>
            <Grid item
                sm={12}
                style={{
                    width: "100%"
                }}
            >
                <CustomSlider
                    settingsProp={
                        {
                            slidesToShow: 4,
                            responsive: [
                                {//xl
                                    breakpoint: 1536,
                                    settings: {
                                        slidesToShow: 3,
                                    }

                                },
                                {//lg
                                    breakpoint: 1200,
                                    settings: {
                                        slidesToShow: 3,
                                    }
                                },
                                {//md
                                    breakpoint: 800,
                                    settings: {
                                        slidesToShow: 2,
                                        dots: true,
                                        infinite: true,
                                        arrows: true
                                    }
                                },
                                {//sm
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        dots: true,
                                        infinite: false,
                                        arrows: false
                                    }
                                },
                                {
                                    //xs
                                    breakpoint: 0,
                                    settings: {
                                        slidesToShow: 1,
                                        dots: true,
                                        infinite: true,
                                        arrows: false
                                    }
                                }
                            ]
                            // rows: 1 
                        }
                    }
                >
                    {/* @ts-ignore */}
                    {data ? (data?.[currentSelectedRegion].companies as CompaniesDetailsType[] ?? [])
                        .filter((c, i) => {
                            return c?.name !== undefined
                        })?.map((v: CompaniesDetailsType, i) => {

                            return (
                                <Box key={v.name} sx={{ width: "100%", p: theme => theme.spacing(2), }}>

                                    <StyleCard >
                                        <CardContent>
                                            <Avatar
                                                alt={v.name}
                                                src={v.logoUrl}
                                                sx={{ width: 56, height: 56 }}
                                            />
                                            <Typography gutterBottom variant="h5" component="div">
                                                {v.name}
                                            </Typography>
                                            <Typography
                                                height={80}
                                                overflow="hidden"
                                                textOverflow="ellipsis"
                                                variant="body2" color="text.secondary">
                                                {v.description}
                                            </Typography>
                                            <br />
                                            <Typography
                                                height={20}
                                                overflow="hidden"
                                                textOverflow="ellipsis"
                                                variant="body2" color="text.secondary">
                                                Worked as {v.role}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <a target={"_top"}
                                                href={v.websiteUrl}
                                            >
                                                <Button size="small">Learn More</Button>
                                            </a>
                                        </CardActions>
                                    </StyleCard>
                                </Box>
                            )
                        }) : null}
                </CustomSlider>
            </Grid>
        </Grid>

    )
}
