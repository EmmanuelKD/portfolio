
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProjects } from "../api/portfolio";
import { StyleBox } from "../assets/styles";
import { LinkRender } from "../components/ContactMe";
import AlertDialog from "../components/Dialog";
import ProjectCard from "../components/ProjectCard";
import { TabComponent } from "../components/TabComponent";
import TitleComponent from "../components/TitleComponent";
import { ProjectDataType } from "../types";

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
  const [selectedProject, setSelectedData] = useState<ProjectDataType>()

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
                    onClick={(sData) => {
                      setSelectedData(sData);
                    }}
                    index={v}
                    data={cap}
                  />
                </div>
              )
            }) : null

          )
        }

      />
      <AlertDialog
        title={selectedProject?.name}
        open={selectedProject !== undefined}
        setClose={() => {
          setSelectedData(undefined);
        }}

      >
        <Grid container>
          <Grid lg={6}>
            <img src={selectedProject?.imageUrl} width="100%" alt="proj image" />
          </Grid>
          <Grid lg={6} >
            <Typography

              variant="h6"
              sx={{
                textAlign: { md: "center" },
                my: th => th.spacing(2),
                color: selectedProject?.projectStatus === "completed" ? "green" : selectedProject?.projectStatus == "suspended" ? "orange" : "red"
              }}>
              {selectedProject?.projectStatus == "inProgress" ? "In Progress" : selectedProject?.projectStatus}
            </Typography>
          </Grid>

          <Grid lg={12}>
            {selectedProject?.description}
          </Grid>
          <Grid lg={12}>
            {(selectedProject?.contributors?.length ?? 0) > 1 &&
              <Typography variant="subtitle1" sx={{ my: th => th.spacing(2), }}>
                Collaborators
              </Typography>
            }
            {selectedProject?.contributors?.map((c, i) => {
              return (<div key={i}>
                <LinkRender name={c?.name} type={c?.portfolioWebsite?.type} url={c?.portfolioWebsite?.url} />
              </div>)
            })}
          </Grid>
        </Grid>

      </AlertDialog>
    </CapabilityMain >
  </StyleBox >)
}
