import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section>
        <div className="container py-8">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row"> 
            {/* about img */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" style={{width:470, height:470}}/>
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[22%]">
                <img src={aboutCardImg} alt="" />
            </div>
            </div>
            {/* about content */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">Your trusted parter in Simplifying Healthcare access.</h2>
                <p className="text_para">Our platform puts you in control of your healthcare.</p>
                <p className="text_para mt-[10px]">Say goodbye to lengthy hold times and endless paperwork. With us, you save time & reduce waiting room stress.</p>
                <p className="text_para mt-[10px]">Gain the peace of mind that comes with easy access to quality healthcare.</p>

                <Link to='/'><button className="btn">Learn More</button></Link>
            </div>
            </div>


        </div>
    </section>
  )
}

export default About