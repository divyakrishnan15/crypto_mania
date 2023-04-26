import React, { useEffect, useState,useContext } from "react";
import ApiContext from "../Api/UseContextApi";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";



export default function Carousel(){
  
  const { data } = useContext(ApiContext);
  console.log("CAROUSEL === ", data);

  const [credits, setCredits] = useState();

  const handleDragStart = (e) => e.preventDefault();

  const items = Object.entries(data).map((c) => (
    <div className="carouselItem" key={c[1].rank}>
      <img
        src={c[1].iconUrl}
        alt={c[1]?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c[1]?.name}</b>
      <b className="carouselItem__price">${parseFloat(c[1]?.price).toFixed(2)}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 5,
    },
  };

  const fetchCredits =  () => {
    setCredits(data);
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <div className="carouselWrapper">
    <AliceCarousel 
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType="fadeout"
      touchTracking={false}
      paddingLeft={50}
      paddingRight={50}
    />
    </div>
  );
};

