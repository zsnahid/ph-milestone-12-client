import { Typography } from "@material-tailwind/react";

export default function MenuItem({ item }) {
  console.log(item);
  const { image, name, price, recipe } = item;
  return (
    <div className="flex gap-8">
      <div>
        <img
          src={image}
          alt={name}
          className="w-36 h-28 object-cover object-center rounded-tr-full rounded-br-full rounded-bl-full"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <Typography
            variant="lead"
            className="font-serif after:content-['------------------']"
          >
            {name}
          </Typography>
          <Typography className="text-accent">${price}</Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="w-4/5"
        >
          {recipe}
        </Typography>
      </div>
    </div>
  );
}
