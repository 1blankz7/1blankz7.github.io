const MainArticleCard = () => (
  <div>
    <img className="article-image" src="https://picsum.photos/300/200" alt="" />
    <h2 className="text-gray-900 font-sans text-3xl my-5 font-thin">
      <a href="">How To Make More Travel By Doing Less</a>
    </h2>
    <span className="text-xs text-gray-800 font-thin block mb-5">
      By Page. December 02, 2019
    </span>
    <p className="article-body">
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts. Separated they live in
      Bookmarksgrove right at the coast...
    </p>
    <a href="./article-details.html" className="readmore">
      Read More...
    </a>
  </div>
);

export default MainArticleCard;
