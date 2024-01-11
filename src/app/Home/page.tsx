import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div
          className="hero-content flex-col
         lg:grid lg:grid-cols-6
         "
        >
          <div className="flex justify-center lg:col-span-2 ">
            <div className="relative w-[250px] h-[280px]">
              <Image
                src="/img/ylia.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
                alt="HeroImg"
                fill
                sizes="max-width: 600px"
              />
            </div>
          </div>
          <div className="col-span-4">
            <h1 className="text-3xl font-bold">Box Office News!</h1>
            <p className="py-6 xl">
              Anime allows viewers to temporarily immerse themselves in
              captivating stories, providing a much-needed break from reality.
              Anime serves as an entertaining medium that sparks joy, laughter,
              and excitement, helping to alleviate stress and uplift spirits.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
