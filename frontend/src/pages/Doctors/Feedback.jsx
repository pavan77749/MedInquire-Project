import { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'
import {AiFillStar} from 'react-icons/ai'
import { FeedbackForm } from './FeedbackForm'

const Feedback = () => {
    const [showFeedbackForm,setShowFeedbackForm] = useState(false)

  return <div>
    <div className="md-[50px]">
        <h4 className="text-[20px]  leading-[30px] font-bold text-headingColor mg-[30px]">
            All reviews(272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px] ">
            <div className="flex gap-3">
                <figure className='w-10 h-10 rounded-full py-6'><img src={avatar} alt="" className='w-full'/></figure>
                <div>
                    <h5 className='text-[15px] leading-10 text-[#47c536] font-bold'>
                        Ali ahmed
                    </h5>
                    <p className='text-[14px] leading-6 text-textColor'>{formateDate("02-14-2023")}</p>
                    <p className='text_para mt-3 font-medium text-[15px] '> Good services, highly 👍</p>
                </div>
            </div>

        <div className="flex gap-1">
            {[...Array(5).keys()].map(( index) => (<AiFillStar key={index} color='#47c536'/>))}
        </div>

        </div>
    </div>

   {!showFeedbackForm &&  <div className="text-center "><button className='btn' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button></div>}

   {showFeedbackForm && <FeedbackForm/>}

  </div>
}

export default Feedback