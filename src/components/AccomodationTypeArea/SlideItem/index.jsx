import * as S from "./styles";

const SlideItem = ({ name, image }) => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.AccomodationName>{name}</S.AccomodationName>
    </S.Container>
  );
};

export default SlideItem;
