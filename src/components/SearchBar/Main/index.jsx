import * as S from "./styles";
import StateSelector from "../StateSection/StateInput";
import DiferentialsInput from "../DifferentialsSection/DiferentialsInput";

const SearchBar = () => {
  return (
    <S.Container>
      <S.SearchBar>
        <S.ButtonsContainer>
          <StateSelector />
        </S.ButtonsContainer>
        <S.ButtonsContainer>
          <DiferentialsInput />
        </S.ButtonsContainer>
        <S.SubmitButton type="button">Buscar</S.SubmitButton>
      </S.SearchBar>
    </S.Container>
  );
};

export default SearchBar;
