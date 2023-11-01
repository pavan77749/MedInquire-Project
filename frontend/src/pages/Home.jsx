import hero from "../assets/images/hero.png"
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from "react-router-dom"
import {BsArrowRight} from 'react-icons/bs'

const Home = () => {
  return <>
  {/* hero section */}
  <section className=' pt-[60px] 2xl:h-[800px]'>
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
            <img  className="w-full" src={hero} alt="" />
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
        <div className="flex items-center justify-center"><img src={icon01} alt="" /></div>
      <div className="mt-[30px]">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find Doctor</h2>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center"> World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic </p>
        <Link to='/doctors ' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#47c536] hover:border-none'>
          <BsArrowRight className="group-hover:text-white w-6 h-5"/>

        </Link>
      </div>
      </div>
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center"><img src={icon02} alt="" /></div>
      <div className="mt-[30px]">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center"> World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic </p>
        <Link to='/doctors ' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#47c536] hover:border-none'>
          <BsArrowRight className="group-hover:text-white w-6 h-5"/>

        </Link>
      </div>
      </div>
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center"><img src={icon03} alt="" /></div>
      <div className="mt-[30px]">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book  Appointment</h2>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center"> World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic </p>
        <Link to='/doctors ' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#47c536] hover:border-none'>
          <BsArrowRight className="group-hover:text-white w-6 h-5"/>

        </Link>
      </div>
      </div>
      </div>
    </div>
  </section>
  </>

}

export default Home