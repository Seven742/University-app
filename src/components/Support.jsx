import React from 'react'
import { useState } from 'react';
import Image1 from '../assets/image1.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import { BsDash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { MdAddToPhotos } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";

const Support = () => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const Various = [
    {
      Image: Image1,
      title: "Student Scholarships",
    },
    {
      Image: Image1,
      title: "Schools & Colleges",
    },
    {
      Image: Image1,
      title: "Library & Cultural",
    },
    {
      Image: Image1,
      title: "Support Sport Team ",
    },
    {
      Image: Image1,
      title: "Student Life",
    },
    {
      Image: Image1,
      title: "Emergency Fund",
    },
  ]
  const give = [
    { title: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although." },
    { title: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although." },
    { title: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although." },
    { title: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although." },
    { title: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although." },
  ];

  return (
    <div>
      <div className="relative">
        <img
          src={Image1}
          alt=""
          className="h-[580px] w-full object-cover"
        />

        {/* bottom dark fade only */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent">
        </div>

        {/* text */}
        <div className="absolute text-white bottom-20 left-20">
          <h1 className="text-2xl font-semibold text-green-600">
            Become a donor
          </h1>
          <h1 className="mt-2 text-5xl font-bold">
            Give To Kingster
          </h1>
        </div>
      </div>
      <div className='flex py-5 font-semibold ml-28'>
        <a href="" className='text-gray-600'>Home</a> <h1 className='ml-3'>{">"}</h1>
        <h1 className='ml-3 text-green-600'> Give to kingster</h1>
      </div>


      <div className="flex gap-20 mt-8 px-28">

        {/* LEFT SIDE CONTENT */}
        <div className="flex-1">

          {/* Title + Description */}
          <div>
            <h1 className="text-3xl font-semibold">
              About Kingster Fund
            </h1>

            <p className="mt-5 text-lg text-gray-600 ">
              We continues to adapt to new ways of teaching, new disciplines of study and new ways of learning. Your gift enriches the experience of all students by supporting efforts to recruit top faculty, expand academic programs and respond to the emerging needs of our campus and our world.
            </p>

            <p className="mt-5 text-lg text-gray-600 ">
              Not only does Kingster University provide you the practical skills that is necessary to transition seamlessly into the workforce upon your graduation, but we also make sure that you will have a good sense of social justice so that you make the transition responsibly.
            </p>
          </div>

          <div className="mt-10">
            <img src={Image1} alt="" className='w-full rounded-sm object-cover h-[220px]' />

          </div>
          <div className="mt-10">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold">Various Donation Options</h1>
              <div className="bg-gray-300 h-[3px] flex-1 ml-6"></div>
            </div>
          </div>
          <div className="mt-9 ">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Various.map((event, index) => (
                <div key={index}>
                  <div className='relative '>
                    <img
                      src={event.Image}
                      alt=''
                      className="object-cover w-full rounded-md h-[120px]"
                    />
                    <div className="absolute bottom-0 left-0 w-full from-black/80 ">
                      <h1 className="p-4 text-xl font-semibold text-white">
                        {event.title}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div >
          <div className='flex items-center mt-10'>
            <h1 className='text-2xl whitespace-nowrap'>Why give to Kingster?</h1>
            <div className='bg-gray-300 ml-4 w-full h-[2px]'></div>
          </div>

          <div className='grid gap-4 mt-7'>
            <div className='text-lg '>
              <button onClick={() => setOpen(!open)}>
                {open ? <div className='flex items-center'><BsDash className='mr-2 text-xl text-green-600' /><h1 className='text-green-600'>Student Scholarships</h1></div> : <div className='flex items-center'><FaPlus className='mr-2 text-green-600 text-md' /><h1 className='text-green-600'>Student Scholarships</h1></div>}
                {open ? <div>
                  <p className='py-4 text-gray-600 pl-7 text-start'>
                    {give[0].title}
                  </p>
                </div>
                  :
                  <div>

                  </div>}
              </button>
            </div>
            <div className='text-lg '>
              <button onClick={() => setOpen1(!open1)}>
                {open1 ? <div className='flex items-center'><BsDash className='mr-2 text-xl text-green-600' /><h1 className='text-green-600'>Scholls & Colleges</h1></div> : <div className='flex items-center'><FaPlus className='mr-2 text-green-600 text-md' /><h1 className='text-green-600'>Scholls & Colleges</h1></div>}
                {open1 ? <div>
                  <p className='py-4 text-gray-600 pl-7 text-start'>
                    {give[0].title}
                  </p>
                </div>
                  :
                  <div>

                  </div>}
              </button>
            </div>
            <div className='text-lg '>
              <button onClick={() => setOpen2(!open2)}>
                {open2 ? <div className='flex items-center'><BsDash className='mr-2 text-xl text-green-600' /><h1 className='text-green-600'>Library & Cultural Institutions</h1></div> : <div className='flex items-center'><FaPlus className='mr-2 text-green-600 text-md' /><h1 className='text-green-600'>Library & Cultural Institutions</h1></div>}
                {open2 ? <div>
                  <p className='py-4 text-gray-600 pl-7 text-start'>
                    {give[0].title}
                  </p>
                </div>
                  :
                  <div>

                  </div>}
              </button>
            </div>
            <div className='text-lg '>
              <button onClick={() => setOpen3(!open3)}>
                {open3 ? <div className='flex items-center'><BsDash className='mr-2 text-xl text-green-600' /><h1 className='text-green-600'>Kingster Sport Team</h1></div> : <div className='flex items-center'><FaPlus className='mr-2 text-green-600 text-md' /><h1 className='text-green-600'>Kingster Sport Team</h1></div>}
                {open3 ? <div>
                  <p className='py-4 text-gray-600 pl-7 text-start'>
                    {give[0].title}
                  </p>
                </div>
                  :
                  <div>

                  </div>}
              </button>
            </div>
            <div className='text-lg '>
              <button onClick={() => setOpen4(!open4)}>
                {open4 ? <div className='flex items-center'><BsDash className='mr-2 text-xl text-green-600' /><h1 className='text-green-600'>Student Life</h1></div> : <div className='flex items-center'><FaPlus className='mr-2 text-green-600 text-md' /><h1 className='text-green-600'>Student Life</h1></div>}
                {open4 ? <div>
                  <p className='py-4 text-gray-600 pl-7 text-start'>
                    {give[0].title}
                  </p>
                </div>
                  :
                  <div>

                  </div>}
              </button>
            </div>
          </div>


        </div>

        {/* RIGHT SIDE CONTACT PANEL */}
        <div>
          <button className="w-full py-5 text-lg font-bold text-white bg-green-600 rounded-md hover:bg-green-700 ">
            Student Resources <GrFormNextLink className="inline-block ml-2 text-lg" />
          </button>
          <div className="w-full px-10 py-10 mt-10 text-white rounded-md bg-blue-950 h-fit">

            <div className="space-y-4">
              <h1 className="text-2xl font-semibold">Department Contact Info</h1>

              <h1 className='text-lg font-semibold text-green-600'>Office Of Development</h1>

              <p className="leading-6">
                1810 Campus Way NE<br />
                Bothell, WA 98011-8246
              </p>

              <p className="leading-6">+1-2345-5432-45 <br /> bsba@kuuniver.edu</p>


              <p className="leading-6 text-green-600">
                Mon – Fri 9:00A.M. – 5:00P.M.
              </p>

              <div className="mt-12 space-y-3">
                <h1 className='text-2xl font-semibold'>Social Info</h1>

                <div className="flex items-center gap-4 mt-10 text-2xl text-green-500">
                  <a href=""><FaFacebook className='hover' /></a>
                  <a href=""><FaLinkedin className='hover' /></a>
                  <a href=""><FaTwitterSquare className='hover' /></a>
                  <a href=""><FaSquareInstagram className='hover' /></a>
                </div>
              </div>


            </div>
          </div>

          <div className='flex items-center w-full px-4 font-bold text-gray-800 bg-gray-300 border-b-4 border-green-600 rounded-md cursor-pointer mt-14 h-14 hover:bg-gray-400'>
            <h1 className='px-5'>Video Presentation</h1>
          </div>
          <div className='mt-6'>
            <a href="">
              <img src={Image1} alt="" className='w-full rounded-sm object-cover h-[220px]' />
            </a>

          </div>
        </div>
      </div >

      <div className='flex gap-20 py-20 mt-20 justify-evenly bg-blue-950 px-28'>
        <div className='w-1/2'>
          <img src={Image1} alt="" className='object-cover w-full h-[300px] px-10' />
        </div>
        <div className='flex flex-col justify-center w-1/2 gap-8'>
          <p className='text-2xl text-white '>Thanks to you, our students are gaining the knowledge, skills and values to create a more humane, just, and sustainable world.</p>
          <div>
            <button className="flex items-center px-6 py-3 font-bold text-white bg-green-600 rounded-md hover:bg-green-700">
              Become a Donor
              <MdAddToPhotos className='ml-2' />
            </button>
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
    </div >
  )
}

export default Support