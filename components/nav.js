import Link from "next/link";

export default function Nav() {
  return (
    <header class="max-w-5xl mx-auto pt-5">
      <div class="flex flex-wrap -mx-2 overflow-hidden px-5 lg:px-0">
        <div class="my-2 px-2 w-full overflow-hidden md:w-1/6 lg:w-1/3 xl:w-1/3 text-center md:text-left">
          <h1 class="font-bold text-2xl font-serif">Christian Blank</h1>
        </div>

        <nav class="my-2 px-2 w-full overflow-hidden md:w-3/6 lg:w-1/3 xl:w-1/3 text-center md:text-left">
          <ul>
            <li class="inline-block"><Link class="block font-semibold px-3" href="/">Home</Link></li>
            <li class="inline-block"><Link class="block font-semibold px-3" href="/about">About</Link></li>
          </ul>
        </nav>

        <div class="my-2 px-2 w-full overflow-hidden md:w-2/6 lg:w-1/3 xl:w-1/3 text-center md:text-right">

        </div>

      </div>
    </header>
  );
}
