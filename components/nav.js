import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div>
        <div class="bg-indigo-700 px-5 py-5 text-center sm:text-left mb-3">
          <Link href="/">
            <h4 class="text-3xl text-white font-bold">Christian Blank</h4>
          </Link>
        </div>
      </div>
    </nav>
  );
}
