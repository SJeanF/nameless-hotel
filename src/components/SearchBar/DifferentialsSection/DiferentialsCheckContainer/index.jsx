import * as S from "./styles";

const DiferentialCheckContainer = ({ active }) => {
  return (
    <S.Container $active={active}>
      <S.Tittle>Opicionais</S.Tittle>
      <S.OptionsList>
        {Array.from({ length: 7 }, (_, index) => index + 1).map((curr) => (
          <S.Option key={curr}>
            <S.OptionCheckBox
              id="diferential"
              name="diferential"
              value="Café da manhã incluso"
              type="checkbox"
            />
            <S.OptionName htmlFor="diferential">
              Café da manhã incluso
            </S.OptionName>
          </S.Option>
        ))}
      </S.OptionsList>
    </S.Container>
  );
};

export default DiferentialCheckContainer;
