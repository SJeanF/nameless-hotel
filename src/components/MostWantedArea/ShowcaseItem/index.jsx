import * as S from "./styles";

const ShowcaseItem = ({ name, image, gridArea }) => {
  return (
    <S.Container
      $gridArea={gridArea}
      $src={
        image
          ? image
          : "https://www.faxaju.com.br/wp-content/uploads/2024/05/6187a8bc-7d67-49c9-9f17-2b4d5db4b53b.jpg"
      }
    >
      <S.CityName>
        {name}
        <S.StateIcon src="https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg" />
      </S.CityName>
    </S.Container>
  );
};

export default ShowcaseItem;
