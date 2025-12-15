import React from 'react'
import Image1 from '../assets/image1.jpg'
import { GrFormNextLink } from "react-icons/gr";
import { MdKeyboardBackspace } from "react-icons/md";
import Image2 from '../assets/image5.jpg'
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { ImQuotesLeft } from "react-icons/im";
import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';
import banner4 from '../assets/banner-4.png';
import banner5 from '../assets/banner-5.png';
import { AiOutlineFilePdf } from "react-icons/ai";

const Athletics = () => {
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
        <div className="absolute text-white bottom-20 left-20">
          <h1 className="text-2xl font-semibold text-green-600">
            Go For KU Team!
          </h1>
          <h1 className="mt-2 text-5xl font-semibold">
            Athletics
          </h1>
        </div>
      </div>
      <div className='flex py-5 font-semibold ml-28'>
        <a href="" className='text-gray-600'>Home</a> <h1 className='ml-3'>{">"}</h1>
        <h1 className='ml-3 text-green-600'> Athletics</h1>
      </div>
      <div className='ml-28 mt-3 bg-green-600 h-[4px] w-[300px]'></div>
      <div className='flex flex-col gap-5 py-10 px-28'>
        <p className='text-xl text-green-600'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
          there live the blind texts. Separated they live in</p>
        <p className='text-xl text-gray-500'>Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so.</p>
      </div>

      <div className='flex justify-between py-10 px-28'>
        <div >
          <div>
            <div className='flex items-center '>
              <h1 className='text-2xl font-semibold whitespace-nowrap'>News & Updates</h1> <div className='w-[570px] ml-2 h-[2px] bg-gray-300'></div>
            </div>
            <p className='text-green-600'>Read All New</p>
            <div className='flex'>
              <div>
                <a href="">
                  <img src={Image2} alt="" className='mt-7 h-[250px] object-cover rounded-lg' />
                </a>
                <div className='flex flex-col gap-2 mt-8'>
                  <a className='font-semibold text-gray-600 uppercase' href="">June 6, 2016  /  Admission, Student</a>
                  <a className='text-xl font-semibold' href="">Professor Albert joint research on <br /> mobile money in Tanzania</a>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center ml-4 '>
                  <a href=""> <img src={Image2} alt="" className='mt-7 h-[80px] object-cover rounded-lg' /></a>
                  <div className='flex-col mt-6 ml-2'>
                    <a className='font-semibold text-gray-600' href="">June 6, 2016  /  Hot, Updates</a> <br />
                    <a className='font-semibold' href="">A Global MBA for the next <br /> generation of business leaders</a>
                  </div>
                </div>
                <div className='flex items-center ml-4 '>
                  <a href=""> <img src={Image2} alt="" className='mt-7 h-[80px] object-cover rounded-lg' /></a>
                  <div className='flex-col mt-6 ml-2'>
                    <a className='font-semibold text-gray-600' href="">June 6, 2016  /  Admission, Event</a> <br />
                    <a className='font-semibold' href="">Professor Tom comments on <br /> voluntary recalls by snack brands</a>
                  </div>
                </div>
                <div className='flex items-center ml-4 '>
                  <a href=""> <img src={Image2} alt="" className='mt-7 h-[80px] object-cover rounded-lg' /></a>
                  <div className='flex-col mt-6 ml-2'>
                    <a className='font-semibold text-gray-600' href="">June 6, 2016  /  Article, Research</a> <br />
                    <a className='font-semibold' href="">Professor Alexa is interviewed <br /> about Twitter’s valuation</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div >
          <div className='flex items-center'>
            <h1 className='text-2xl font-semibold whitespace-nowrap'>Upcoming Events</h1>
            <div className='w-[200px] ml-2 h-[2px] bg-gray-300'></div>
          </div>
          <div className='flex items-center mt-4'>
            <div className='flex flex-col items-center mt-7'>
              <h1 className='text-5xl font-semibold text-green-600'>17</h1>
              <h1 className='text-lg font-semibold '>DCE</h1>
              <div className='w-[40px] mt-2 h-[2px] bg-green-600'></div>
            </div>

            <div className='ml-4'>
              <h1 className='mt-8 text-xl font-semibold text-blue-950'>Fintech & Key Investment Conference</h1>
              <div className='flex mt-1 text-center text-green-600'>
                <IoMdTime className='mt-[3px]' />
                <p className='ml-2 text-sm'>1:00 pm - 1:00 pm</p>
                <IoLocationOutline className='mt-[3px] ml-3' />
                <p className='ml-2 text-sm'>Kingster Grand Hall</p>
              </div>
            </div>
          </div>
          <div className='flex items-center mt-4'>
            <div className='flex flex-col items-center mt-7'>
              <h1 className='text-5xl font-semibold text-green-600'>04</h1>
              <h1 className='text-lg font-semibold '>NOV</h1>
              <div className='w-[40px] mt-2 h-[2px] bg-green-600'></div>
            </div>

            <div className='ml-4'>
              <h1 className='mt-8 text-lg font-semibold text-blue-950'>Sport Management Information Webinar</h1>
              <div className='flex mt-1 text-green-600'>
                <IoMdTime className='mt-[3px]' />
                <p className='ml-2 text-sm'>1:00 pm - 1:00 pm</p>
                <IoLocationOutline className='mt-[3px] ml-3' />
                <p className='ml-2 text-sm'>Kingster Grand Hall</p>
              </div>
            </div>
          </div>
          <div className='flex items-center mt-4'>
            <div className='flex flex-col items-center mt-7'>
              <h1 className='text-5xl font-semibold text-green-600'>11</h1>
              <h1 className='text-lg font-semibold '>SEP</h1>
              <div className='w-[40px] mt-2 h-[2px] bg-green-600'></div>
            </div>

            <div className='ml-4'>
              <h1 className='mt-8 text-lg font-semibold text-blue-950'>Planning and Facilitating Effective Meetings</h1>
              <div className='flex mt-1 text-green-600'>
                <IoMdTime className='mt-[3px]' />
                <p className='ml-2 text-sm'>1:00 pm - 1:00 pm</p>
                <IoLocationOutline className='mt-[3px] ml-3' />
                <p className='ml-2 text-sm'>Kingster Grand Hall</p>
              </div>
            </div>
          </div>
          <div className='flex items-center font-semibold text-md mt-11 text-blue-950 '>
            <a href="">View All Events </a><GrFormNextLink className='ml-3 text-lg' />
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='w-1/2'>
          <img src={Image2} alt="" className='object-cover h-[500px] w-[770px] ' />
        </div>
        <div className='flex flex-col justify-center w-1/2 pl-20 bg-gray-200'>
          <ImQuotesLeft className='text-6xl text-green-600' />
          <p className='mt-5 text-2xl font-bold text-gray-700'>Our goal is to be at the heart of the financial <br /> services industry as businesses expand across.</p>
          <h1 className='mt-5 text-xl font-bold text-gray-700'>John Smith / CEO Of Financity</h1>
        </div>
      </div>

      <div className='flex justify-center gap-5 bg-[#1A1E36] py-14'>
        <img src={banner1} alt="" />
        <img src={banner2} alt="" />
        <img src={banner3} alt="" />
        <img src={banner4} alt="" />
        <img src={banner5} alt="" />

      </div>

      <div className='flex gap-20 p-28'>
        <div className='flex flex-col w-1/2 gap-6'>
          <h1 className='text-2xl font-semibold'>KU Team Has A Long Story</h1>
          <p className='text-xl text-green-600'>KU Team Has A Long Story
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
          <p className='text-gray-500 text-md'>
            Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>
        <div className='flex flex-col w-1/2 gap-8'>
          <div className='bg-green-600 h-[3px] w-full'></div>
          <h1 className='text-2xl font-semibold'>How To Participate?</h1>
          <p className='text-gray-500 text-md'>
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
          </p>
          <div>
            <button className='flex items-center p-4 px-8 font-bold text-white bg-green-600 rounded-sm hover:bg-green-700'>Athletics Guide Book <AiOutlineFilePdf className='ml-2 text-lg' /></button>
          </div>
        </div>

      </div>

      {/* Footer */}
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

export default Athletics