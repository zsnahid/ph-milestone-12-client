import Category from "../components/Category";
import ChefService from "../components/ChefService";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Category />
      <ChefService />
    </div>
  );
}
