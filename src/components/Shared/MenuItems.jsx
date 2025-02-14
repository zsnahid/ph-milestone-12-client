import MenuItem from "./MenuItem";

export default function MenuItems({ items }) {
  // console.log(items);
  return (
    <div className="grid grid-cols-2 gap-8">
      {items.map((item) => (
        <MenuItem
          key={item._id}
          item={item}
        />
      ))}
    </div>
  );
}
