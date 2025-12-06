import React from 'react'
import Image1 from '../assets/image1.jpg'
import { GiStabbedNote } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiShakeHandsLine } from "react-icons/ri";

const Page = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img src={Image1} alt="" className="h-[600px] w-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center mt-72 ml-20 items-start px-10 text-center text-white">
            <h1 className='text-green-600 text-2xl font-semibold'>Know Us Better</h1>
            <h1 className='text-6xl mt-2 font-semibold'>About Us</h1>
          </div>
        </div>
      </div>

      <div className='flex px-24 py-20 '>
        <div className='px-5 mr-10'>
          <h1 className=' whitespace-nowrap text-3xl font-semibold'>Kingster’s History</h1>
          <div className='h-[3px] mt-3 bg-green-600 w-full'></div>
        </div>
        <div className='flex'>
          <div>
            <p className='px-10'>If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community with a full range of backgrounds. If you would like to study</p>
          </div>
          <div>
            <p className='px-10'>If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicantt’s application, academic and personal, to select students who suit to our community.</p>
          </div>
        </div>
      </div>

      <div className=' relative'>
        <img src={Image1} alt="" className="h-[400px] w-full object-cover" />
        <div className="absolute inset-0 bg-black/90"></div>

        <div className=' absolute inset-0 '>
          <div className='flex w-full gap-20 px-28 justify-evenly p-14 mt-9'>
            <div className='flex flex-col text-start'>
              <GiStabbedNote className='text-green-600 icon' />
              <h2 className='mt-5 text-2xl font-semibold text-green-600'>Our Philosophy</h2>
              <p className='mt-5 text-lg text-white/80'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>

            </div>

            <div className='flex flex-col text-start'>
              <FaUniversity className='text-green-600 icon' />
              <h2 className='mt-5 text-2xl font-semibold text-green-600'>Kingster's Principle</h2>
              <p className='mt-5 text-lg text-white/80'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>

            </div>
            <div className='flex flex-col text-start'>
              <GiWorld className='text-green-600 icon' />
              <h2 className='mt-5 text-2xl font-semibold text-green-600'>Key Of Success</h2>
              <p className='mt-5 text-lg text-white/80'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>

            </div>

          </div>
        </div>
      </div>

      <div>
        <div className='flex'>
          <div className='px-[139px] mt-28'>
            <div >
              <FaUniversity className='text-6xl'/>
              <h1 className='text-3xl font-semibold mt-5'>Special Campus Tour</h1>
              <p className='mt-5 text-lg text-gray-600'>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
            </div>
          </div>
          <div>
            <img src={Image1} alt="" />
          </div>
        </div>

        <div className='flex'>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div className='px-[139px] mt-28'>
            <div>
              <RiGraduationCapLine className='text-6xl'/>
              <h1 className='text-3xl font-semibold mt-5'>Graduation</h1>
              <p className='mt-5 text-lg text-gray-600'>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className='px-[139px] mt-28'>
            <div >
              <RiShakeHandsLine className='text-6xl'/>
              <h1 className='text-3xl font-semibold mt-5'>Powerful Alumni</h1>
              <p className='mt-5 text-lg text-gray-600'>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
            </div>
          </div>
          <div>
            <img src={Image1} alt="" />
          </div>
        </div>

      </div>

      <div>
              <footer>
                <div className='w-full h-[400px] bg-black/90 flex items-center justify-center text-white gap-20 px-20'>
                  <div className='text-lg'>
                    <div className='flex text-center items-center text-white gap-3'>
                      <GiBookmarklet className='text-4xl' /><h1 className='text-2xl'>Kingster University</h1>
                    </div>
                    <div className='mt-7 flex flex-col gap-0.5 text-gray-300'>
                      <h1 >Box 35300</h1>
                      <h1>1810 Campus Way NE</h1>
                      <h1>Bothell, WA 98011-8246</h1>
                    </div>
                    <div className='mt-5  flex flex-col'>
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
                    <div className='flex flex-col mt-5 gap-3 text-gray-300 text-md'>
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
                    <div className='flex flex-col mt-5 gap-3 text-gray-300 text-md'>
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
                    <div className='flex flex-col mt-5 gap-3 text-gray-300 text-md'>
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
                        <a href=""><FaFacebook className='hover'/></a>
                        <a href=""><FaLinkedin className='hover'/></a>
                        <a href=""><FaTwitterSquare className='hover'/></a>
                        <a href=""><FaSquareInstagram className='hover'/></a>
                    </div>
                </div>
              </footer>
            </div>
    </div>
  )
}

export default Page