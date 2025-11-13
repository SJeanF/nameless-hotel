import ReasonItem from "../ReasonItem";
import * as S from "./styles";

const ReasonsArea = () => {
  return (
    <S.Container>
      <S.Tittle>Por que usar a Nameless?</S.Tittle>
      <S.ReasonsList>
        <ReasonItem />
        <ReasonItem />
        <ReasonItem />
        <ReasonItem />
      </S.ReasonsList>
    </S.Container>
  );
};

export default ReasonsArea;
