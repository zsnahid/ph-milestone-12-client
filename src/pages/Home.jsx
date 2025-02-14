import Category from "../components/Home/Category";
import FeaturedItem from "../components/Home/FeaturedItem";
import PopularItems from "../components/Home/PopularItems";
import Slider from "../components/Home/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Category />
      <PopularItems />
      <FeaturedItem />
    </div>
  );
}
