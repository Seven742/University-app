import React from 'react'
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image5.jpg'
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
const Alumni = () => {

  const events = [
    {
      day: "17",
      month: "DEC",
      title: "Fintech & Key Investment Conference",
      image: Image1,
    },
    {
      day: "04",
      month: "NOV",
      title: "Sport Management Information Webinar",
      image: Image1,
    },
    {
      day: "11",
      month: "SEP",
      title: "Planning and Facilitating Effective Meetings",
      image: Image1,
    },
  ];

  const News = [
    {
      image: Image1,
      date: "June 6 2016 / Blog",
      title: "Professor Albert joint research on mobile money in Tanzania"
    },
    {
      image: Image1,
      date: "June 6, 2016 / Masonry",
      title: "A Global MBA for the next generation of business leaders"
    },
    {
      image: Image1,
      date: "June 6, 2016 / Blog",
      title: "Professor Tom comments on voluntary recalls by snack brands"
    },
  ]

  const Enjoys = [
    {
      image: Image1,
      title: "15% Off For Restaurant in KU",
      text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.",
    },
    {
      image: Image1,
      title: "40% Off KU Fitness",
      text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.",
    },
    {
      image: Image1,
      title: "Free Library Access",
      text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.",
    },
  ]


  return (
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
        <div className="absolute flex text-white bottom-24 px-28 gap-36">
          <div>
            <h1 className='text-5xl font-bold whitespace-nowrap'>Alumni</h1>
            <div className='bg-green-600 h-[5px] w-[250px] mt-6'></div>
          </div>
          <div>
            <p className='text-xl '>
              From your time as a student to your post-graduate experience as an alumni, Kingster’s support and amenities continue, as a result of your connection to the KU Alumni Network, now over 150,000 people.</p>
          </div>
        </div>
      </div>

      <div className='px-28 py-14'>
        <div>
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold whitespace-nowrap text-blue-950'>
              Alumni Events
            </h1>
            <div className='bg-gray-300 ml-4 h-[2px] w-full'></div>
          </div>
          <h1 className='mt-1 text-green-600 text-md'>View All Events</h1>

        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div key={index}>
                {/* IMAGE */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full rounded-md h-52"
                />

                {/* CONTENT */}
                <div className="flex items-center mt-4">
                  {/* DATE */}
                  <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-semibold text-green-600">
                      {event.day}
                    </h1>
                    <h1 className="text-lg font-bold text-blue-950">
                      {event.month}
                    </h1>
                    <div className="w-10 mt-2 h-[2px] bg-green-600"></div>
                  </div>

                  {/* TEXT */}
                  <div className="ml-4">
                    <h1 className="text-xl font-semibold text-blue-950">
                      {event.title}
                    </h1>

                    <div className="flex items-center mt-1 text-sm text-green-600">
                      <IoMdTime />
                      <p className="ml-2">1:00 pm - 1:00 pm</p>

                      <IoLocationOutline className="ml-4" />
                      <p className="ml-2">Kingster Grand Hall</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className='px-28 '>
        <div>
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold whitespace-nowrap text-blue-950'>
              Alumni Events
            </h1>
            <div className='bg-gray-300 ml-4 h-[2px] w-full'></div>
          </div>
          <h1 className='mt-1 text-green-600 text-md'>View All Events</h1>

        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {News.map((New, index) => (
              <div key={index}>

                {/* IMAGE WRAPPER */}
                <div className="relative overflow-hidden rounded-md cursor-pointer group h-52">

                  {/* IMAGE */}
                  <img
                    src={New.image}
                    alt=""
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* BLACK BLUR OVERLAY */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-black/50 group-hover:opacity-100"
                  ></div>

                </div>

                {/* DATE */}
                <div className="mt-5 font-semibold text-gray-500 text-md">
                  <a href="">{New.date}</a>
                </div>

                {/* TITLE */}
                <div className="mt-1 text-xl font-semibold text-blue-950">
                  <a href="">{New.title}</a>
                </div>

                {/* BUTTON */}
                <div className="mt-6">
                  <button className="px-8 py-3 font-bold text-white bg-green-600 rounded-sm text-md hover:bg-green-700">
                    Read More
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>


      </div>

      <div className="relative mt-20">
        <img
          src={Image1}
          alt=""
          className="h-[500px] w-full object-cover"
        />

        {/* bottom dark fade only */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t bg-[#0E2659]/80 to-transparent">
        </div>

        {/* text */}
        <div className="absolute flex text-white bottom-24 px-28 gap-36">
          <div>
            <h1 className='text-3xl font-bold text-green-600 whitespace-nowrap'>Kingster Alumni</h1>

          </div>
          <div>
            <p className='text-2xl text-gray-300'>
              We are one of the largest, most diverse universities in the USA with over 90,000 students in USA, and a further 30,000 studying across 180 countries for Kingster University.
            </p>

            <p className='text-xl text-white mt-7'>
              Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.
            </p>

            <div className='flex items-center font-bold mt-7'>
              <a href="" className='text-lg '>Read More</a><GrFormNextLink className='mt-1 ml-3 text-lg' />
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 mt-3 px-28'>
        <h1 className='text-2xl font-bold'>Enjoy Benefits & Privileges</h1>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Enjoys.map((Enjoy, index) => (
              <div key={index}>

                {/* IMAGE WRAPPER */}
                <div className="relative overflow-hidden rounded-md cursor-pointer group h-52">

                  {/* IMAGE */}
                  <img
                    src={Enjoy.image}
                    alt=""
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* BLACK BLUR OVERLAY */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-black/50 group-hover:opacity-100"
                  ></div>

                </div>

                {/* TITLE */}
                <div className="text-lg font-semibold text-black mt-7">
                  <a href="">{Enjoy.title}</a>
                </div>

                {/* Title */}
                <div className="mt-5 text-gray-600 text-md">
                  <a href="">{Enjoy.text}</a>
                </div>

                {/* BUTTON */}
                <div className='flex items-center mt-6 text-green-600 '>
                  <a href="" className='text-md '>Read More</a><GrFormNextLink className='mt-1 ml-3 text-lg' />
                </div>

              </div>
            ))}
          </div>
        </div>


      </div>
      <div className='flex'>
        <div className='w-1/2'>
          <img src={Image2} alt="" className='object-cover h-[500px] w-[770px] ' />
        </div>
        <div className='flex flex-col justify-center w-1/2 pl-20 bg-blue-950'>
          <h1 className='text-4xl font-bold text-white'>Steve Cook</h1>
          <h1 className='mt-3 font-semibold text-green-600 text-md'>CEO, Apple and MBA, Kingster</h1>
          <p className='mt-5 text-lg text-white pr-28'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. Housed in a nice, gilded frame.</p>
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

export default Alumni