import { Typography } from "@material-tailwind/react";
import SectionTitle from "../Shared/SectionTitle";
import featuredImg from "/src/assets/home/featured.jpg";

export default function FeaturedItem() {
  return (
    <section className="relative bg-featured bg-cover bg-center bg-no-repeat my-20">
      <div className="absolute inset-0 bg-black/70 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="nahid relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex-col lg:h-[80vh] lg:items-center lg:px-8 *:text-white!">
        <SectionTitle
          heading={"From Our Menu"}
          subheading={"Check it out"}
        />
        <section>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <img
                  src={featuredImg}
                  className="rounded"
                  alt=""
                />
              </div>

              <div>
                <div className="max-w-lg md:max-w-none">
                  <Typography className="text-2xl font-semibold sm:text-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>

                  <Typography className="mt-4 text-white/80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur doloremque saepe architecto maiores repudiandae amet
                    perferendis repellendus, reprehenderit voluptas sequi.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
