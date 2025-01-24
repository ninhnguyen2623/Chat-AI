import React, { useState } from 'react'
import ImgAi from "../assets/temp.jpeg"
import IconMenu from "../assets/menu.png"
import Sidebar from '../components/Sidebar'
export default function ChatDetail() {
    const [menuToggle, setMenuToggle] = useState(false)
    return (
        <div className='text-white xl:w-[80%] w-full relative'>
            <div className=" flex items-center p-4">
                <button onClick={() => setMenuToggle(!menuToggle)} className='xl:hidden'>
                    <img src={IconMenu} alt="menu" className='w-8 h-8' />
                </button>
                <h1 className="text-xl uppercase font-bold p-3">ChatAI</h1>
            </div>
            {menuToggle && (
                <div className="absolute w-auto h-full top-0 left-0"><Sidebar onToggle={() => setMenuToggle(!menuToggle)} /></div>
            )}
            <div className="flex flex-col space-y-5 max-w-[80%] w-full mx-auto mt-30">
                <div className="space-y-1">
                    <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400
                        text-3xl inline-block text-transparent bg-clip-text text-[40px] font-bold
                    ">Hi you</h2>
                    <p className='text-2xl'>Can I help you today !</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-[200px] h-[200px] bg-sidebar flex justify-center items-center">
                        <p>Planing for eat</p>
                    </div>
                    <div className="w-[200px] h-[200px] bg-sidebar flex justify-center items-center">
                        <p> New centances</p>
                    </div>
                    <div className="w-[200px] h-[200px] bg-sidebar flex justify-center items-center">
                        <p>Tips for works</p>
                    </div>
                    <div className="w-[200px] h-[200px] bg-sidebar">
                        <p className='mt-2 text-center'>Create img for AI</p>
                        <img src={ImgAi} alt="img from ai" className=' w-[90%] m-auto my-4 overflow-auto' />
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder='Enter search information'
                        className='w-[90%] border bg-sidebar p-4 rounded-lg' />
                    <button className='p-4 rounded-lg bg-green-500'>Send</button>
                </div>
            </div>
        </div>
    )
}
