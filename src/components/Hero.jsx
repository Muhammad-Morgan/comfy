import { NavLink } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const Hero = () => {
  const heroList = [hero1, hero2, hero3, hero4];
  return (
    <article className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="grid gap-8">
        <h1 className="max-w-2xl text-4xl sm:text-6xl font-bold tracking-tight">
          We are changing the way people shop
        </h1>
        <p className="text-lg leading-8 max-w-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <NavLink
          to="/products"
          className="btn btn-primary w-fit px-4 py-6 uppercase"
        >
          our products
        </NavLink>
      </div>
      <div className="h-[28rem] hidden lg:carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
        {heroList.map((item) => {
          return (
            <div key={item} className="carousel-item">
              <img
                className="rounded-box h-full w-80 object-cover"
                src={item}
                alt={item}
              />
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Hero;
