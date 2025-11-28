import SuggestionItem from "../SuggestionItem";
import * as S from "./styles";

const StateSuggestions = ({ active }) => {
  const povoados = [
    "Alecrim",
    "Altos",
    "Babu",
    "Betes",
    "Bomfim",
    "Carnaíba",
    "Curralinho",
    "Cutia",
    "Forras",
    "Lagoa",
    "Lagoa da Canafistula",
    "Olhos D'Água",
    "Palmares",
    "Tanque Novo",
    "Vivaldo",
    "Volta",
  ];

  return (
    <S.Container $active={active}>
      <S.Tittle>Destinos em alta</S.Tittle>
      <S.SuggestionsList>
        {povoados.map((curr) => (
          <SuggestionItem key={`suggestion-${curr}`} city={curr} />
        ))}
      </S.SuggestionsList>
    </S.Container>
  );
};

export default StateSuggestions;
