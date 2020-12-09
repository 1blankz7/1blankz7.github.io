import FeaturedItem from "./item";

const Featured = () => (
  <div className="bg-gray-100">
    <div className="max-w-5xl mx-auto pt-10 pb-10">
      <ul className="flex flex-wrap -mx-2 overflow-hidden">
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </ul>
    </div>
  </div>
);

export default Featured;