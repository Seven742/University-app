import React from 'react'
import { useState } from 'react';
import Image1 from '../assets/image1.jpg'
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Profile from '../assets/profile.jpg'
import { MdAddToPhotos } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { GiBookmarklet } from "react-icons/gi";

const Academics = () => {
  const [active, setActive] = useState("benefits");

  const tabs = {
    benefits: {
      title: "Why Choose Kingster?",
      image: Profile,
      text: "The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!",
      text1: "Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector."
    },
    selfDev: {
      title: "Self Development",
      image: Profile,
      text: "The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!",
      text1: "Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector."
    },
    spiritual: {
      title: "Spirituality",
      image: Profile,
      text: "The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!",
      text1: "Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector."
    },
    alumni: {
      title: "Alumni",
      image: Profile,
      text: "The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!",
      text1: "Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector."
    },
  };

  return (
    <div>
      <div>
        <div>
          <div className="relative">
            <img
              src={Image1}
              alt=""
              className="h-[580px] w-full object-cover"
            />

            {/* bottom dark fade only */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent">
            </div>

            {/* text */}
            <div className="absolute text-white bottom-20 left-20">
              <h1 className="text-2xl font-semibold text-green-600">
                Undergraduate Program
              </h1>
              <h1 className="mt-2 text-5xl font-semibold">
                Bachelor Of Science in Business Administration
              </h1>
            </div>
          </div>

        </div>
      </div>
      <div className='flex py-5 font-semibold ml-28'>
        <a href="" className='text-gray-600'>Home</a> <h1 className='ml-3'>{">"}</h1>
        <h1 className='ml-3 text-green-600'> Bachelor Of Science in Business Administration</h1>
      </div>

      <div className="flex gap-20 px-28">

        {/* LEFT SIDE CONTENT */}
        <div className="flex-1">

          {/* Title + Description */}
          <div>
            <h1 className="text-3xl font-semibold">
              Outstanding Academics essential business experience
            </h1>

            <p className="pr-20 mt-5 text-lg text-gray-600">
              The Academic offers include 14 majors, 15 minors, and more than 100 in major
              specializations so your degree will surely reflect your interests and strengths.
            </p>

            <p className="pr-20 mt-5 text-lg text-gray-600">
              Not only does Kingster University provide you the practical skills necessary to
              transition seamlessly into the workforce upon your graduation, but we also make
              sure that you will have a good sense of social justice so that you make the
              transition responsibly.
            </p>
          </div>

          {/* Majors Section */}
          <div className="mt-10">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold">Majors</h1>
              <div className="bg-gray-400 h-[3px] flex-1 ml-6"></div>
            </div>

            <div className="flex gap-9 mt-7">

              {/* Major Item */}
              {["Accounting", "Marketing", "Finance"].map((item, index) => (
                <div key={index} className="relative w-64 h-32 overflow-hidden rounded">
                  <img src={Image1} alt="" className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-black/70"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a className="text-lg font-semibold text-white" href="">
                      {item}
                    </a>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Green Highlight Section */}
          <div className="mt-16">
            <p className="pr-20 text-2xl leading-relaxed text-green-600">
              If you’re an educational professional who is looking to progress into management
              and consultancy, or an educational planning or development role, this is the best
              degree for you.
            </p>

            <div className="bg-green-600 w-full max-w-[840px] h-[2px] mt-8"></div>

            <p className="pr-20 text-lg leading-relaxed text-gray-600 mt-7">
              Provided by the KU Institute of Education, this programme is available by distance
              learning, allowing you to study flexibly while balancing work and personal life.
              The MSc Finance (e.g., Banking) deepens your understanding of banks and financial
              markets, and how they relate to performance. It will help you to advance your
              career in finance and policy.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="py-6 mt-6">
            <ul className="flex flex-col gap-4 text-xl">
              {[
                "Banking",
                "Economic Policy",
                "Financial Sector Management",
                "Quantitative Finance",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <VscDebugBreakpointDataUnverified className="text-3xl text-blue-900" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* RIGHT SIDE CONTACT PANEL */}
        <div className="w-[400px] bg-blue-950 text-white px-7 py-14 rounded-md h-fit">

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Department Contact Info</h1>

            <h1 className='text-lg font-semibold text-green-600'>Bachelor Of Science in Business Administration</h1>

            <p className="leading-6">
              1810 Campus Way NE<br />
              Bothell, WA 98011-8246
            </p>

            <p className="leading-6">+1-2345-5432-45 <br /> bsba@kuuniver.edu</p>


            <p className="leading-6 text-green-600">
              Mon – Fri 9:00A.M. – 5:00P.M.
            </p>

            <div className="mt-6 space-y-3">
              <h1 className='text-2xl font-semibold'>Social Info</h1>

              <div className="flex items-center gap-4 text-2xl text-green-500">
                <a href=""><FaFacebook className='hover' /></a>
                <a href=""><FaLinkedin className='hover' /></a>
                <a href=""><FaTwitterSquare className='hover' /></a>
                <a href=""><FaSquareInstagram className='hover' /></a>
              </div>
            </div>

            <button className="w-full py-3 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 mt-14">
              Student Resources
            </button>
          </div>
        </div>
      </div>

      <div className='px-24 py-20 bg-gray-200'>
        <div className='flex bg-white'>
          {/* IMAGE */}
          <div>
            <img
              src={tabs[active].image}
              className="h-[550px] w-[900px] object-cover"
              alt=""
            />
          </div>
          <div className=" ml-14 py-7">

            {/* TAB BUTTONS */}
            <div className="flex gap-16 pb-5 border-b">
              <button
                className={`text-lg font-semibold ${active === "benefits" ? "text-blue-600" : "text-gray-500"
                  }`}
                onClick={() => setActive("benefits")}
              >
                Benefits
              </button>

              <button
                className={`text-lg font-semibold ${active === "selfDev" ? "text-blue-600" : "text-gray-500"
                  }`}
                onClick={() => setActive("selfDev")}
              >
                Self Development
              </button>

              <button
                className={`text-lg font-semibold ${active === "spiritual" ? "text-blue-600" : "text-gray-500"
                  }`}
                onClick={() => setActive("spiritual")}
              >
                Spirituality
              </button>

              <button
                className={`text-lg font-semibold ${active === "alumni" ? "text-blue-600" : "text-gray-500"
                  }`}
                onClick={() => setActive("alumni")}
              >
                Alumni
              </button>
            </div>

            {/* CONTENT AREA */}
            <div className="">



              {/* TEXT */}
              <div>
                <h2 className="mt-5 text-3xl font-bold">{tabs[active].title}</h2>
                <p className="pr-40 mt-5 text-lg text-gray-600">
                  {tabs[active].text}
                </p>
                <p className="pr-40 mt-5 text-lg text-gray-600">
                  {tabs[active].text1}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='py-20 px-28'>
        <h1 className='text-3xl font-semibold'>Why Study Here?</h1>
        <p className='mt-8 text-gray-600 text-md'>The Academic offers include 14 majors, 15 minors, and more than 100 in major specializations so your degree will surely reflect your interests and strengths.</p>
        <p className='mt-8 text-gray-600 text-md'>Not only does Kingster University provide you the practical skills that is necessary to transition seamlessly into the workforce upon your graduation, but we also make sure that you will have a good sense of social justice so that you make the transition responsibly.</p>
      </div>

     <div className="px-10 py-20 text-white bg-blue-950">
  <div className="grid items-center grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-2xl leading-relaxed">
        The PLP in Drafting Legislation, Regulation, and Policy <br />
        has been offered by the Institute of Advanced Legal <br />
        Studies with considerable success since 2004.
      </p>

      <div className="flex items-center gap-5 mt-8">
        <div className="flex items-center py-3 font-semibold bg-green-600 rounded-sm px-7 text-md">
          <button>Apply</button>
          <MdAddToPhotos className="ml-2" />
        </div>
        <div className="flex items-center py-3 font-semibold bg-green-600 rounded-sm px-7 text-md">
          <button>Download Brochure</button>
          <AiOutlineFilePdf className="ml-2" />
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-end mt-10 md:mt-0">
      <img
        src={Image1}
        alt=""
        className="w-full md:w-[600px] h-[350px] object-cover rounded"
      />
    </div>

  </div>
</div>


      <div>
        <footer>
          <div className='w-full h-[400px] bg-black/90 flex items-center  justify-center text-white gap-20 px-20'>
            <div className='text-lg'>
              <div className='flex items-center gap-3 text-center text-white'>
                <GiBookmarklet className='text-4xl' /><h1 className='text-2xl'>Kingster University</h1>
              </div>
              <div className='mt-7 flex flex-col gap-0.5 text-gray-300'>
                <h1 >Box 35300</h1>
                <h1>1810 Campus Way NE</h1>
                <h1>Bothell, WA 98011-8246</h1>
              </div>
              <div className='flex flex-col mt-5'>
                <h1>+1-2534-4456-345</h1>
                <a className='mt-3' href="">admin@kingsteruni.edu</a>
                <div className='h-[3px] mt-5 bg-green-600 w-full'></div>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-xl font-semibold'>Our Campus</h1>
                <div className='h-[3px] mt-2 bg-green-600 w-[270px]'></div>
              </div>
              <div className='flex flex-col gap-3 mt-5 text-gray-300 text-md'>
                <a className='hover' href="">Acedemic</a>
                <a className='hover' href="">Planning & Administration</a>
                <a className='hover' href="">Campus Safety</a>
                <a className='hover' href="">Office of the Chancellor</a>
                <a className='hover' href="">Facility Services</a>
                <a className='hover' href="">Human Resources</a>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-xl font-semibold'>Campus Life</h1>
                <div className='h-[3px] mt-2 bg-green-600 w-[270px]'></div>
              </div>
              <div className='flex flex-col gap-3 mt-5 text-gray-300 text-md'>
                <a className='hover' href="">Accessibility</a>
                <a className='hover' href="">Financial Aid</a>
                <a className='hover' href="">Food Services</a>
                <a className='hover' href="">Housing</a>
                <a className='hover' href="">Information Technologies</a>
                <a className='hover' href="">Student Life</a>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-xl font-semibold'>Academics</h1>
                <div className='h-[3px] mt-2 bg-green-600 w-[270px]'></div>
              </div>
              <div className='flex flex-col gap-3 mt-5 text-gray-300 text-md'>
                <a className='hover' href="">Canvas</a>
                <a className='hover' href="">Catalyst</a>
                <a className='hover' href="">Library</a>
                <a className='hover' href="">Time Schedule</a>
                <a className='hover' href="">Apply For Admissions</a>
                <a className='hover' href="">Pay My Tuition</a>
              </div>
            </div>
          </div>
          <div className='w-full h-[90px] bg-black/85 flex items-center justify-between px-28 text-white'>
            <div>
              <h1>Copyright All Right Reserved 2025, GoodLayers</h1>
            </div>
            <div className='flex items-center gap-4 text-xl text-green-600'>
              <a href=""><FaFacebook className='hover' /></a>
              <a href=""><FaLinkedin className='hover' /></a>
              <a href=""><FaTwitterSquare className='hover' /></a>
              <a href=""><FaSquareInstagram className='hover' /></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Academics