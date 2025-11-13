import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const ReasonItem = () => {
  return (
    <S.Container>
      <S.Icon>
        <FontAwesomeIcon icon={faThumbsUp} />
        <S.Tittle>Facilidade para reservar e cancelar</S.Tittle>
        <S.Description>
          Escolha sua estadia com flexibilidade e pague da forma que preferir.
        </S.Description>
      </S.Icon>
    </S.Container>
  );
};

export default ReasonItem;
