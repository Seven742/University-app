import React, { use } from 'react'
import { useState, useEffect } from 'react'
import Image1 from '../assets/image1.jpg'
import Image4 from '../assets/image4.avif'
import { FaUniversity } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineSportsTennis } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import Image from '../assets/image.png'
import Bg from '../assets/bg.png'
import Bg1 from '../assets/bg1.jpg'
import { GiBookmarklet } from "react-icons/gi";
import { GrFormNextLink } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { LiaUniversitySolid } from "react-icons/lia";
import Image2 from '../assets/image5.jpg'
import { FaLink } from "react-icons/fa6";
import { MdKeyboardBackspace, MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import video from '../assets/video.mp4'
import Profile from '../assets/profile.jpg'
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

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


const Images = [
  Image1,
  Image4,
]

const Text = [
  "Our Chief People Officer @MRidsdale16 joined @benjaminlaw and @raejohnston on @tsushow to discuss all things Cultu",
  "Shaking off the working week! What’s on the agenda for the weekend? by KonstantinKolosov via… https://t.co/fSyxq53H6P"
]
const Home = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [active, setActive] = useState("benefits");
  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [selected4, setSelected4] = useState("");
  const [selected5, setSelected5] = useState("");


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 5000);
    return () => clearInterval(interval);
  })

  useEffect(() => {
    const textInterval = setInterval(() => {
      setText((prevText) => (prevText + 1) % Text.length);
    }, 5000);
    return () => clearInterval(textInterval);
  })

  function handlGoNext() {
    setText((prevText) => (prevText + 1) % Text.length);
  }
  function handlGoBack() {
    setText((prevText) => (prevText - 1 + Text.length) % Text.length);
  }

  return (
    <div >
      <div className="w-full h-[600px] overflow-hidden rounded-xl relative ">
        <img
          src={Images[index]}
          className="object-cover w-full h-full transition-all duration-700"
          alt="slider"
        />
        {/* use absolute and inset-0 to make text or button in image bg */}
        <div className='absolute inset-0 bottom-0 left-0 flex flex-col w-full px-4 text-white mt-44 h-2/2 bg-gradient-to-t from-black/80 to-transparent'>
          <h1 className='ml-32 text-3xl font-bold'>The Best University Of The State</h1>
          <div>
            <h1 className='my-5 ml-32 font-bold text-7xl '>Kingster University</h1>
          </div>
          <div>
            <button className="px-6 py-4 my-5 ml-32 text-lg font-semibold text-black bg-white border-l-4 border-green-600 hover:text-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className='flex py-11 justify-evenly'>
        <div className='flex items-center'>
          <div>
            <FaUniversity className='icon' />
          </div>
          <div>
            <h2 className='text-icon'>University Lift</h2>
            <h2 className='text-lg font-bold text-gray-400'>Overall i here</h2>
          </div>
        </div>
        <div className='flex items-center'>
          <div>
            <RiGraduationCapFill className='icon' />
          </div>
          <div>
            <h2 className='text-icon'>University Lift</h2>
            <h2 className='text-lg font-bold text-gray-400'>Overall i here</h2>
          </div>
        </div>
        <div className='flex items-center'>
          <div>
            <MdOutlineSportsTennis className='icon' />
          </div>
          <div>
            <h2 className='text-icon'>University Lift</h2>
            <h2 className='text-lg font-bold text-gray-400'>Overall i here</h2>
          </div>
        </div>
        <div className='flex items-center'>
          <div>
            <TbSocial className='icon' />
          </div>
          <div>
            <h2 className='text-icon'>University Lift</h2>
            <h2 className='text-lg font-bold text-gray-400'>Overall i here</h2>
          </div>
        </div>
      </div>
      <div className='flex px-14'>
        <div>
          <img src={Image} alt="" className='h-[471px] w-full object-cover' />
        </div>
        <div className="relative">
          {/* Background Image */}
          <img src={Bg} alt="" className="h-[471px] w-full object-cover" />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 space-y-4 text-white">
            <h1 className="text-4xl font-bold">Apply for Admission</h1>
            <p className="text-2xl font-bold text-green-600">Fall 2019 applications are now open</p>
            <p className="max-w-xl text-xl text-white/60">
              We don’t just give students an education and experiences that set them up
              for success in a career. We help them succeed in their career—to discover
              a field they’re passionate about and dare to lead it.
            </p>
            <div>
              <button className="px-5 py-3 mt-2 font-bold bg-green-600 rounded hover:bg-green-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20">
        {/* Background Image */}
        <img src={Bg1} alt="" className="h-[500px] w-full object-cover" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className='absolute inset-0 flex items-center justify-between w-full px-20 text-white'>
          <div className='mt-[-180px]'>
            <div className='flex font-thin'>
              <GiBookmarklet className='icon' /><h1 className="text-3xl">KUTheme University</h1>
            </div>
            <h1 className='mt-5 text-3xl font-semibold text-green-600'>About Our University</h1>
          </div>
          <div>
            <p className='text-xl text-white/60'>
              We are one of the largest, most diverse universities in the USA with over <br /> 90,000 students in USA, and a further 30,000 studying across 180 <br /> countries for Kingster University.
            </p>
            <p className='text-xl font-semibold mt-7'>
              Kingster University was established by John Smith in 1920 for the public benefit and it is <br /> recognized globally. Throughout our great history, Kingster has offered access to a wide <br /> range of academic opportunities. As a world leader in higher education, the University <br /> has pioneered change in the sector.
            </p>
            <div className='flex items-center gap-4 mt-4 text-lg font-semibold '>
              <a className='hover:text-green-600' href="">Read More</a><GrFormNextLink />
            </div>
          </div>
        </div>

      </div>
      <div className='flex w-full gap-5 bg-black justify-evenly p-14'>
        <div className='flex flex-col text-start'>
          <MdCastForEducation className='text-green-600 icon' />
          <h2 className='mt-5 text-2xl font-semibold text-white'>Education Services</h2>
          <p className='mt-5 text-lg text-white/80'>Kingster University was established <br /> by John Smith in 1920 for the public <br /> benefit and it is recognized.</p>
          <a href="" className='mt-5 font-semibold text-green-600 hover:text-white'>Learn More</a>
        </div>

        <div className='flex flex-col text-start'>
          <FaGlobeAmericas className='text-green-600 icon' />
          <h2 className='mt-5 text-2xl font-semibold text-white'>International Hubs</h2>
          <p className='mt-5 text-lg text-white/80'>Kingster University was established <br /> by John Smith in 1920 for the public <br /> benefit and it is recognized.</p>
          <a href="" className='mt-5 font-semibold text-green-600 hover:text-white'>Learn More</a>
        </div>
        <div className='flex flex-col text-start'>
          <GrNotes className='text-green-600 icon' />
          <h2 className='mt-5 text-2xl font-semibold text-white'>Bachelor’s and Master’s</h2>
          <p className='mt-5 text-lg text-white/80'>Kingster University was established <br /> by John Smith in 1920 for the public <br /> benefit and it is recognized.</p>
          <a href="" className='mt-5 font-semibold text-green-600 hover:text-white'>Learn More</a>
        </div>
        <div className='flex flex-col text-start'>
          <LiaUniversitySolid className='text-green-600 icon' />
          <h2 className='mt-5 text-2xl font-semibold text-white'>University Life</h2>
          <p className='mt-5 text-lg text-white/80'>Kingster University was established <br /> by John Smith in 1920 for the public <br /> benefit and it is recognized.</p>
          <a href="" className='mt-5 font-semibold text-green-600 hover:text-white'>Learn More</a>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='px-14 pt-[44px]'>
          <div>
            <div className='flex items-center '>
              <h1 className='text-2xl font-semibold whitespace-nowrap'>News & Updates</h1> <div className='w-[570px] ml-2 h-[3px] bg-gray-400'></div>
            </div>
            <p className='text-green-600'>Read All New</p>
            <div className='flex'>
              <div>
                <a href="">
                  <img src={Image2} alt="" className='mt-7 h-[250px] object-cover rounded-lg' />
                </a>
                <div className='flex flex-col gap-2 mt-8'>
                  <a className='font-semibold text-gray-600 uppercase' href="">June 6, 2016  /  Admission, Student</a>
                  <a className='text-xl font-semibold' href="">Professor Albert joint research on mobile money in Tanzania</a>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center ml-4 '>
                  <a href=""> <img src={Image2} alt="" className='mt-7 h-[80px] object-cover rounded-lg' /></a>
                  <div className='flex-col mt-6 ml-2'>
                    <a className='font-semibold text-gray-600' href="">June 6, 2016  /  Hot, Updates</a> <br />
                    <a className='font-semibold' href="">A Global MBA for the next generation of business leaders</a>
                  </div>
                </div>
                <div className='flex items-center ml-4 '>
                  <a href=""> <img src={Image2} alt="" className='mt-7 h-[80px] object-cover rounded-lg' /></a>
                  <div className='flex-col mt-6 ml-2'>
                    <a className='font-semibold text-gray-600' href="">June 6, 2016  /  Admission, Event</a> <br />
                    <a className='font-semibold' href="">Professor Tom comments on voluntary recalls by snack brands</a>
                  </div>
                </div>
                <div className='flex items-center ml-4 '>
                  <a href=""> <img src={Image2} alt="" className='mt-7 h-[80px] object-cover rounded-lg' /></a>
                  <div className='flex-col mt-6 ml-2'>
                    <a className='font-semibold text-gray-600' href="">June 6, 2016  /  Article, Research</a> <br />
                    <a className='font-semibold' href="">Professor Alexa is interviewed about Twitter’s valuation</a>
                  </div>
                </div>
              </div>

            </div>
            <div className='flex items-center w-full gap-5 mt-6 font-semibold'>
              <FaTwitter className='text-4xl text-blue-600' />
              <h1>{Text[text]}</h1>
              <div className='flex gap-4 text-xl text-blue-600'>
                <button onClick={handlGoNext}><MdKeyboardBackspace /></button>
                <button onClick={handlGoBack}><GrFormNextLink /></button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">

            <img src={Bg} alt="" className="h-[600px] w-[800px] object-cover" />

            <div className="absolute inset-0 bg-black/80"></div>

            <div className="absolute inset-0 flex flex-col justify-center px-10 space-y-4 text-white">
              <div className='flex items-center'>
                <FaLink /><h1 className='ml-3 text-2xl font-semibold'>Quick Links</h1>
              </div>
              <div className="text-lg font-semibold text-green-600">
                <ul className="w-[370px]">
                  <li className="py-4 border-b border-gray-400"><a href="">Alumni & Donors</a></li>
                  <li className="py-4 border-b border-gray-400"><a href="">Athletic Calendar</a></li>
                  <li className="py-4 border-b border-gray-400"><a href="">All Kingster’s Events</a></li>
                  <li className="py-4 border-b border-gray-400"><a href="">Partnership & Out Reach</a></li>
                  <li className="py-4 border-b border-gray-400"><a href="">Academic Programs</a></li>
                  <li className="py-4 border-b border-gray-400"><a href="">Tution And Fees</a></li>
                </ul>
              </div>
              <div >
                <button className='flex items-center py-3 mt-4 font-semibold bg-green-600 rounded-lg px-7 hover:bg-green-700'>
                  <GiBookmarklet className='mt-1 mr-2' />
                  Apply to Kinster</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">

        <img src={Image1} alt="" className="h-[600px] w-full object-cover" />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-10 space-y-4 text-center text-white">
          <h1><a href={video}> <MdOutlineSlowMotionVideo className='text-8xl ml-[46%]' /></a></h1>
          <h1 className='text-5xl font-semibold'>Video Tour in Kingster</h1>
          <p className='text-xl font-semibold'>Take a tour in Kingster and you will find the best university in the <br /> state. The video will take you to every places in this university.</p>
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


      <div className='flex items-center justify-center my-20'>
        <div>
          <div className="relative">
            <img src={Bg1} alt="" className="h-[250px]  w-[450px] object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className='absolute inset-0 flex items-center justify-between w-full text-white'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl font-semibold text-white'>Undergraduate</h1>
                <p className='px-10 mt-3 text-center text-gray-300'>Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-[450px] bg-blue-950 h-[250px]'>
          <h1 className='text-xl font-semibold text-white'>Graduated & Professional</h1>
          <p className='px-10 mt-3 text-center text-gray-300'>Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.</p>
        </div>
        <div>
          <div className="relative">
            <img src={Bg1} alt="" className="h-[250px]  w-[450px] object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className='absolute inset-0 flex items-center justify-between w-full text-white'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl font-semibold text-white'>Scholarships & Financial AID</h1>
                <p className='px-10 mt-3 text-center text-gray-300'>Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally.</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className='flex justify-center gap-7'>
        <div className=''>
          <img src={Image2} alt="" className=' object-cover w-[400px] h-[230px] rounded-sm' />
          <h1 className='mt-5 text-xl font-semibold text-blue-950 '>Donation helps us</h1>
          <p className='mt-5 text-gray-600 text-md'>The Campaign for the Kingster University is the <br /> <strong>largest fundraising campaign in history</strong>. With a <br /> historic $1 billion goal, the campaign is expanding U <br /> of T’s global leadership capacity.</p>
          <button className='py-4 mt-5 font-semibold text-white bg-green-600 rounded-md px-7 hover:bg-green-700'>
            Become a donor
          </button>
        </div>
        <div className='px-9'>
          <div className='flex items-center mt-[-10px]'>
            <h1 className='text-2xl font-semibold'>Upcoming Events</h1>
            <div className='w-[100px] ml-2 h-[2px] bg-gray-400'></div>
          </div>
          <div className='flex items-center mt-4'>
            <div className='flex flex-col items-center mt-7'>
              <h1 className='text-5xl font-semibold text-green-600'>17</h1>
              <h1 className='text-lg font-semibold '>DCE</h1>
              <div className='w-[40px] mt-2 h-[2px] bg-green-600'></div>
            </div>

            <div className='ml-4'>
              <h1 className='mt-8 text-xl font-semibold text-blue-950'>Fintech & Key Investment Conference</h1>
              <div className='flex mt-8 text-center text-green-600'>
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
              <div className='flex mt-8 text-green-600'>
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
              <div className='flex mt-8 text-green-600'>
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
        <div>
          <div className="relative">
            <img src={Bg1} alt="" className="h-[500px]  w-[400px] object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className='absolute inset-0 flex items-center justify-center w-full text-white'>
              <div className='flex flex-col items-center'>

                <CiMail className='mt-20 text-green-700 text-7xl' />
                <h1 className='mt-8 text-xl font-semibold text-white'>Subscribe To Newsletter</h1>
                <h1 className='mt-2 text-gray-300'>Get updates to news & events</h1>
                <input type="text" placeholder='Your Gmail Address' className='p-4 pr-32 text-white mt-9 focus:outline-none bg-black/70' />
                <button className='px-[128px] mt-3 py-4 bg-green-600 hover:bg-green-700 font-semibold'>Subscribe</button>

              </div>
            </div>

          </div>
        </div>

      </div>
      <div>
        <div className="relative mt-20">
          <img src={Bg} alt="" className="h-[500px] w-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className='absolute inset-0 flex items-center justify-end w-full px-20 text-white'>
            <div className='flex flex-col mr-16'>
              <h1 className='ml-5 text-3xl font-semibold'>Search For Courses</h1>
              <div className='flex gap-5 mt-5 ml-5'>
                <div className='flex flex-col gap-4'>
                  <input type="text" className='w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none' placeholder='Keywords' />
                  <div className="w-64">
                    <select
                      className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                      value={selected}
                      onChange={(e) => setSelected(e.target.value)}
                    >
                      <option value="Department">Department</option>
                      <option value="Business Administration">Business Administration</option>
                    </select>
                  </div>
                  <div className="w-64">
                    <select
                      className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                      value={selected1}
                      onChange={(e) => setSelected1(e.target.value)}
                    >
                      <option value="">Department</option>
                      <option value="Business Administration">Level</option>
                      <option value="IT">Graduate</option>
                      <option value="Finance">Undergraduate</option>
                    </select>
                  </div>
                  <div className="w-64">
                    <select
                      className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                      value={selected2}
                      onChange={(e) => setSelected2(e.target.value)}
                    >
                      <option value="">Semester</option>
                      <option value="Business Administration">Fall 2025</option>
                      <option value="IT">Spring 2019</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <input type="text" className='w-full  bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none' placeholder='Course ID' />
                  <div className="w-64">
                    <select
                      className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                      value={selected3}
                      onChange={(e) => setSelected3(e.target.value)}
                    >
                      <option value="">Campus</option>
                      <option value="Business Administration">Adman's Hall</option>
                      <option value="IT">KingSter's 80</option>
                      <option value="Finance">Ku2 hill</option>
                    </select>
                  </div>
                  <div className="w-64">
                    <select
                      className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                      value={selected4}
                      onChange={(e) => setSelected4(e.target.value)}
                    >
                      <option value="">Instructor</option>
                      <option value="Business Administration">Albert Caman</option>
                      <option value="IT">Anjelina Jones</option>
                      <option value="Finance">Bruce Willis</option>
                      <option value="Finance">Carol Dawson</option>
                      <option value="Finance">John Hagensy</option>
                    </select>
                  </div>
                  <div className="w-64">
                    <select
                      className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                      value={selected5}
                      onChange={(e) => setSelected5(e.target.value)}
                    >
                      <option value="">Credit</option>
                      <option value="Business Administration">2.000</option>
                      <option value="IT">3.000</option>
                      <option value="Finance">4.000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='pl-5'>
                <button className='p-3 hover:bg-green-700 px-[205px] text-lg font-semibold rounded-md mt-5 bg-green-600'>Search courses</button>
              </div>
            </div>
          </div>
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

export default Home