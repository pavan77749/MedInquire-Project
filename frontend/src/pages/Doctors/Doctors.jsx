
import DoctorsCard from '../../components/Doctor/DoctorsCard'
import { doctors } from '../../assets/data/doctors'


const Doctors = () => {
  return (
    <>
   <section className='bg-[#c1f3a1]'>
    <div className="container text-center">
      <h2 className='heading'>Find a Doctor</h2>
      <div className="max-w-[570px] mt-[30px] mx-auto bg-[#fdfdfdd2] rounded-md flex items-center justify-between">
        <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer text-textColor border-[#000]' placeholder='Search Doctor' />
        <button className='btn mt-0 rounded-[5px] rounded-r-sm '>Search</button>
      </div>
    </div>
    
   </section>
   <section >
    <div className="container">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>{doctors.map((doctor)=><DoctorsCard key={doctor.id} doctor={doctor}/>)}</div>
    </div>
   </section>
   </>
  )
}

export default Doctors