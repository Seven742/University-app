import { Link, Outlet } from "react-router-dom";
import { IoMailOpen , IoSearch } from "react-icons/io5";
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
            <li className="px-4 py-5 hover:text-white"> <Link to="/Calender">Calender</Link></li>
            <li className="px-4 py-5 hover:text-white"> <Link to="/Portal">Portal</Link></li>
            <li className="px-6  h-16 flex items-center font-semibold bg-[#3ECC77] text-white "> <Link to="/Support">Support UR</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-around p-6 font-semibold text-blue-900 bg-white shadow-lg">
        <div className="flex items-center gap-3 text-3xl font-thin">
          <GiBookmarklet /><h1 className="text-3xl">KUTheme </h1><span className="text-3xl text-black">University</span>
        </div>
        <div className="">
          <ul className="flex text-md gap-14">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/Page">Pages</Link></li>
            <li> <Link to="/academics">Academics</Link></li>
            <li> <Link to="/Admission">Admission</Link></li>
            <li> <Link to="/Courses">Courses</Link></li>
            <li> <Link to="/Athletics">Athletics</Link></li>
            <li className="flex items-center"> <Link className="mr-5" to="/University">University Lift</Link><IoSearch className="text-black cursor-pointer"/></li>
          </ul>
        </div>
      </div>

      {/* This renders the selected page */}
      <Outlet />
    </div>
  );
}

export default App;
