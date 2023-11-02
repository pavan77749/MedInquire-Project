
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import { AiFillYoutube,AiFillFacebook,AiFillInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    path:"https://www.youtube.com",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.facebook.com",
    icon:<AiFillFacebook className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.instagram.com",
    icon:<AiFillInstagram className='group-hover:text-white w-4 h-5'/>
  }
];

const quickLink01 =[
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/",
    display:"About us"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/",
    display:"Blog"
  }
]
const quickLink02 =[
  {
    path:"/find-a-doctor",
    display:"Find a Doctor"
  },
  {
    path:"/",
    display:"Request an Appointment"
  },
  {
    path:"/services",
    display:"Find a Location"
  },
  {
    path:"/",
    display:"Get a Opinion"
  }
]
const quickLink03 =[
  {
    path:"/",
    display:"Donate"
  },
  {
    path:"/contact",
    display:"Contact Us"
  }
 
]

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10 border-[3px] border-grey'>
   <div className="container ">
    <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
      <div>
        <img src={logo} alt="" className="w-28"/>
        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>Copyright © {year}  MedInquire all right reserved </p>
        <div className='flex items-center gap-3 mt-4'>
          {socialLinks.map((link,index)=> <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-[#47c536] hover:border-none'>{link.icon}</Link>)}
        </div>
      </div>

      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
        <ul>
          {quickLink01.map((item,index)=> <li key={index} className='mb-4 cursor-pointer hover:text-[#47c536]'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'></Link>{item.display}</li>)}
        </ul>
      </div>
      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to </h2>
        <ul>
          {quickLink02.map((item,index)=> <li key={index} className='mb-4 cursor-pointer hover:text-[#47c536]'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'></Link>{item.display}</li>)}
        </ul>
      </div>
      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support </h2>
        <ul>
          {quickLink03.map((item,index)=> <li key={index} className='mb-4 cursor-pointer hover:text-[#47c536]'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'></Link>{item.display}</li>)}
        </ul>
      </div>

    </div>
   </div>
   </footer>
  )
}

export default Footer