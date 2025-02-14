import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { AvatarWithUserDropdown } from "./Avatar";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 uppercase">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="contact-us"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="dashboard"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Dashboard
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="menu"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Our Menu
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="shop"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Our Shop
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="cart"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          <TiShoppingCart className="size-8 p-1 rounded-full bg-green-700 text-white" />
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="sign-out"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Sign Out
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a
          href="cart"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          <AvatarWithUserDropdown />
        </a>
      </Typography>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      fullWidth={true}
      blurred={false}
      shadow={false}
      className="mx-auto max-w-screen-2xl py-3 text-white fixed top-0 z-10 bg-black/40 backdrop-blur-xs"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 uppercase font-serif text-center font-bold"
        >
          Bistro Boss <br />{" "}
          <span className="text-sm tracking-widest">Restaurant</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon
              className="h-6 w-6"
              strokeWidth={2}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6"
              strokeWidth={2}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
