import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <>
      <Nav />
      <div class="container mx-auto">
        <div class="px-2">
          <h4
            class="text-2xl text-indigo-700 font-medium mb-5 border-b sm:border-none"
          >
            Recently Added Articles
          </h4>
          <div class="flex flex-wrap -mx-2 sm:-mx-2 md:-mx-2 lg:-mx-2">
            <div class="w-full mb-5 sm:w-1/3 sm:mb-5 my-2 sm:mb-10">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
