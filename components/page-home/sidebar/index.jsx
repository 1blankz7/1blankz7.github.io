import RecentPost from "./recent-post";
import Image from "next/image";

const Sidebar = () => (
  <div className="ml-2 md:ml-4 mr-2">
    <div className="mt-20 sm:mt-0 text-center">
      <div className="w-64 h-64 rounded-full mx-auto relative">
        <Image src="/assets/cb.jpg" layout="fill" />
      </div>
      <h2 className="font-light text-xl my-5">I am</h2>
      <p className="article-body">
        I'm a researcher, founder, investor and former professional sportsman.
      </p>
    </div>
    <div className="mt-10">
      <h2 className="font-light text-xl mb-5 text-gray-900 text-center">
        Recent Posts
      </h2>
      <ul>
        <RecentPost />
        <RecentPost />
        <RecentPost />
      </ul>
    </div>
  </div>
);

export default Sidebar;
