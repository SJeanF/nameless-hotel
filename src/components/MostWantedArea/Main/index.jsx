import {
  SectionComumContainer,
  SectionSubTitle,
  SectionTitle,
} from "../../ComumStyledComponents/styles";
import ShowcaseItem from "../ShowcaseItem";
import * as S from "./styles";
import Img1 from "../../../assets/images/1.jpeg";
import Img2 from "../../../assets/images/2.jpeg";
import Img3 from "../../../assets/images/3.jpeg";
import Img4 from "../../../assets/images/4.jpeg";
import Img5 from "../../../assets/images/5.jpeg";

const MostWantedArea = () => {
  const citysList = [
    {
      city: "Riachão do Dantas",
      image: Img1,
    },
    {
      city: "Lagoa",
      image: Img2,
    },
    {
      city: "Alto do cheiro",
      image: Img3,
    },
    {
      city: "Barro preto",
      image: Img4,
    },
    {
      city: "Volta",
      image: Img5,
    },
  ];

  return (
    <SectionComumContainer>
      <SectionTitle>Destinos mais procurados</SectionTitle>
      <SectionSubTitle>
        Opções mais procuradas por viagantes de Sergipe
      </SectionSubTitle>
      <S.ShowcaseList>
        {citysList.map((curr) => (
          <ShowcaseItem
            name={curr.city}
            image={curr.image}
            key={`ShowcaseItem-${curr.city}`}
            gridArea={`showcaseItem-${citysList.indexOf(curr)}`}
          />
        ))}
      </S.ShowcaseList>
    </SectionComumContainer>
  );
};

export default MostWantedArea;
