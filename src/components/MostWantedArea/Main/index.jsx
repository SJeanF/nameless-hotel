import ShowcaseItem from "../ShowcaseItem";
import * as S from "./styles";

const MostWantedArea = () => {
  return (
    <S.Container>
      <S.Title>Destinos mais procurados</S.Title>
      <S.SubTitle>Opções mais procuradas por viagantes de Sergipe</S.SubTitle>
      <S.ShowcaseList>
        {Array.from({ length: 5 }, (_, index) => index + 1).map((current) => (
          <ShowcaseItem
            type={current <= 2}
            key={`ShowcaseItem-${current}`}
            gridArea={`showcaseItem-${current}`}
          />
        ))}
      </S.ShowcaseList>
    </S.Container>
  );
};

export default MostWantedArea;
