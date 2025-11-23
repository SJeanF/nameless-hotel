import * as S from "./styles";
import Header from "../../components/Header";
import HeroBanner from "../../components/HeroBanner";
import SearchBar from "../../components/SearchBar/Main";
import ReasonsArea from "../../components/ReasonsArea/Main";
import MostWantedArea from "../../components/MostWantedArea/Main";
import AccomodationTypeArea from "../../components/AccomodationTypeArea/Main";
import Footer from "../../components/Footer";

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
      <AccomodationTypeArea />
      <Footer />
    </>
  );
};

export default MainPage;
