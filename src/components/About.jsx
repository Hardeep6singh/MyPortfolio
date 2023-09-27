import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' style={{ backgroundColor: "#fff" }}>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 bellFontStyle skillsParaStyle'>
                      About
                    </p>
                </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p className='bellFontStyle'> Hi, I am Hardeep, Thanks for visiting my portfolio. Please take a look around.</p>
                </div>
                <div>
                  <p className='personalInfoStyle'>First and foremost, I love writing code. Ever since I wrote my first program in C++ and 
                  manipulated it to get the desired output, I have been obsessed with the idea of using software to solve practical problems. 
                  Then, I learned web development starting with HTML, CSS, and JavaScript and ventured into libraries and frameworks 
                  like React and Angular. I was mostly interested in the backend, focusing on how we store data and handle APIs. 
                  Subsequently, I learned Node.js, Express, and MongoDB for server-side programming.
                  I always felt that something was missing in my profile, and that's when cloud technologies came to mind.
                   I started learning multicloud services like AWS, Azure, and GCP. Currently, I am in the process of learning AWS.
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About