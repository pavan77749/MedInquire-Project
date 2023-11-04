import { formateDate } from "../../utils/formateDate"

const DoctorAbout = () => {
  return <div>
    <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">About of
        <span className="text-[#47c536] font-bold text-[24px] leading-9">Rajesh Jain</span>
        </h3>
        <p className="text_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quod obcaecati possimus, atque sapiente expedita facilis ducimus cupiditate voluptatibus unde voluptatem debitis beatae molestias et reprehenderit, ea odit! Consequuntur nobis eum minus quo tenetur dolor, inventore fugit animi perferendis aliquid dicta ducimus commodi, blanditiis, numquam placeat non labore dolores ullam corporis. Rem accusamus, incidunt unde dolor iusto ratione nihil hic.
        </p>
    </div>
    <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
        <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px]">
            <div><span className="text-[#47c536] text-[15px] leading-6 font-semibold">{formateDate("1-08-2015")} - {formateDate("5-09-2018")}</span>
            <p className="text-[16px] leading-6 font-medium text-textColor"> PHD in Surgeon</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital,Mumbai</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px] py-4">
            <div><span className="text-[#47c536] text-[15px] leading-6 font-semibold">{formateDate("12-04-2010")}  - {formateDate("2-05-2013")}</span>
            <p className="text-[16px] leading-6 font-medium text-textColor"> PHD in Surgeon</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital,Mumbai</p>
            </li>
        </ul>
    </div>

    <div className="mt-12">
    <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
    <ul className="grid sm:grid-col-2 gap-[30px] pt-4 md:p-5">
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">{formateDate("1-08-2015")} - {formateDate("5-09-2023")}</span>
            <p className="text-[16px] leading-6 font-medium text-textColor"> New Appolo Hospital, New York.</p>
        </li>
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">{formateDate("1-08-2015")} - {formateDate("5-09-2023")}</span>
            <p className="text-[16px] leading-6 font-medium text-textColor"> New Appolo Hospital, New York.</p>
        </li>
    </ul>
    </div>
  </div>
}

export default DoctorAbout