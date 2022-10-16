import Projects from "../components/moc/_mocData";

import { styled } from "@mui/system";
import { StyleBox } from "../assets/styles";
import ProjectCard from "../components/ProjectCard";
import { TabComponent } from "../components/TabComponent";
import TitleComponent from "../components/TitleComponent";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/portfolio";
import { useEffect } from "react";

export default function MyCapabilitiesMain() {

  const tabs = [

    {
      // TabComponent: LanguageCapabilities,
      tabTitle: "All",
    },
    {
      // TabComponent: FrameworkCapabilities,
      tabTitle: "Cross Platform",
    },
    {
      // TabComponent: ToolCapabilities,
      tabTitle: "Full Stack",
    },

    {
      // TabComponent: DatabaseCapabilities,
      tabTitle: "Backend Only",
    },
    {
      // TabComponent: DesignCapabilities,
      tabTitle: "Frontend Only",
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


  const { data, error, isLoading, } = useQuery(['getProjects'], getProjects, {
    staleTime: 1000 * 10// keep cache for minute
  });

  useEffect(() => {

    // console.log(data)
  }, [data])

  return (<StyleBox
    style={{ backgroundColor: "#040221" }}
    id="portfolio">
    <CapabilityMain>
      <TitleComponent title="My Portfolio" />

      <TabComponent
        tabs={tabs}
        Children={
          (key) => (

            data ? data?.filter((v) => {
              if (key === "All")
                return true;

              return (v.role === key)
            }).map((cap, v) => {
              return (
                <div key={v}
                >
                  <ProjectCard
                    index={v}
                    data={cap}
                  />
                </div>
              )
            }) : null

          )
        }

      />
    </CapabilityMain >
  </StyleBox >)
}
