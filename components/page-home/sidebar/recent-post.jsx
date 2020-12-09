const RecentPost = () => (
  <li className="mb-3">
    <a href="" className="flex">
      <div className="w-1/3">
        <img className="rounded" src="https://picsum.photos/100/100" alt="" />
      </div>
      <div className="w-2/3 p-2">
        <h3 className="text-gray-900 font-thin font-serif mb-2">
          Use Travel To Make Someone Fall In Love...
        </h3>
        <span className="text-xs text-gray-800 font-thin block mb-5">
          December 02, 2019
        </span>
      </div>
    </a>
  </li>
);

export default RecentPost;