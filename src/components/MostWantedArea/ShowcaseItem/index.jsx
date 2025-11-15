import * as S from "./styles";

const ShowcaseItem = ({ type, gridArea }) => {
  return (
    <S.Container
      $gridArea={gridArea}
      $type={type}
      $src={
        type
          ? "https://cf.bstatic.com/xdata/images/city/600x600/653646.jpg?k=0a8eb3999748f5b12b29f6bd5492a12b7f15a37535e572ea91403098d1588d38&o="
          : "https://cf.bstatic.com/xdata/images/city/600x600/653459.jpg?k=57c5c21e650b8e0888c5906143c2655c412a2e64796337d87a687c68daabed2d&o="
      }
    >
      <S.CityName>
        Riachão do Dantas
        <S.StateIcon src="https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg" />
      </S.CityName>
    </S.Container>
  );
};

export default ShowcaseItem;
