import SuggestionItem from "../SuggestionItem";
import * as S from "./styles";

const StateSuggestions = ({ active }) => {
  return (
    <S.Container $active={active}>
      <S.Tittle>Destinos em alta</S.Tittle>
      <S.SuggestionsList>
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </S.SuggestionsList>
    </S.Container>
  );
};

export default StateSuggestions;
