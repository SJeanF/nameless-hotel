import * as S from "./styles";
import Header from "../../components/Header";
import HeroBanner from "../../components/HeroBanner";
import SearchBar from "../../components/SearchBar/Main";
import ReasonsArea from "../../components/ReasonsArea/Main";
import MostWantedArea from "../../components/MostWantedArea/Main";

const MainPage = () => {
  return (
    <>
      <S.TopContainer>
        <Header />;
        <HeroBanner />
        <SearchBar />
      </S.TopContainer>
      <ReasonsArea />
      <MostWantedArea />
    </>
  );
};

export default MainPage;
