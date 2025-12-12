import React from 'react'
import Image1 from '../assets/image1.jpg'
import { MdCastForEducation } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

const Admission = () => {
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
            Admission
          </h1>
          <h1 className="mt-2 text-5xl font-semibold">
            Apply to Kingster
          </h1>
        </div>
      </div>
      <div className='flex py-5 font-semibold ml-28'>
        <a href="" className='text-gray-600'>Home</a> <h1 className='ml-3'>{">"}</h1>
        <h1 className='ml-3 text-green-600'>Apply to Kingster</h1>
      </div>
      <div className='py-12 ml-28'>
        <div>
          <h1 className='text-3xl font-semibold'>Detail About How To Apply</h1>
        </div>
        <div className='flex justify-around mt-6 text-lg text-gray-600 gap-14 mr-28' >
          <p>If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community with a full range of backgrounds. If you would like to study in the university in the heart of the city.</p>
          <p>If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community.</p>
        </div>
      </div>
      <div>
        <div className='flex w-full gap-5 p-20 bg-blue-950 justify-evenly'>
          <div className='flex flex-col text-start'>
            <MdCastForEducation className='text-green-600 icon' />
            <h2 className='mt-5 text-2xl font-semibold text-white'>Education Services</h2>
            <p className='mt-5 text-lg text-white/80'>Kingster University was established <br /> by John Smith in 1920 for the public <br /> benefit and it is recognized.</p>
          </div>

          <div className='flex flex-col text-start'>
            <FaGlobeAmericas className='text-green-600 icon' />
            <h2 className='mt-5 text-2xl font-semibold text-white'>International Hubs</h2>
            <p className='mt-5 text-lg text-white/80'>Kingster University was established <br /> by John Smith in 1920 for the public <br /> benefit and it is recognized.</p>
          </div>
          <div className='flex flex-col text-start'>
            <GrNotes className='text-green-600 icon' />
            <h2 className='mt-5 text-2xl font-semibold text-white'>Bachelor’s and Master’s</h2>
            <p className='mt-5 text-lg text-white/80'>Kingster University was established <br /> by John Smith in 1920 for the public <br /> benefit and it is recognized.</p>
          </div>
          <div className='flex flex-col text-start'>
            <LiaUniversitySolid className='text-green-600 icon' />
            <h2 className='mt-5 text-2xl font-semibold text-white'>University Life</h2>
            <p className='mt-5 text-lg text-white/80'>Kingster University was established <br /> by John Smith in 1920 for the public <br /> benefit and it is recognized.</p>
          </div>
        </div>
      </div>

      <div className='py-20 px-28'>
        <div>
          <h1 className='text-3xl'>The Application Process</h1>
        </div>
        <div className='flex gap-2 mt-10'>
          <div className='flex '>
            <div>
              <h1 className='text-5xl font-semibold text-green-600'>1</h1>
            </div>
            <div className='ml-7'>
              <h1 className='mt-1 text-xl font-semibold text-blue-950'>Start Online Submission</h1>
              <p className='mt-3 text-lg text-gray-600'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>
            </div>
          </div>
          <div className='flex '>
            <div>
              <h1 className='text-5xl font-semibold text-green-600'>2</h1>
            </div>
            <div className='ml-7'>
              <h1 className='mt-1 text-xl font-semibold text-blue-950'>Start Online Submission</h1>
              <p className='mt-3 text-lg text-gray-600'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>
            </div>
          </div>
          <div className='flex '>
            <div>
              <h1 className='text-5xl font-semibold text-green-600'>3</h1>
            </div>
            <div className='ml-7'>
              <h1 className='mt-1 text-xl font-semibold text-blue-950'>Start Online Submission</h1>
              <p className='mt-3 text-lg text-gray-600'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>
            </div>
          </div>
        </div>

        <div className='flex gap-2 mt-10'>
          <div className='flex '>
            <div>
              <h1 className='text-5xl font-semibold text-green-600'>4</h1>
            </div>
            <div className='ml-7'>
              <h1 className='mt-1 text-xl font-semibold text-blue-950'>Start Online Submission</h1>
              <p className='mt-3 text-lg text-gray-600'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>
            </div>
          </div>
          <div className='flex '>
            <div>
              <h1 className='text-5xl font-semibold text-green-600'>5</h1>
            </div>
            <div className='ml-7'>
              <h1 className='mt-1 text-xl font-semibold text-blue-950'>Start Online Submission</h1>
              <p className='mt-3 text-lg text-gray-600'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>
            </div>
          </div>
          <div className='flex '>
            <div>
              <h1 className='text-5xl font-semibold text-green-600'>6</h1>
            </div>
            <div className='ml-7'>
              <h1 className='mt-1 text-xl font-semibold text-blue-950'>Start Online Submission</h1>
              <p className='mt-3 text-lg text-gray-600'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>
            </div>
          </div>
        </div>
        <div className='h-[2px] bg-green-600 w-full mt-14'></div>
      </div>

      <div className='flex justify-between px-28'>
        <div>
          <h1 className='text-2xl font-semibold'>Things To Know First</h1>
          <p className='text-lg text-gray-600 mt-7 '>The Common Application is required for students applying to any or all of KU’s three degree. You’ll be able to choose your campus and program s that you are interested.</p>
          <h1 className='mt-5 text-lg text-gray-600'>You will need :</h1>

          <div className="py-6">
            <ul className="flex flex-col gap-4 text-xl">
              {[
                "Contact information for the counselor or other school representative who will complete your Common Application School Report and submit your official high school transcript.",
                "Contact information for one teacher (or two, maximum) who will complete the Teacher Evaluation form.",
                "Nonrefundable $50 application fee. Students who are unable to pay the application fee can request a fee waiver.",

              ].map((item, i) => (
                <li key={i} className="flex gap-2 pr-10">
                  <VscDebugBreakpointDataUnverified className="text-3xl text-blue-900" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex gap-4 py-8 pb-16'>
            <button className='px-6 py-4 text-lg font-semibold text-white bg-green-600 rounded-sm'>Request a campus tour</button>
            <button className='px-6 py-4 text-lg font-semibold text-white bg-green-600 rounded-sm'>Request information</button>
          </div>
        </div>
        <div >
          <h1 className='text-2xl font-semibold'>When To Apply?</h1>
          <table className="mt-6 border-separate border-spacing-0.5">


            <thead>
              <tr class="bg-green-500 text-white">
                <th class="py-3 px-24 text-center"> </th>
                <th class="py-3 px-4 text-center whitespace-nowrap">Application Deadline</th>
                <th class="py-3 px-14 text-center">Decision</th>
              </tr>
            </thead>


            <tbody class="text-gray-600 text-lg">

              <tr class="bg-gray-100">
                <td class="py-3 px-6 text-center">Early Decision 1</td>
                <td class="py-3 px-6 text-center">November 1</td>
                <td class="py-3 px-6 text-center">December 15</td>
              </tr>

              <tr class="bg-white">
                <td class="py-3 px-6 text-center">Early Decision 2</td>
                <td class="py-3 px-6 text-center">January 1</td>
                <td class="py-3 px-6 text-center">February 15</td>
              </tr>

              <tr class="bg-gray-100">
                <td class="py-3 px-6 text-center">Regular Decision</td>
                <td class="py-3 px-6 text-center">January 1</td>
                <td class="py-3 px-6 text-center">April 1</td>
              </tr>

            </tbody>
          </table>
          <h1 className='text-2xl font-semibold mt-9'>Where to submit necessary documents?</h1>
          <p className='mt-5 font-semibold text-gray-500 text-md'>Documents not submitted through the online method can be mailed to:</p>
          <h1 className='mt-4 text-gray-400 text-md'>Box 35300</h1>
          <h1 className='mt-2 text-gray-400 text-md'>1810 Campus Way NE</h1>
          <h1 className='mt-2 text-gray-400 text-md'>Bothell, WA 98011-8246 USA</h1>

        </div>

      </div>


      <div>
        <footer>
          <div className='w-full h-[400px] bg-black/90 flex items-center justify-center text-white gap-20 px-20'>
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

export default Admission