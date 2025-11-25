import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Academics from './components/Academics.jsx'
import Admission from './components/Admission.jsx'
import Alumni from './components/Alumni.jsx'
import Athletics from './components/Athletics.jsx'
import Calender from './components/Calender.jsx'
import Courses from './components/Courses.jsx'
import Page from './components/Page.jsx'
import Support from './components/Support.jsx'
import University from './components/University.jsx'
import Portal from './components/Portal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />   {/* Use index to make home page */}
          <Route path='/academics' element={<Academics />} />
          <Route path='/Admission' element={<Admission />} />
          <Route path='/Alumni' element={<Alumni />} />
          <Route path='/Athletics' element={<Athletics />} />
          <Route path='/Calender' element={<Calender />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Page' element={<Page />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/Portal' element={<Portal />} />
          <Route path='/University' element={<University />} />
            {/* use path="/*" for somthing not found like http://localhost:5173/jbfsvfusfs */}
         
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
