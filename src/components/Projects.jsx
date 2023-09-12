import React from 'react'
import MyNewsHub from '../assets/MynewsHub.png'
import tableau from '../assets/tableau.png'


const Projects = () => {
  return (
    <div name='projects' className= 'w-full md:h-screen text-gray-300 bg-[#0a192f]' style={{ backgroundColor: "#fff" }}>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className ='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 bellFontStyle skillsParaStyle'>Projects</p>
                <br></br><br></br>
                <p className='personalInfoStyle'>Check out some of my recent projects</p>
            </div>
            {/*Container*/ }
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage:`url(${MyNewsHub})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div skillsBoxContainer'>
                   {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://my-news-hub.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Hardeep6singh/ProjectFrontend/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>  
                <div style={{ backgroundImage: `url('https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg')` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div skillsBoxContainer' >
                   {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        My Reddit Search
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://my-reddit-search.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Demo</button>
                            </a>
                            <a href="https://github.com/Hardeep6singh/MyRedditSearch">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>  
                <div style={{backgroundImage:`url(${tableau})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div skillsBoxContainer' >
                   {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Tableau Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://public.tableau.com/app/profile/hardeep.singh2626/viz/Emergency_Dataset_Analysis/Project_Emergency_data?publish=yes">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Demo</button>
                            </a>
                            <a href="https://drive.google.com/file/d/1dGu_sfe3bEs8iXqWYdr9IHHw9h_YpeRe/view">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Report</button>
                            </a>
                        </div>
                    </div>
                </div>  
                  
            </div>
        </div>

    </div>
  )
}

export default Projects