
import React, {useState} from 'react';
import './item.css';

function Item({ id, item, closePopUp }) {

  const [updatedItem, setUpdatedItem] = useState(item);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='absolute z-10 top-0 left-0 w-screen h-screen show-open-transition'>
        <div className='bg-slate-500 w-4/5 h-4/5 mx-auto mt-4 p-6'>
          <h1 className='text-2xl text-center'>Update Stock details</h1>
          <form>
            <div className='pr-3 my-2'>
              <label>Stock Name:</label>
              <input type="text" name="stock_name" value={updatedItem.stock_name} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1 outline-none' />
            </div>
            <div className='pr-3 my-2'>
              <label>Listing Price:</label>
              <input type="number" name="listing_price" value={updatedItem.listing_price} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1  outline-none'/>
            </div>
            <div className='pr-3 my-2'>
              <label>Quantity:</label>
              <input type="number" name="quantity" value={updatedItem.quantity} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1  outline-none'/>
            </div>
            <div className='pr-3 my-2'>
              <label>Type:</label>
              <select id='type' name='type' required value={updatedItem.type} onChange={handleInputChange} className='border-2 border-black rounded ml-2 px-1  outline-none'>
                <option value='buy'>buy</option>
                <option value='sell'>sell</option>
              </select>
            </div>
            <div>
              <label>Price per unit:</label>
              <input type="number" name="price_per_unit" value={updatedItem.price_per_unit} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1  outline-none'/>
            </div>
          </form>
        </div>
        <div className='text-2xl bg-slate-500 rounded-full inline-block p-2 absolute left-1/2 mt-2 cursor-pointer' onClick={() => closePopUp(updatedItem)}>update detail</div>
    </div>
  )
}

export default Item
