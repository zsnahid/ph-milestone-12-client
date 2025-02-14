import { Typography } from "@material-tailwind/react";

export default function SectionTitle({ heading, subheading }) {
  return (
    <div>
      <Typography className="mb-2 text-center italic text-accent before:content-['---'] after:content-['---']">
        {subheading}
      </Typography>
      <Typography
        variant="h3"
        className="uppercase font-light text-center px-12 py-4 border-y-4 border-y-gray-300 w-fit mx-auto mb-8"
      >
        {heading}
      </Typography>
    </div>
  );
}
