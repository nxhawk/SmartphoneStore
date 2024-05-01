import { Link } from "react-router-dom"
import { MdOutlineContactSupport } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { RiInformationLine } from "react-icons/ri";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-28">
    <div className="flex flex-col">
        <div className="flex flex-col items-center">
            <div className="text-indigo-500 font-bold text-7xl">
                404
            </div>

            <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                This page does not exist
            </div>

            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                The page you are looking for could not be found.
            </div>
        </div>

        <div className="flex flex-col mt-48">
            <div className="text-gray-400 font-bold uppercase">
                Continue With
            </div>

            <div className="flex flex-col items-stretch mt-5">
                <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                      <IoHomeOutline className="mx-auto text-indigo-800 text-2xl md:text-3xl"/>
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                            <Link to={'/'}>Home Page</Link>
                        </div>

                        <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                            Everything starts here
                        </div>
                    </div>

                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                </div>

                <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                        <ImNewspaper className="mx-auto 
                            text-indigo-800 text-2xl md:text-3xl"/>
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                        <Link to={'/news'}>News</Link>
                        </div>

                        <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                            Read our awesome articles
                        </div>
                    </div>

                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                </div>

                <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                        <RiInformationLine
                          className="mx-auto text-indigo-800 text-2xl md:text-3xl"
                        />
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                            <Link to={'/about'}>About</Link>
                        </div>

                        <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                            Read more about us
                        </div>
                    </div>

                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                </div>

                <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                      <MdOutlineContactSupport className="mx-auto 
                            text-indigo-800 text-2xl md:text-3xl" />
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                            <Link to={'/contact'}>Contact</Link>
                        </div>

                        <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                            Contact us for your questions
                        </div>
                    </div>

                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Notfound