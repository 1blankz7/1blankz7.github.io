import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center sm:text-left">
      <div className="max-w-5xl mx-auto pb-10 pt-10 text-gray-900">
        <ul>
          <li className="inline-block block font-semibold px-3"><Link href="/">Home</Link></li>
          <li className="inline-block block font-semibold px-3"><Link href="/about">About</Link></li>
        </ul>
        <div className="sm:flex px-3">
          <div className="w-full sm:w-1/2">
            <h4 className="font-bold text-2xl pt-10">Christian Blank</h4>
            <span className="block pt-1 text-xs tracking-wider font-light">&copy;2020. All rights reserved.</span>
          </div>
          <div className="w-full sm:w-1/2 text-center md:text-right mt-10 sm:mt-0">
            <a href="" title="Twitter" className="inline-block w-6 mr-2">
              <svg className="fill-current" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><path d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0" /><path d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zm0 0M399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}