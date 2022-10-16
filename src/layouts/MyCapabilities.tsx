import { Box, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";
import { getCapabilities } from "../api/portfolio";
import { StyleBox } from "../assets/styles";
import CapabilityCard from "../components/CapabilityComponent";
import MyCapability from "../components/moc/_CapabilityMoc";
import { TabComponent } from "../components/TabComponent";
import TitleComponent from "../components/TitleComponent";

export default function MyCapabilitiesMain() {


  const tabs = [
    {
      // TabComponent: AllCapabilities,
      tabTitle: "All",
    },
    {
      // TabComponent: LanguageCapabilities,
      tabTitle: "Language",
    },
    {
      // TabComponent: FrameworkCapabilities,
      tabTitle: "Framework",
    },
    {
      // TabComponent: ToolCapabilities,
      tabTitle: "Tool",
    },

    {
      // TabComponent: DatabaseCapabilities,
      tabTitle: "Database",
    },
    {
      // TabComponent: DesignCapabilities,
      tabTitle: "Design",
    },
  ]


  const CapabilityMain = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    height: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {

    }
  }));
  const AboutMeParagraph = styled('p')(({ theme }) => ({
    color: "white",
    display: "none",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      display: "block",
    }
  }));


  const { data, error, isLoading, } = useQuery(['getCapabilities'], getCapabilities, {
    staleTime: 1000 * 10// keep cache for minute
  });

  useEffect(() => {

    // console.log(data)
  }, [data])


  return (<StyleBox
    style={{ backgroundColor: "#0e0c38", overflowY: "scroll" }}
    id="capabilities">

    <CapabilityMain>
      <TitleComponent title="My Capabilities" />

      <div className="">
        <AboutMeParagraph>
          Lorems ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
          nostrud exercitation.
        </AboutMeParagraph>
      </div>

      <TabComponent
        tabs={tabs}
        Children={
          (key) => data ? (
            data?.filter((v) => {
              if (key === "All")
                return true;
              return (v.type === key)
            }).map((cap, v) => {
              return (<div key={v}>
                <CapabilityCard data={cap} />
              </div>
              )
            })
          ) : (null)
        }
      />
    </CapabilityMain >
  </StyleBox >)
}