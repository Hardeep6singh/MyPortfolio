import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import ReactImg from '../assets/react.png';
import NodeImg from '../assets/node.png';
import Javascript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Github from '../assets/github.png';
import Aws from '../assets/aws.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' style={{ backgroundColor: "#fff" }}>
        {/*Container*/}
        <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-pink-600 bellFontStyle skillsParaStyle'>Skills</p>
               
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 skillsBoxContainer'>
                    <img classname='w-15 mx-auto'src={HTML} alt="HTML icon" />
                    <p className='my-4 personalInfoStyle'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 skillsBoxContainer'>
                    <img classname='w-15 mx-auto'src={CSS} alt="HTML icon" />
                    <p className='my-4 personalInfoStyle'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 skillsBoxContainer'>
                    <img classname='w-15 mx-auto'src={Javascript} alt="HTML icon" />
                    <p className='my-4 personalInfoStyle'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 skillsBoxContainer'>
                    <img classname='w-15 mx-auto'src={ReactImg} alt="HTML icon" style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                    <p className='my-4 personalInfoStyle'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 skillsBoxContainer'>
                    <img classname='w-15 mx-auto'src={Github} alt="HTML icon" />
                    <p className='my-4 personalInfoStyle'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 skillsBoxContainer'>
                    <img classname='w-15 mx-auto'src={NodeImg} alt="HTML icon" />
                    <p className='my-4 personalInfoStyle'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 skillsBoxContainer'>
                    <img classname='w-15 mx-auto'src={Mongo} alt="HTML icon" />
                    <p className='my-4 personalInfoStyle'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 skillsBoxContainer'>
                    <img classname='w-15 mx-auto'src={Aws} alt="HTML icon" />
                    <p className='my-4 personalInfoStyle'>AWS</p>
                </div>

            </div>     
        </div>
    </div>
  )
}

export default Skills