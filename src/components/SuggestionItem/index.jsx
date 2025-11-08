import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

const SuggestionItem = () => {
  return (
    <S.Container>
      <S.LocationIcon>
        <FontAwesomeIcon icon={faLocationDot} />
      </S.LocationIcon>
      <S.TextsContainer>
        <S.StateName>Aracaju</S.StateName>
        <S.StateContry>Brazil</S.StateContry>
      </S.TextsContainer>
    </S.Container>
  );
};

export default SuggestionItem;
