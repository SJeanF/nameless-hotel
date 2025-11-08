import * as S from "./styles";
import StateSelector from "../StateSelector";

const SearchBar = () => {
  return (
    <S.Container>
      <S.SearchBar>
        <StateSelector>Para onde você vai?</StateSelector>

        <S.PopUpTriggerButton>Diferencias</S.PopUpTriggerButton>
        <S.SubmitButton type="button">Buscar</S.SubmitButton>
      </S.SearchBar>
    </S.Container>
  );
};

export default SearchBar;
