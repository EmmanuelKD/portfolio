import { Info, StyleBox } from "../assets/styles";
import CustomExperienceMap from "../components/Map/map";
import TitleComponent from "../components/TitleComponent";

export default function ClientReview() {
  return (
    <StyleBox
      style={{ backgroundColor: "#040221" }}
      id={"experience"}>

      <TitleComponent title="Worked Experience" />

      <Info>
        I've had the pleasure of working with some amazing individuals and organizations over the years.
        These are the companies from which I have learned and developed.
        gaining experience as a software developer.
      </Info>
      <CustomExperienceMap />
    </StyleBox>

  );
}
