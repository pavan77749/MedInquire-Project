import hero from "../assets/images/hero.png"
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import faqimg from '../assets/images/faq-img.png'
import { Link } from "react-router-dom"
import {BsArrowRight} from 'react-icons/bs'
import About from "../components/About/About"
import ServiceList from "../components/Services/Services"
import featureImg from '../assets/images/feature-img.png'
import DoctorList from "../components/Doctor/DoctorList"
import FaqItem from "../components/faq/FaqItem"
import FaqList from "../components/faq/FaqList"

const Home = () => {
  return <>
  {/* hero section */}
  <section className='  2xl:h-[800px]'>
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center justify-between">

        {/* hero content */}
        <div>
          <div className="lg:w-[570px]">
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>Avoid Hassles & Delays. 
            </h1>
            <p className='text_para'>
            How is health today, Sounds like not good! Don't worry. Find your doctor online Book as you wish with MedInquire. We offer you a free doctor booking service. Make you appointment now.
            </p>
            <button className="btn">Request and Appointment</button>
          </div>

          {/* hero -content */}
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            <div>
              <h2 className="text-[36px]  lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
              <span className="w-[100px] h-2 bg-[#47c536] rounded-full block mt-[-14px]"></span>
              <p className="text_para">Years of Experience</p>
            </div>
            <div>
              <h2 className="text-[36px]  lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10K+</h2>
              <span className="w-[100px] h-2 bg-[#47c536] rounded-full block mt-[-14px]"></span>
              <p className="text_para">Users</p>
            </div>
            <div>
              <h2 className="text-[36px]  lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%
              </h2>
              <span className="w-[100px] h-2 bg-[#47c536] rounded-full block mt-[-14px]"></span>
              <p className="text_para">Patient Satisfaction</p>
            </div>
          </div>
         
        </div>


        {/* hero image */}
        <div className="flex gap-[30px] justify-end">
          <div>
            <img  className="lg:w-[670px]" src={hero} alt="" />
          </div>
          
        </div>
      </div>

    </div>
  </section>
{/* hero section ends */}

  <section>
    <div className="container">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="heading text-center">
          Providing the best Medical Services
        </h2>
        <p className="text_para text-center" >
          World-class care for everyone. Our health System offers unmatched,
          expert health care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center "><img src={icon01} alt="" style={{width:168,height:150}} /></div>
      <div className="mt-[30px]">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Primary Care</h2>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center"> Primary care services are your first line of defense for maintaining your health. Our primary care providers offer general check-ups, vaccinations, and can help with common illnesses and minor injuries.</p>
        <Link to='/doctors ' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#47c536] hover:border-none'>
          <BsArrowRight className="group-hover:text-white w-6 h-5"/>

        </Link>
      </div>
      </div>
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center"><img src={icon02} alt=""  style={{width:180,height:150}} /></div>
      <div className="mt-[30px]">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Doctor Ratings and Reviews
</h2>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Patient feedback and ratings for doctors to help you make informed decisions about your choice of healthcare provider</p>
        <Link to='/doctors ' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#47c536] hover:border-none'>
          <BsArrowRight className="group-hover:text-white w-6 h-5"/>

        </Link>
      </div>
      </div>
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center"><img src={icon03} alt=""  style={{width:200,height:150}} /></div>
      <div className="mt-[30px]">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book  Appointment</h2>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center"> To book an appointment for any of these services, simply click the "Book Now" button, choose your preferred date and time, and confirm your appointment. </p>
        <Link to='/doctors ' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#47c536] hover:border-none'>
          <BsArrowRight className="group-hover:text-white w-6 h-5"/>

        </Link>
      </div>
      </div>
      </div>
    </div>
  </section>

  {/* About section start */}
  <About/>
  {/* About section ends */}

  {/* Services Section start */}
  <section>
    <div className="container py-14">
      <div className="xl:w-[470px] mx-auto">
        <h2 className="heading text-center">Reasons to Choose Us</h2>
   
      </div>


      <ServiceList/>
    </div>
  </section>
  {/* Services Section ends */}

  {/* feature section */}
  <section>
    <div className="container">
      <div className="flex items-center justify-between flex-col flex-col lg:flex-row py-10" >
        {/* Feature Content */}
        <div className="xl:w-[670px]">
          <h2 className="heading">
           Book an Appointment <br /> anytime.
          </h2>
          <ul className="pl-4">
            <li className="text_para">
              1.Schedule the appointment directly.
            </li>
            <li className="text_para">
              2.Search for your physician here, and contact their office.
            </li>
            <li className="text_para">
              3.View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
            </li>
          </ul>
          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>
        {/* features image */}
        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[100px] lg:mt-0">
          <img src={featureImg} alt=""   style={{width:470,height:470}} />
        </div>

      </div>

    </div>
  </section>
  {/* feature section ends */}

  {/* our great doctors starts*/}

  <section>
    <div className="container">
 
      <div className="xl:w-[470px] mx-auto">
        <h2 className="heading text-center">Our Doctors</h2>
       
      </div>

      <DoctorList/>
      </div>
    
  </section>
  {/* our great doctors ends */}

  {/* faq section start */}
  <section>
    <div className="container py-16">
      <div className="flex justify-between gap-[50px] lg:gap-0">
        <div className="w-1/2 hidden md:block"><img src={faqimg} alt="" /></div>
      <div className="w-full md:w-1/2">
        <h2 className="heading">Most questions by our beloved Patients</h2>
        <FaqList/>
      </div>
      </div>
    </div>
  </section>
  {/* faq section ends */}


  </>

}

export default Home