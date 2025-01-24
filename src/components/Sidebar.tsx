import React from 'react'
import IconPlus from '../assets/plusIcon.png'
import IconChat from '../assets/chat.png'
import IconDelete from '../assets/remove.png'
import IconMenu from '../assets/menu.png'
export default function Sidebar({ onToggle }: { onToggle: () => void }) {

    return (
        <>
            <div className='bg-sidebar w-[280px] h-screen text-white'>
                <button className='flex ml-auto p-4 xl:hidden' onClick={onToggle}>
                    <img src={IconMenu} alt="menu" className='h-[40px] w-[40px]' />
                </button>
                <div className='mt-20 w-full flex justify-center items-center'>
                    <button className='px-4 py-1 flex justify-center items-center w-full mx-3 space-x-4 bg-gray-600'>
                        <img src={IconPlus} alt="plus icon" className='w-4 h-4' />
                        <p>New chat</p>
                    </button>
                </div>
                <div className="mt-10">
                    <p className='ml-3'>Recent :</p>
                    <div className="mt-10 flex flex-col space-y-6 p-3">
                        <div className="flex items-center justify-between p-3 bg-gray-800">
                            <div className="flex items-center bg-gray-800">
                                <img src={IconChat} alt="chat icon" className='w-10 h-10' />
                                <p className='ml-3'>New chat</p>
                            </div>
                            <div>
                                <img src={IconDelete} alt="chat icon" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
