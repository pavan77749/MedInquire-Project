import starIcon from '../../assets/images/Star.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const DoctorsCard = ({doctor}) => {
    const {name,  specialization, avgRating,totalRating,photo,totalPatients,hospital} = doctor
  return (
   <div className="p-3 lg:p-5">
    <div>
        <img src={photo} alt="" className="w-full" />
    </div>
    <h2 className="text-[10px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5" >{name}</h2>
    <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className='bg-[#47c536] text-[white] py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text[16px] lg:leading-7 rounded font-semibold'>{specialization}</span>
        <div className="flex items-center gap-[6px]">
            <span className='flex items-center gap-[6px] text-[14px] leading-4 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'><img src={starIcon}/></span>
            <span className='flex items-center gap-[6px] text-[14px] leading-4 lg:text-[16px] lg:leading-7 font-semibold text-textColor'>({totalRating})</span>
        </div>
    </div>

    <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
            <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'>*{totalPatients}Patiens</h3>
            <p className='text-[14px] leading-6 font-[400] text-textColor'>At {hospital}</p>
        </div>
        <Link to='/doctors ' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#47c536] hover:border-none'>
          <BsArrowRight className="group-hover:text-white w-6 h-5"/>

        </Link>
    </div>
   </div>
  )
}

export default DoctorsCard