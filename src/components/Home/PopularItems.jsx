import axios from "axios";
import { useEffect, useState } from "react";
import MenuItems from "../Shared/MenuItems";
import SectionTitle from "../Shared/SectionTitle";

export default function PopularItems() {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    axios
      .get("menu.json")
      .then((res) => {
        const popularItems = res.data.filter(
          (item) => item.category === "popular"
        );
        setMenuItems(popularItems);
        // console.log(popularItems);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-20 w-10/12 mx-auto">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"Check it out"}
      />
      <MenuItems items={menuItems} />
    </div>
  );
}
