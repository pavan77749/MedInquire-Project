import hero from "../assets/images/hero.png"

const Home = () => {
  return <>
  {/* hero section */}
  <section className='hero_section pt-[60px] 2xl:h-[800px]'>
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

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
              <h2 className="text-[36px] leading-[56] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
              <span className="w-[100px] h-2 bg-[#47c536] rounded-full block mt-[-14px]"></span>
              <p className="text_para">Years of Experience</p>
            </div>
            <div>
              <h2 className="text-[36px] leading-[56] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10K+</h2>
              <span className="w-[100px] h-2 bg-[#47c536] rounded-full block mt-[-14px]"></span>
              <p className="text_para">Users</p>
            </div>
            <div>
              <h2 className="text-[36px] leading-[56] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%
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

  </>

}

export default Home