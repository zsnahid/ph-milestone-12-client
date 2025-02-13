import { Typography } from "@material-tailwind/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "/src/assets/home/slide1.jpg";
import img2 from "/src/assets/home/slide2.jpg";
import img3 from "/src/assets/home/slide3.jpg";
import img4 from "/src/assets/home/slide4.jpg";

export default function Category() {
  return (
    <div className="mt-20">
      <Typography className="mb-2 text-center italic text-yellow-600">
        {" "}
        ---From 11:00am to 10:00pm---
      </Typography>
      <Typography
        variant="h3"
        className="uppercase font-light text-center px-12 py-4 border-y-4 border-y-gray-300 w-fit mx-auto mb-8"
      >
        Order Online
      </Typography>
      <Carousel
        showStatus={false}
        showArrows={false}
        dynamicHeight={false}
        swipeable={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={30}
        className="category-carousel w-10/12 mx-auto"
      >
        <div className="category-image-container">
          <img src={img1} />
          <Typography className="legend">Salads</Typography>
        </div>
        <div className="category-image-container">
          <img src={img2} />
          <Typography className="legend">Pizzas</Typography>
        </div>
        <div className="category-image-container">
          <img src={img3} />
          <Typography className="legend">Soups</Typography>
        </div>
        <div className="category-image-container">
          <img src={img4} />
          <Typography className="legend">Desserts</Typography>
        </div>
      </Carousel>
    </div>
  );
}
