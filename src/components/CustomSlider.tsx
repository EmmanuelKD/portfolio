import { styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, getThemeProps } from "@mui/system";
import React, { Children } from "react";
import Slider, { Settings } from "react-slick";
import Loading from "./Loading";

export default function CustomSlider({ settingsProp, children }: { settingsProp: Settings, children: React.ReactElement | React.ReactElement[] | null }) {
    const theme = useTheme()
    const initialSlide = 0;

    const StyleDot = styled("div")(({ theme }) => ({
        // "&>:first-child": {
        //     color: "red",
        //     backgroundColor: "red",
        //     position: "relative",
        // }

    }))

    function SampleNextArrow(props: any) {
        const { className, currentSlide, style, onClick } = props;




        return (
            <Box
                className={className}
                style={{
                    ...style,
                    background: theme.palette.primary.dark,
                    width: "50px",
                    height: "50px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    display: "flex",
                    zIndex: 10000,

                }}
                onClick={onClick}
            >
                {
                    // currentSlide == childernSize / numberOfSlideToShow + 1 ?
                    <Typography variant="caption" color="white">{">"}</Typography>
                    // <ArrowForward fontSize={size === "mini" ? "small" : "large"} style={{ color: "white" }} />
                }

            </Box>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, currentSlide, style, onClick } = props;
        return (

            <Box
                className={className}
                style={{
                    zIndex: 1,
                    background: theme.palette.primary.dark,
                    width: "50px",
                    height: "50px",
                    display: currentSlide == 0 ? "none" : "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    position: "absolute",

                }}
                onClick={onClick}
            >
                <Typography variant="caption" color="white">{"<"}</Typography>
            </Box>
        );
    }

    var settings: Settings = {
        rows: 1,
        dots: false,
        infinite: false,
        speed: 500,
        // slidesToScroll: numberOfSlideToShow,
        initialSlide: initialSlide,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        // afterChange:,
        appendDots: dots => {

            return (
                <div
                    style={{
                        height: "50px",
                        width: "100%",
                        position: "relative",

                    }}>

                    <ul
                        style={{
                            marginLeft: "30%",
                            marginRight: "30%",
                            // backgroundColor: "white",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "nowrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>

                        {Children.toArray(dots).map((chi, i) => {
                            return <StyleDot key={i}>{chi}</StyleDot>
                        })}

                    </ul>
                </div>
            )
        },

        responsive: [
            {//xl
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                }

            },
            {//lg
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {//md
                breakpoint: 600,
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
                    arrows: false,
                    rows: 1,
                }
            },
            {
                //xs
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite: true,
                    arrows: false,
                    rows: 1,
                }
            }

        ],
        ...settingsProp
    };


    const _Children = React.useMemo(() => children, [children]);
    if (_Children === null)
        return <Loading />
    return (

        <Slider
            {...settings}>
            {
                _Children
            }
        </Slider>
    )
}