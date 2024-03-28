import React from 'react';
import './item.css';

function ShowItem({stock, setIsOpen}) {
  console.log(stock)
  // const stock = stocks[id];
  return (
    <div className='absolute z-10 top-0 left-0 w-screen h-screen show-open-transition'>
      <div className='bg-slate-500 w-4/5 h-4/5 mx-auto mt-4 flex flex-col justify-center items-center text-white'>
        <p className='mb-2'>Stock Name: {stock.stock_name}</p>
        <p className='mb-2'>Quantity: {stock.quantity}</p>
        <p className='mb-2'>Type: {stock.type}</p>
        <p className='mb-2'>Price per unit: {stock.price_per_unit}</p>
        <button className='bg-blue-700 py-2 px-4 rounded-md mt-5' onClick={() => setIsOpen(false)}>close</button>
      </div>
    </div>
  )
}

export default ShowItem
