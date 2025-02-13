import { Typography } from "@material-tailwind/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 text-white text-center">
      <div className="bg-[#1F2937] py-14">
        <Typography
          variant="h4"
          className="font-thin mb-5"
        >
          Contact Us
        </Typography>
        <Typography variant="paragraph">
          123 ABS Street, Uni 21, Bangladesh
        </Typography>
        <Typography variant="paragraph">+88 123456789</Typography>
        <Typography variant="paragraph">Mon - Fri: 08:00 - 22:00</Typography>
        <Typography variant="paragraph">Sat - Sun: 10:00 - 23:00</Typography>
      </div>

      <div className="bg-[#111827] py-14 space-y-5">
        <Typography
          variant="h4"
          className="font-thin"
        >
          Follow Us
        </Typography>
        <Typography variant="paragraph">Join us on social media</Typography>
        <div className="flex gap-6 place-content-center *:size-8">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      <div className="col-span-2 bg-black/90 py-2">
        <Typography variant="small">
          Copyright &copy; Bistro Boss. All rights reserved{" "}
        </Typography>
      </div>
    </div>
  );
}
