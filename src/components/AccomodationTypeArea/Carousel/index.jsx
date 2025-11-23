import Slider from "react-slick";
import * as S from "./styles";
import SlideItem from "../SlideItem";
import Images from "../../../assets/citys-image.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideArrow from "../SlideArrow";

const Carousel = () => {
  const accomodationType = [
    {
      nome: "Hotel",
      image:
        "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232",
    },
    {
      nome: "Vila",
      image:
        "https://chaledavilacanoa.com.br/wp-content/uploads/2024/07/Chale-da-Vila-Hospedagem-Canoa-Quebrada-Ceara8.jpg",
    },
    {
      nome: "Apartamento",
      image:
        "https://admin.mac.com.br/wp-content/uploads/2024/11/apartamento-com-ou-sem-varanda-as-vantagens-de-cada-um-thumbnail.webp",
    },
    {
      nome: "Pousada",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufYcQazU4CV8xsqaWPQn5M639Xr6eFu0EhA&s",
    },
    {
      nome: "Resort",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTACq4tUmzFv9ZTlcF5xYdf4dp2adNwSv51w&s",
    },
    {
      nome: "Chalé",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyor_BNakiVhLH4rCChd4cEJsVuupOD5REJw&s",
    },
  ];

  return (
    <S.Container className="slider-container">
      <Slider
        slidesToShow={4}
        slidesToScroll={1}
        infinite
        speed={300}
        draggable={false}
        nextArrow={<SlideArrow type="next" />}
        prevArrow={<SlideArrow type="prev" />}
      >
        {accomodationType.map((curr) => (
          <SlideItem name={curr.nome} image={curr.image} />
        ))}
      </Slider>
    </S.Container>
  );
};

export default Carousel;
