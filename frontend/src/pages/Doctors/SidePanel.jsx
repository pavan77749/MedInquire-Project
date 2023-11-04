

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md"><div className="flex justify-between items-center">
        <p className="text_para mt-0 font-semibold">Fees Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold"> 500 RS</span>
        </div>
        <div className="mt-[30px]">
            <p className="text_para mt-0 font-semibold text-headingColor">Available Time Slots:</p>
            <ul className="mt-3">
                <li className="flex items-center justify-between mb-2 ">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">4:00pm - 9:30pm</p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">4:00pm - 9:30pm</p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">Wednesday</p>
                    <p className="text-[15px] leading-6 text-textColor font-semibold">4:00pm - 9:30pm</p>
                </li>
            </ul>
        </div>
        <button className="btn px-2 rounded-[10px]"> Book Appointment</button>
        </div>
  )
}

export default SidePanel