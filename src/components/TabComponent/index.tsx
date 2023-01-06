import { Box, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React, { useMemo } from "react";
import Slider, { Settings } from "react-slick";
import { Grid } from "@mui/material";
import Loading from "../Loading";

const StyledTab = styled(Tab)(({ theme }) => ({
    color: "white",
    "&.Mui-selected": {
        color: "red",
    },
    fontWeight: "bold",
    fontSize: "1em",
    [theme.breakpoints.up("md")]: {
    },

}));

export function TabComponent({ tabs, Children }: {
    tabs: {
        tabTitle: string
    }[],
    Children: (key: string) => React.ReactElement[] | null
}) {


    const theme = useTheme()
    const smallDevices = useMediaQuery(theme.breakpoints.down('md'));

    const initialSlide = 0;
    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const AboutMeParagraph = styled('p')(({ theme }) => ({
        color: "white",
        display: "none",
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            display: "block",
        }
    }));
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}

            >
                {value === index && (
                    <Box sx={{ p: 0, md: { p: 3, } }}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }



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
                    marginRight: theme.spacing(3.5),
                    zIndex: theme.zIndex.drawer,


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
                    marginLeft: theme.spacing(3.5),
                    position: "absolute",

                }}
                onClick={onClick}
            >
                <Typography variant="caption" color="white">{"<"}</Typography>
            </Box>
        );
    }

    const numberOfSlideToShow = 4;

    var settings: Settings = {
        rows: 2,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
                        // backgroundColor: "transparent",
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

                        {dots}

                    </ul>
                </div>
            )
        },

        responsive: [
            // {//xl
            //     breakpoint: 1536,
            //     settings: {
            //         slidesToShow: 3,
            //      }

            // },
            // {//lg
            //     breakpoint: 1200,
            //     settings: {
            //         slidesToShow: 3,
            //      }
            // },
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

        ],

    };


    const _Children = Children(tabs[value].tabTitle)
    const MemorizedChildren = useMemo(() => {
        return _Children
    }, [_Children])

    return (<>
        <Box sx={{ marginY: th => th.spacing(3) }}>
            <Tabs

                value={value} onChange={handleChange}
                // style={{ backgroundColor: "red" }}
                aria-label="basic tabs example">
                {tabs.map((t, i) => {
                    return (<StyledTab
                        label={t.tabTitle}
                        {...a11yProps(i)}
                        key={t.tabTitle} />)
                })}
            </Tabs>
        </Box>
        {tabs.map(({ tabTitle }, i) => {
            return (<TabPanel value={value} index={i}
                key={tabTitle}>

                {_Children ? <Slider
                    {...settings}>
                    {
                        MemorizedChildren
                    }
                </Slider>
                    :
                    <Loading />}

            </TabPanel>
            )
        })}
    </>
    )
}