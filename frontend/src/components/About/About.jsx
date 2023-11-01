import aboutImg from "../../assets/images/about.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section>
        <div className="container py-8">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row"> 
            {/* about img */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" />
            </div>
            {/* about content */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">Proud to be one of the nations best</h2>
                <p className="text_para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At harum, neque iste provident distinctio odit corporis sint similique sed officiis?</p>
                <p className="text_para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, numquam unde? Voluptate, consequatur. Quaerat quod cum ab beatae voluptatem facilis magnam iusto odit magni distinctio non accusantium corrupti omnis nesciunt officia nulla quisquam illum, dolorum sed impedit neque consequatur. Blanditiis placeat animi mollitia adipisci repudiandae necessitatibus corrupti dolorum ipsa voluptatem.</p>

                <Link to='/'><button className="btn">Learn More</button></Link>
            </div>
            </div>


        </div>
    </section>
  )
}

export default About