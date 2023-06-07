import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { cartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from './Button';

function Cart() {
  const {setIsClicked, currentColor} = useStateContext();
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 overflow-auto'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='text-lg font-semibold'>Shopping Cart</p>
          <button 
           type='button'
           onClick={() => setIsClicked(false)}
           style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
           className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
          {cartData?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='flex items-center leading-8 gap-5 p-4 border-b-1 dark:border-gray-600'>
                  <img className='rouded-lg h-80 w-24' src={item.image} alt="" />
                  <div>
                    <p className='font-semibold'>{item.name}</p>
                    <p className='text-sm text-gray-600 dark:text-white'>{item.category}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='font-semibold text-lg'>{item.price}</p>
                      <div className='flex items-center border-1 border-r-1 border-color rounded'>
                      <p className="p-2 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                      <p className="p-2 border-color dark:border-gray-600 text-green-600">0</p>
                      <p className="p-2 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='mt-3 mb-3 p-4'>
              <div className='flex items-center justify-between'>
                <p className='text-gray-500 dark:text-gray-200'>Sub Total</p>
                <p className='font-semibold'>$890</p>
              </div>
              <div className='flex items-center justify-between mt-3'>
                <p className='text-gray-500 dark:text-gray-200'>Total</p>
                <p className='font-semibold'>$890</p>
              </div>
          </div>
              <div className='mt-5'>
                <Button 
                  color="white"
                  bgColor={currentColor}
                  text="Place Order"
                  borderRadius="10px"
                  width="full"
                />
              </div>
      </div>
    </div>
  )
}

export default Cart
