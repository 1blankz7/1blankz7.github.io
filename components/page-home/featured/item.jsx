import Image from "next/image";

const FeaturedItem = () => (
  <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
    <a href="">
      <div
        className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
      >
        <Image
          alt="Mountains"
          src="/assets/background_image.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
        <div className="relative z-20 text-center p-5">
          <span className="inline-block text-white uppercase text-xs tracking-wide">
            Hotels
          </span>
          <h2 className="text-white font-semibold font-sans text-xl my-5">
            Places to stay in the island on your visit
          </h2>
          <span className="inline-block text-xs text-white font-sans">
            Comfort and views
          </span>
        </div>
      </div>
    </a>
  </li>
);

export default FeaturedItem;