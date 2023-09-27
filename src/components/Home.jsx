import React from 'react'
import profile from '../assets/Hardeep_Passport_Photo.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] homeContainerStyle'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
       
     
        <div>
          <img src={profile} alt="Profile Image" style={{width:'164px', height :'200px'}}/>      
        </div>
        <p className='text-[#8892b0] font-bold bellFontStyle' >Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] bellFontStyle'>Hardeep</h1>
       

        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] bellFontStyle'> I am Full Stack developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] personalInfoStyle'> Specifically a MERN Stack developer with a specialization in building 
        and designing exceptional web applications. Currently, my focus is on mastering
        muticloud technologies like AWS, GCP and Azure.</p>
       

      </div>

    </div>
  )
}

export default Home
