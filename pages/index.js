

export default function IndexPage() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto py-10">
            <ul className="flex flex-wrap -mx-2 overflow-hidden">
                <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <a href="">
                        <div className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded-lg overflow-hidden">
                            <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
                            <div className="relative z-20 text-center p-5">
                                <span className="inline-block text-white uppercase text-xs tracking-wide">Nature</span>
                                <h2 className="text-white font-semibold font-serif text-xl my-5">Spend time with nature to recharge yourself</h2>
                                <span className="inline-block text-xs text-white font-sans">December 02, 2019. By Debbie</span>
                            </div>
                        </div>
                    </a>
                </li>
                ...
            </ul>
        </div>
    </div>
    </>
  );
}
