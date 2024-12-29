import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carusel.css"; // Дополнительные стили
import SVG from "../../../../components/SVG/SVG";

interface CaruselProps {
  children: React.ReactNode[];
}

// Стрелка "Вперёд"
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-btn-carusel" onClick={onClick}>
      <SVG className="svg-icon" name="right_rev2" />
    </div>
  );
}

// Стрелка "Назад"
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-btn-carusel" onClick={onClick}>
      <SVG className="svg-icon" name="left_rev2" />
    </div>
  );
}

// Основной компонент
const Carusel: React.FC<CaruselProps> = ({ children }) => {
  const showArrows = children.length > 4; // Отображать стрелки, если больше 4 элементов
  const isInfinite = children.length > 4; // Включить бесконечную прокрутку, если больше 4 элементов

  const settings = {
    centerMode: false,
    dots: true,
    slidesToShow: 4, // Ограничиваем количество видимых слайдов
    infinite: isInfinite,
    speed: 300,
    swipeToSlide: true,
    centerPadding: "0px",
    nextArrow: showArrows ? <SampleNextArrow /> : null,
    prevArrow: showArrows ? <SamplePrevArrow /> : null,
    customPaging: () => <div className="slick-dots-item"></div>,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: Math.min(children.length, 2) },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(children.length, 3) },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: Math.min(children.length, 4) },
      },
    ],
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {children.map((child, index) => (
          <div key={index} className="carousel-item">
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carusel;
