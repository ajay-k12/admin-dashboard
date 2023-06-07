import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'
import { userProfileData } from '../data/dummy';
import avatar from '../data/avatar.jpg'
import Button from './Button';

function UserProfile() {
  const { setIsClicked, currentColor } = useStateContext();
  return (
    <div className='nav-item absolute right-5  top-16 w-96 bg-white p-8 md:right-30 rounded-lg  dark:bg-[#42464D]  '>
      <div className='flex justify-between items-center'>
        <div className='flex p-3'>
          <p className='font-semibold dark:text-gray-300'>UserProfile</p>
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
      <div className='flex gap-6 border-b-1'>
            <img className='rounded-full w-20 mb-4 mt-4' src={avatar}/>
            <div className='mt-5'>
              <p className='font-semibold text-xl dark:text-gray-200 mb-1'>Ajay Singh Raj</p>
              <p className=' text-gray-600 text-sm dark:text-gray-200'>Administrator</p>
              <p className=' text-gray-600 text-sm dark:text-gray-200'>info@gmail.com</p>
            </div>
      </div>
      {userProfileData.map((item, index) => (
        <div key={index}>
          <div className='flex items-center gap-5 p-2 border-b-1'>
            <button className='text-4xl' style={{background:item.iconBg, color:item.iconColor, borderRadius: '5px'}}>
              {item.icon}
            </button>
            <div >
              <p className='font-semibold text-base mb-1 dark:text-gray-200'>{item.title}</p>
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
        text="See all UserProgiles"
        borderRadius="10px"
      />
      </div>
    </div>
  )
}

export default UserProfile