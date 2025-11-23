import {
  SectionComumContainer,
  SectionSubTitle,
  SectionTitle,
} from "../../ComumStyledComponents/styles";
import Carousel from "../Carousel";
import * as S from "./styles";

const AccomodationTypeArea = () => {
  return (
    <SectionComumContainer>
      <SectionTitle>Pesquise por tipo de acomodação</SectionTitle>
      <Carousel />
    </SectionComumContainer>
  );
};

export default AccomodationTypeArea;
