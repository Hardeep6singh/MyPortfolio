import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' style={{ backgroundColor: "#00549a" }}>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white-600 text-gray-300 bellFontStyle' style={{ color: "#fff" }}>Contact</p>
                <p className='text-gray-300 py-4' style={{ color: "#fff" }}>// Submit the form below or shoot me an email - hharrys.singh467@gmail.com</p>
            </div>
            <input className='p-2 bg-[#fff]' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#fff]'type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#fff] p-2' name="messsage" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' style={{ color: "#fff" }}>
                Lets Collaborate
            </button>
        </form>
        
    </div>
  )
}

export default Contact