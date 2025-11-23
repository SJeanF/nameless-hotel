import * as S from "./styles";

const SlideArrow = ({ className, onClick, type }) => {
  return <S.Container $type={type} className={className} onClick={onClick} />;
};

export default SlideArrow;
