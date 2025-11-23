import {
  SectionComumContainer,
  SectionSubTitle,
  SectionTitle,
} from "../../ComumStyledComponents/styles";
import ShowcaseItem from "../ShowcaseItem";
import * as S from "./styles";

const MostWantedArea = () => {
  const citysList = [
    {
      city: "Riachão do Dantas",
      image:
        "https://www.faxaju.com.br/wp-content/uploads/2024/05/6187a8bc-7d67-49c9-9f17-2b4d5db4b53b.jpg",
    },
    {
      city: "Lagarto",
      image:
        "https://lagarto.se.gov.br/sites/lagarto.se.gov.br/files/Imagem%20do%20WhatsApp%20de%202025-03-13%20%C3%A0%28s%29%2018.47.07_cb923777%20%281%29%20%283%29.jpg",
    },
    {
      city: "Aracarju",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqNpZaQ6oRKddZNtKASOuPh8DsWCSqL5FWKld2vsXpZYqnDfgTTt5QAj38zdf7FF-wSrnyotjcbx2O4MFvgqzPkTKcaiNH3fsU8l65Z9VcGE9COxbPIp2H_3Oe-LWIu4Sa8lnowfH_DGI/s1600/10379949_661362903941899_4888475621864635262_o.jpg",
    },
    {
      city: "Tobias",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Imagem_a%C3%A9rea_tobias_barreto.jpg/1100px-Imagem_a%C3%A9rea_tobias_barreto.jpg",
    },
    {
      city: "São Cristovão",
      image:
        "https://publicacao.saocristovao.se.gov.br/storage/post/sao-cristovao-celebra-434-anos-de-historia-na-proxima-segunda-feira-1o-2023-12-29-658ecc5bd37b8.JPG",
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
