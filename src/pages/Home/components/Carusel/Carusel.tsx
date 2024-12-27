import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carusel.css"; // Дополнительные стили
import SVG from "../../../../components/SVG/SVG";

interface CaruselProps {
  children: React.ReactNode[];
}


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="prev-btn-carusel" onClick={onClick}>
            {/* &#10093; */}
            <SVG className="svg-icon" name="right_rev2" />
            
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="next-btn-carusel" onClick={onClick}>
            {/* &#10092; */}
            <SVG className="svg-icon" name="left_rev2" />
        </div>
    );
  }

const Carusel: React.FC<CaruselProps> = ({ children }) => {
  const settings = {
    centerMode: false, // Центрирование слайда
    dots: true, // Точки для перелистывания
    slidesToShow: 4, // Количество видимых слайдов
    infinite: true, // Бесконечная прокрутка
    speed: 300, // Скорость анимации
    swipeToSlide: true, // Прокрутка слайдов при свайпе
    centerPadding: "0px", // Ширина доп блоков по краям
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: () => (<div className="slick-dots-item"></div>),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
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
