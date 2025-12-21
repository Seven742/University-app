import { Link, Outlet } from "react-router-dom";
import { IoMailOpen, IoSearch } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
// https://demo.goodlayers.com/kingster/
const App = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-around text-gray-300 bg-blue-900 gap-[360px]">
        <div className="flex px-4 py-5">
          <div className="flex items-center">
            <IoMailOpen /><p className="ml-2"> contact@KUTheme.edu </p>
          </div>
          <div className="flex items-center ml-5">
            <MdOutlineLocalPhone /><p className="ml-2"> +1-3435-2356-222</p>
          </div>
        </div>

        <div>
          <ul className="flex">
            <li className="px-4 py-5 hover:text-white"> <Link to="/Alumni">Alumni</Link></li>
            <li className="px-4 py-5 hover:text-white"> <Link to="/Calender">Calendar</Link></li>
            <li className="px-4 py-5 hover:text-white"> <Link to="/Portal">Portal</Link></li>
            <li className="px-6  h-16 flex items-center font-semibold bg-[#3ECC77] text-white "> <Link to="/Support">Support UR</Link></li>
          </ul>
        </div>
      </div>
      <div className="sticky top-0 z-50 flex items-center justify-around p-6 font-semibold text-blue-900 bg-white shadow-lg">
        {/* sticky top-0 z-50 make it to stay on top when scroll down */}
        <div className="flex items-center gap-3 text-3xl font-thin">
          <GiBookmarklet /><h1 className="text-3xl">KUTheme </h1><span className="text-3xl text-black">University</span>
        </div>
        <div className="">
          <ul className="flex gap-12 text-md">
            <li> <Link className="Navbar" to="/">Home</Link></li>
            <li> <Link className="Navbar" to="/Page">About</Link></li>
            <li> <Link className="Navbar" to="/academics">Academics</Link></li>
            <li> <Link className="Navbar" to="/Admission">Admission</Link></li>
            <li> <Link className="Navbar" to="/Courses">Courses</Link></li>
            <li> <Link className="Navbar" to="/Athletics">Athletics</Link></li>
            <div className="flex items-center">
              <li className="flex items-center Navbar"> <Link className="mr-5" to="/University">University Lift</Link></li>
              <IoSearch className="text-black cursor-pointer" />
            </div>
          </ul>
        </div>
      </div>

      {/* This renders the selected page */}
      <Outlet />
    </div>
  );
}

export default App;
