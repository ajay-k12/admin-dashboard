import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'
import { chatData } from '../data/dummy';
import Button from './Button';

function Notification() {
  const { setIsClicked, currentColor } = useStateContext();
  return (
    <div className='nav-item absolute right-5  top-16 w-96 bg-white p-8 md:right-40 rounded-lg  dark:bg-[#42464D]  '>
      <div className='flex justify-between items-center'>
        <div className='flex p-3'>
          <p className='font-semibold dark:text-gray-300'>Notifications</p>
        </div>
        <button 
           type='button'
           onClick={() => setIsClicked(false)}
           style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
           className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
      </div>
      {chatData.map((item, index) => (
        <div key={index}>
          <div className='flex items-center gap-5 p-2 border-b-1'>
            <img className='m-2 h-10 w-10 rounded-full' src={item.image} />
            <div >
              <p className='font-semibold text-base mb-1 dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-600 text-sm dark:text-gray-300'>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
      <div className='mt-5'>
      <Button 
        color="white"
        bgColor={currentColor}
        width ="full"
        text="See all notifications"
        borderRadius="10px"
      />
      </div>
    </div>
  )
}

export default Notification