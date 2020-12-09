import Link from "next/link";

export default function Nav() {
  return (
    <header className="max-w-5xl mx-auto pt-5">
      <div className="flex flex-wrap -mx-2 overflow-hidden px-5 lg:px-0">
        <div className="my-2 px-2 w-full overflow-hidden md:w-1/6 lg:w-1/3 xl:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-2xl font-serif">Christian Blank</h1>
        </div>

        <nav className="my-2 px-2 w-full overflow-hidden md:w-3/6 lg:w-1/3 xl:w-1/3 text-center md:text-left">
          <ul>
            <li className="inline-block block font-semibold px-3"><Link href="/">Home</Link></li>
            <li className="inline-block block font-semibold px-3"><Link href="/about">About</Link></li>
          </ul>
        </nav>

        <div className="my-2 px-2 w-full overflow-hidden md:w-2/6 lg:w-1/3 xl:w-1/3 text-center md:text-right">

        </div>

      </div>
    </header>
  );
}
