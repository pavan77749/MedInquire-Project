import signupImg from '../assets/images/signup.png'
import avatar from '../assets/images/doctor-img01.jpg'
import { Link } from "react-router-dom"
import { useState } from 'react'

const SignUp = () => {
  const [selectedFile,setSelectedFile] = useState(null)
  const [previewURL,setPreviewURL] = useState(null)

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    photo:'',
    gender:'',
    role:'patient'
  })
  const handleInputChange = e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleFileInputChange = async(event)=>{
    const file = event.target.files[0];
    // later we will use cloudinary to upload the images
   

  }

  const submitHandler = async  event => {
    event.preventDefault()
  }

  return <section className='px-5 xl:px-0 '>
    <div className="max-x-[1170px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block  rounded-l-lg">
          <figure className='rounded-l-lg'>
            <img src={signupImg} alt="" className='w-full rounded-l-lg'/>
          </figure>
        </div>

        {/* sign up form */}
        <div className="rounded-l-lg lg:pl-16 py-32 ">
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 '>Create an <span className='text-[#47c536]'>account</span></h3>
          <form onSubmit={submitHandler} >
          <div className="mb-5">
          <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleInputChange}  className="w-full pr-4 py-3 border-b border-solid focus:outline-none focus:border-b-[#47c536] text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-sm cursor-pointer" required/>
        </div>
          <div className="mb-5">
          <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange}className="w-full pr-4 py-3 border-b border-solid focus:outline-none focus:border-b-[#47c536] text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-sm cursor-pointer" required/>
        </div>
          <div className="mb-5">
          <input type="password" placeholder="password" name="password"value={formData.password} onChange={handleInputChange}className="w-full pr-4 py-3 border-b border-solid focus:outline-none focus:border-b-[#47c536] text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-sm cursor-pointer" required/>
        </div>
          <div className="mb-5 flex items-center justify-between">
            <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
            Are You a: <select name="role" value={formData.role} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              </select>
              </label>
            <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
           Gender: <select name="gender" value={formData.gender} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              </select>
              </label>
              </div>

            <div className="mb-5 flex items-center gap-3">
              <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-[#47c536] flex items-center justify-center'>
                <img src={avatar} alt="" className='w-full rounded-full' />
              </figure>
              <div className='relative w-[160px] h-[50px]'>
                <input type="file" name="photo" id='customFile' onChange={handleFileInputChange} accept=".jpg, .png" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>

                <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-5 overflow-hidden bg-[#09ff0046] text-headingColor font-semibold rounded-lg truncate cursor-pointer text-center'>Upload Photo</label>
              </div>
              </div> 
              <div className="mt-7">
          <button className="w-full bg-[#47c536] text-white text-[18px] leading-[60px] rounded-lg" type="submit"> Sign Up</button>
        </div>

<p className="mt-5 text-textColor text-center">
 Already have an account? <Link to='/login' className="text-[#47c536]">Login</Link>
</p>


          </form>
        </div>

      </div>
    </div>


  </section>
}

export default SignUp