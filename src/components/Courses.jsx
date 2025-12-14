import React from 'react'
import { useState } from 'react'
import Image1 from '../assets/image1.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
const Courses = () => {

  const courses = [
    {
      code: "ACC101",
      title: "Introduction to Financial Accounting",
      department: "Business Administration",
      campus: "KU2 Hill",
      level: "Undergraduate",
      instructor: "Carol Dawson (PhD)",
      semester: "Fall 2018",
      credit: 4.000,
      method: "Lecture"
    },
    {
      code: "MKT201",
      title: "Principles of Marketing",
      department: "Marketing",
      campus: "KU1 City",
      level: "Undergraduate",
      instructor: "James Turner (MBA)",
      semester: "Spring 2019",
      credit: 3.000,
      method: "Lecture"
    },
    {
      code: "ENG102",
      title: "Academic Writing",
      department: "English",
      campus: "KU3 Riverside",
      level: "Undergraduate",
      instructor: "Sarah Mitchell (MA)",
      semester: "Fall 2020",
      credit: 3.000,
      method: "Lecture"
    },
    {
      code: "CSC110",
      title: "Introduction to Programming",
      department: "Computer Science",
      campus: "KU2 Hill",
      level: "Undergraduate",
      instructor: "David Lee (PhD)",
      semester: "Fall 2021",
      credit: 4.000,
      method: "Lab + Lecture"
    },
    {
      code: "MAT210",
      title: "Statistics for Business",
      department: "Mathematics",
      campus: "KU1 City",
      level: "Undergraduate",
      instructor: "Anna Roberts (PhD)",
      semester: "Spring 2020",
      credit: 3.000,
      method: "Lecture"
    },
    {
      code: "BUS301",
      title: "Business Ethics",
      department: "Business Administration",
      campus: "KU3 Riverside",
      level: "Undergraduate",
      instructor: "Michael Brown (PhD)",
      semester: "Fall 2019",
      credit: 3.000,
      method: "Lecture"
    },
    {
      code: "FIN210",
      title: "Corporate Finance",
      department: "Finance",
      campus: "KU2 Hill",
      level: "Undergraduate",
      instructor: "Emily Clark (MBA)",
      semester: "Spring 2021",
      credit: 4.000,
      method: "Lecture"
    },
    {
      code: "ACC202",
      title: "Managerial Accounting",
      department: "Business Administration",
      campus: "KU1 City",
      level: "Undergraduate",
      instructor: "Robert Wilson (PhD)",
      semester: "Fall 2020",
      credit: 4.000,
      method: "Lecture"
    },
    {
      code: "ECO101",
      title: "Microeconomics",
      department: "Economics",
      campus: "KU3 Riverside",
      level: "Undergraduate",
      instructor: "Laura Green (PhD)",
      semester: "Spring 2018",
      credit: 3.000,
      method: "Lecture"
    },
    {
      code: "ECO102",
      title: "Macroeconomics",
      department: "Economics",
      campus: "KU3 Riverside",
      level: "Undergraduate",
      instructor: "Thomas White (PhD)",
      semester: "Fall 2019",
      credit: 3.000,
      method: "Lecture"
    }
  ];


  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [selected4, setSelected4] = useState("");
  const [selected5, setSelected5] = useState("");
  const [selected6, setSelected6] = useState("");

  return (
    <div>
      <div className='px-28 '>
        <div className='py-16'>
          <h1 className='text-2xl'>Find course that suit you</h1>
          <h1 className='py-2 text-6xl font-semibold'>Course Search</h1>
          <div className='flex py-5 font-semibold'>
            <a href="" className='text-gray-600'>Home</a> <h1 className='ml-3'>{">"}</h1>
            <h1 className='ml-3 text-green-600'>Courses Search</h1>
          </div>
        </div>

        <div className='flex justify-between'>
          <div>
            <div className="relative">
              <img
                src={Image1}
                alt=""
                className="h-[800px] w-[440px] object-cover"
              />

              {/* bottom dark fade only */}
              <div className="absolute bottom-0 left-0 w-[440px] h-[800px] bg-gradient-to-t bg-[#2c3e50]/90 to-transparent">
              </div>

              {/* text */}
              <div className='absolute inset-0 flex items-center w-full px-20 text-white'>
                <div className='flex flex-col '>
                  <h1 className='text-3xl font-semibold '>Search For Courses</h1>
                  <div className='flex gap-5 mt-5 '>
                    <div className='flex flex-col gap-4 '>
                      <input type="text" className='w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none' placeholder='Keywords' />
                      <input type="text" className='w-full  bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none' placeholder='Course ID' />
                      <div className="w-full">
                        <select
                          className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                          value={selected}
                          onChange={(e) => setSelected(e.target.value)}
                        >
                          <option value="Department">Department</option>
                          <option value="Business Administration">Business Administration</option>
                        </select>
                      </div>
                      <div className="w-72">
                        <select
                          className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                          value={selected1}
                          onChange={(e) => setSelected1(e.target.value)}
                        >
                          <option value="">Campus</option>
                          <option value="Business Administration">Adman's Hall</option>
                          <option value="IT">Kingster's 80</option>
                          <option value="Finance">KU2 Hill</option>
                        </select>
                      </div>
                      <div className="w-72">
                        <select
                          className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                          value={selected2}
                          onChange={(e) => setSelected2(e.target.value)}
                        >
                          <option value="">Level</option>
                          <option value="Business Administration">Graduate</option>
                          <option value="IT">Undergraduate</option>
                        </select>
                      </div>
                      <div className="w-72">
                        <select
                          className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                          value={selected3}
                          onChange={(e) => setSelected3(e.target.value)}
                        >
                          <option value="">Instructor</option>
                          <option value="Business Administration">Albert Caman</option>
                          <option value="IT">Anjelina Jones</option>
                          <option value="Finance">Bruce Willis</option>
                          <option value="Finance">Carol Dawson</option>
                          <option value="Finance">John Hagensy</option>
                        </select>
                      </div>
                      <div className="w-72">
                        <select
                          className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                          value={selected4}
                          onChange={(e) => setSelected4(e.target.value)}
                        >
                          <option value="">Semester</option>
                          <option value="Business Administration">Fall 2025</option>
                          <option value="IT">Spring 2019</option>
                        </select>
                      </div>
                      <div className="w-64">
                        <select
                          className="w-72 bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                          value={selected5}
                          onChange={(e) => setSelected5(e.target.value)}
                        >
                          <option value="">Credit</option>
                          <option value="Business Administration">2.000</option>
                          <option value="IT">3.000</option>
                          <option value="Finance">4.000</option>
                        </select>
                      </div>
                      <div className="w-72">
                        <select
                          className="w-full bg-[#2c3e50]/60 text-white p-3 rounded-md border border-gray-500 focus:outline-none"
                          value={selected6}
                          onChange={(e) => setSelected6(e.target.value)}
                        >
                          <option value="">Method</option>
                          <option value="Business Administration">Lecture</option>
                          <option value="IT">Online</option>
                          <option value="IT">Seminar</option>
                        </select>
                      </div>
                      <div className='w-72'>
                        <button className='p-3 whitespace-nowrap px-[85px] text-lg font-semibold bg-green-600 rounded-md hover:bg-green-700'>Search courses</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-8 pr-64 bg-gray-200 rounded-md"
                >
                  <h2 className="text-2xl font-bold">
                    <span className="text-green-600">{course.code}</span>{" "}
                    {course.title}
                  </h2>

                  <div className='flex flex-col gap-2'>
                    <p className="mt-4">
                      <strong>Department :</strong> {course.department}
                    </p>
                    <p><strong>campus:</strong> {course.campus}</p>
                    <p><strong>level:</strong> {course.level}</p>
                    <p><strong>instructor:</strong> {course.instructor}</p>
                    <p><strong>semester:</strong> {course.semester}</p>
                    <p><strong>credit:</strong> {course.credit}</p>
                    <p><strong>method:</strong> {course.method}</p>
                  </div>

                  <button className="px-6 py-2 mt-6 text-white bg-green-600 rounded">
                    More Detail
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className='mt-7'>
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

export default Courses