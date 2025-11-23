import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";

const ReasonItem = ({ icon, title, description }) => {
  return (
    <S.Container>
      <S.Icon>
        <FontAwesomeIcon icon={icon} />
        <S.Tittle>{title}</S.Tittle>
        <S.Description>{description}</S.Description>
      </S.Icon>
    </S.Container>
  );
};

export default ReasonItem;
