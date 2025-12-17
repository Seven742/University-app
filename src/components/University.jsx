import React from 'react'
import Image1 from '../assets/image1.jpg'
import { CgGym } from "react-icons/cg";
import { GiChampions } from "react-icons/gi";
import { MdOutlineDirectionsTransit } from "react-icons/md";
import { LuSquareParking } from "react-icons/lu";
import { ImQuotesLeft } from "react-icons/im";
import Image2 from '../assets/image5.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { GrFormNextLink } from "react-icons/gr";

const University = () => {
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
            <h1 className='text-5xl font-bold whitespace-nowrap'>University Life</h1>
            <div className='bg-green-600 h-[5px] w-full mt-6'></div>
          </div>
          <div>
            <p className='text-xl'>
              Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='flex flex-col w-1/2 gap-7 py-14 px-28'>
          <h1 className='text-2xl font-bold'>Event and Traditions</h1>
          <p className='text-xl text-green-600'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
          <p className='text-lg text-gray-500'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
          <div className='bg-green-600 h-[3px] w-full mt-6'></div>

          <div className="w-full h-80 perspective group">
            <div
              className="relative w-full h-full mt-6 transition-transform duration-700 preserve-3d group-hover:rotate-y-180"
            >
              {/* FRONT */}
              <div className="absolute inset-0 flex flex-col justify-center bg-green-600 rounded-lg shadow-xl backface-hidden">

                <div className="px-10 py-5">
                  <CgGym className='text-6xl text-white' />
                  <h2 className="mt-4 text-2xl font-bold text-white ">
                    Student Activities
                  </h2>
                  <p className="mt-4 text-lg text-white">Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.

                  </p>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 flex flex-col justify-center px-10 py-6 text-white bg-green-600 rounded-lg shadow-xl backface-hidden rotate-y-180">
                <GiChampions className='text-6xl text-white' />
                <h2 className="mt-4 text-2xl font-bold text-white ">
                  Social Life
                </h2>
                <p className="mt-4 text-lg text-white">Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 bg-gray-200 py-14 px-28'>
          <div>
            <img src={Image1} alt="" className=' object-cover h-[300px] w-full' />
            <div className='flex items-center mt-12'>
              <MdOutlineDirectionsTransit className='text-4xl text-gray-600' /><h1 className='ml-4 text-xl font-bold'>Transportations</h1>
            </div>
            <h1 className='mt-6 text-xl font-bold text-gray-600'>There are many options to travel in the campus.</h1>
            <p className='mt-6 text-lg text-gray-500'>There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic. It is a paradise matic country, in which roasted parts of sentences fly into.</p>
            <div className='flex items-center mt-6'>
              <LuSquareParking className='text-4xl text-gray-600' /><h1 className='ml-4 text-xl font-bold'>Parking</h1>
            </div>
          </div>
          <p className='mt-6 text-lg text-gray-500'>More than 1000 parking lots avilable in the west side of the compus. <strong>The parking is available 24 hours</strong> with 24hours security. We make sure that everything is under control.</p>

        </div>
      </div>
      <div className="relative">
        <img
          src={Image1}
          alt=""
          className="h-[400px] w-full object-cover"
        />

        {/* bottom dark fade only */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t bg-[#0E2659]/80 to-transparent">
        </div>

        {/* text */}
        <div className="absolute flex text-white bottom-24 px-28 gap-36">
          <div>
            <h1 className='text-3xl font-bold whitespace-nowrap'>The Campus Experience</h1>

          </div>
          <div>
            <p className='text-2xl font-semibold text-gray-200'>
              Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-10 p-28'>
        <div className='flex justify-between '>
          <div class="w-[400px] rounded-lg overflow-hidden shadow-lg group 
            hover:-translate-y-2 hover:shadow-2xl 
            transition-all duration-500">


            <div class="relative h-48 overflow-hidden">
              <img
                src={Image1}
                class="w-full h-full object-cover 
             transition-transform duration-500 
             group-hover:scale-110"
              />


              <div
                class="absolute inset-0 bg-black/60 opacity-0 
             group-hover:opacity-100 
             transition duration-500 
             flex items-center justify-center"
              >
                <button
                  class="px-5 py-2 bg-white text-black rounded-full 
               translate-y-6 opacity-0 
               group-hover:translate-y-0 group-hover:opacity-100 
               transition duration-500"
                >
                  View
                </button>
              </div>
            </div>
            <div class="p-5 bg-white">
              <h2 class="text-lg font-semibold">Dining On Campus</h2>
              <p class="text-gray-500 text-md mt-4">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.
              </p>
              <div className='flex items-center mt-4 text-green-600'>
                <a href="">Read More</a><GrFormNextLink className='mt-1 ml-3' />
              </div>
            </div>
          </div>
          <div class="w-[400px] rounded-lg overflow-hidden shadow-lg group 
            hover:-translate-y-2 hover:shadow-2xl 
            transition-all duration-500">


            <div class="relative h-48 overflow-hidden">
              <img
                src={Image1}
                class="w-full h-full object-cover 
             transition-transform duration-500 
             group-hover:scale-110"
              />


              <div
                class="absolute inset-0 bg-black/60 opacity-0 
             group-hover:opacity-100 
             transition duration-500 
             flex items-center justify-center"
              >
                <button
                  class="px-5 py-2 bg-white text-black rounded-full 
               translate-y-6 opacity-0 
               group-hover:translate-y-0 group-hover:opacity-100 
               transition duration-500"
                >
                  View
                </button>
              </div>
            </div>
            <div class="p-5 bg-white">
              <h2 class="text-lg font-semibold">Athletics</h2>
              <p class="text-gray-500 text-md mt-4">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.
              </p>
              <div className='flex items-center mt-4 text-green-600'>
                <a href="">Read More</a><GrFormNextLink className='mt-1 ml-3' />
              </div>
            </div>
          </div>
          <div class="w-[400px] rounded-lg overflow-hidden shadow-lg group 
            hover:-translate-y-2 hover:shadow-2xl 
            transition-all duration-500">


            <div class="relative h-48 overflow-hidden">
              <img
                src={Image1}
                class="w-full h-full object-cover 
             transition-transform duration-500 
             group-hover:scale-110"
              />


              <div
                class="absolute inset-0 bg-black/60 opacity-0 
             group-hover:opacity-100 
             transition duration-500 
             flex items-center justify-center"
              >
                <button
                  class="px-5 py-2 bg-white text-black rounded-full 
               translate-y-6 opacity-0 
               group-hover:translate-y-0 group-hover:opacity-100 
               transition duration-500"
                >
                  View
                </button>
              </div>
            </div>
            <div class="p-5 bg-white">
              <h2 class="text-lg font-semibold">Arts & Culture</h2>
              <p class="text-gray-500 text-md mt-4">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.
              </p>
              <div className='flex items-center mt-4 text-green-600'>
                <a href="">Read More</a><GrFormNextLink className='mt-1 ml-3' />
              </div>
            </div>
          </div>

        </div>
        <div className='flex justify-between'>
          <div class="w-[400px] rounded-lg overflow-hidden shadow-lg group 
            hover:-translate-y-2 hover:shadow-2xl 
            transition-all duration-500">


            <div class="relative h-48 overflow-hidden">
              <img
                src={Image1}
                class="w-full h-full object-cover 
             transition-transform duration-500 
             group-hover:scale-110"
              />


              <div
                class="absolute inset-0 bg-black/60 opacity-0 
             group-hover:opacity-100 
             transition duration-500 
             flex items-center justify-center"
              >
                <button
                  class="px-5 py-2 bg-white text-black rounded-full 
               translate-y-6 opacity-0 
               group-hover:translate-y-0 group-hover:opacity-100 
               transition duration-500"
                >
                  View
                </button>
              </div>
            </div>
            <div class="p-5 bg-white">
              <h2 class="text-lg font-semibold">Information Technology</h2>
              <p class="text-gray-500 text-md mt-4">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.
              </p>
              <div className='flex items-center mt-4 text-green-600'>
                <a href="">Read More</a><GrFormNextLink className='mt-1 ml-3' />
              </div>
            </div>
          </div>
          <div class="w-[400px] rounded-lg overflow-hidden shadow-lg group 
            hover:-translate-y-2 hover:shadow-2xl 
            transition-all duration-500">


            <div class="relative h-48 overflow-hidden">
              <img
                src={Image1}
                class="w-full h-full object-cover 
             transition-transform duration-500 
             group-hover:scale-110"
              />


              <div
                class="absolute inset-0 bg-black/60 opacity-0 
             group-hover:opacity-100 
             transition duration-500 
             flex items-center justify-center"
              >
                <button
                  class="px-5 py-2 bg-white text-black rounded-full 
               translate-y-6 opacity-0 
               group-hover:translate-y-0 group-hover:opacity-100 
               transition duration-500"
                >
                  View
                </button>
              </div>
            </div>
            <div class="p-5 bg-white">
              <h2 class="text-lg font-semibold">Safety and Security</h2>
              <p class="text-gray-500 text-md mt-4">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.
              </p>
              <div className='flex items-center mt-4 text-green-600'>
                <a href="">Read More</a><GrFormNextLink className='mt-1 ml-3' />
              </div>
            </div>
          </div>
          <div class="w-[400px] rounded-lg overflow-hidden shadow-lg group 
            hover:-translate-y-2 hover:shadow-2xl 
            transition-all duration-500">


            <div class="relative h-48 overflow-hidden">
              <img
                src={Image1}
                class="w-full h-full object-cover 
             transition-transform duration-500 
             group-hover:scale-110"
              />


              <div
                class="absolute inset-0 bg-black/60 opacity-0 
             group-hover:opacity-100 
             transition duration-500 
             flex items-center justify-center"
              >
                <button
                  class="px-5 py-2 bg-white text-black rounded-full 
               translate-y-6 opacity-0 
               group-hover:translate-y-0 group-hover:opacity-100 
               transition duration-500"
                >
                  View
                </button>
              </div>
            </div>
            <div class="p-5 bg-white">
              <h2 class="text-lg font-semibold">Health & Wellness</h2>
              <p class="text-gray-500 text-md mt-4">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Dudenmouth.
              </p>
              <div className='flex items-center mt-4 text-green-600'>
                <a href="">Read More</a><GrFormNextLink className='mt-1 ml-3' />
              </div>
            </div>
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

export default University