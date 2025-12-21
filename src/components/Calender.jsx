import React from 'react'
import Image1 from '../assets/image1.jpg'
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";

const Calender = () => {

  const events = [
    {
      day: "17",
      month: "DEC",
      title: "Fintech & Key Investment Conference",
      image: Image1,
      time: "8:00 am - 8:00 am",
      location: "1:00 pm - 1:00 pm"
    },
    {
      day: "04",
      month: "NOV",
      title: "Sport Management Information Webinar",
      image: Image1,
      time: "1:00 pm - 1:00 pm",
      location: "Kingster Grand Hall"
    },
    {
      day: "11",
      month: "SEP",
      title: "Planning and Facilitating Effective Meetings",
      image: Image1,
      time: "8:00 am - 8:00 am",
      location: "Kingster Grand Hall"
    },
    {
      day: "02",
      month: "SEP",
      title: "Asia Pacific Studies Fall Festival",
      image: Image1,
      time: "8:00 am - 8:00 am",
      location: "Kingster Grand Hall"
    },
    {
      day: "07",
      month: "JAN",
      title: "Reunion Event : Kingster’s Alumni Golf Tour",
      image: Image1,
      time: "7:00 am - 7:00 am",
      location: "Kingster Grand Hall"
    },
    {
      day: "01",
      month: "JAN",
      title: "Kingster’s Alumni Hot Air Ballon Trip in Turkey",
      image: Image1,
      time: "10:00 am - 10:00 am",
      location: "Kingster Grand Hall"
    },
  ];
  return (
    <div>
      <div className="relative">
        <img
          src={Image1}
          alt=""
          className="h-[300px] w-full object-cover"
        />

        {/* bottom dark fade only */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t bg-[#1C2554]/90 to-transparent">
        </div>

        {/* text */}
        <div className="absolute flex text-white bottom-28 px-28 gap-36">
          <h1 className='text-6xl font-bold'>Event Calendar</h1>
        </div>
      </div>

      <div className="pb-20 mt-16 px-28">
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
                    <p className="ml-2">{event.time}</p>

                    <IoLocationOutline className="ml-4" />
                    <p className="ml-2">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default Calender