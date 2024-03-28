import React, { useState } from 'react'
import ShowItem from './ShowItem'

function ShowOrder({error, stocks}) {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState(-1);

    const handleClick = (index) => {
        setIsOpen(true);
        setId(index);
    }

  return (
    <div>
      {error !== null ? 
      <div>Error occured while creating order! Please try again.</div>
      : 
      <div className='flex justify-between py-4 px-2 shadow-2xl bg-pink-50 rounded mb-2'>
        <span className='w-1/5 break-words'>Stock Name</span>
        <span className='w-1/5 break-words'>Listing Price</span>
        <span className='w-1/5 break-words'>Quantity</span>
        <span className='w-1/5 break-words'>Type</span>
        <span className='w-1/5 break-words'>Price per unit</span>
      </div>
      }
      {
      !error &&  stocks?.map((stock, index) => {
        return (
          <div>
            <div className='flex'>
              <p className='w-1/5 break-words mb-2 text-blue-700 cursor-pointer' onClick={() => handleClick(index)}>{stock.stock_name}</p>
              <p className='w-1/5 break-words mb-2'>{stock.listing_price}</p>
              <p className='w-1/5 break-words mb-2'>{stock.quantity}</p>
              <p className='w-1/5 break-words mb-2'>{stock.type}</p>
              <p className='w-1/5 break-words mb-2'>{stock.price_per_unit}</p>
            </div>
          </div>
        )
      })}
      {isOpen === true && <ShowItem stock={stocks[id]} setIsOpen={setIsOpen} />}
    </div>
  )
}

export default ShowOrder
