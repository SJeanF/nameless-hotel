import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

const SuggestionItem = ({ city }) => {
  return (
    <S.Container>
      <S.LocationIcon>
        <FontAwesomeIcon icon={faLocationDot} />
      </S.LocationIcon>
      <S.TextsContainer>
        <S.StateName>{city}</S.StateName>
        <S.StateContry>Riachão do Dantas</S.StateContry>
      </S.TextsContainer>
    </S.Container>
  );
};

export default SuggestionItem;
