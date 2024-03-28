import React, { useState } from 'react';

const AddItem = ({ addItem }) => {

    const [stock, setStock] = useState({
        stock_name: "",
        listing_price: "",
        quantity: "",
        type: "buy",
        price_per_unit: ""
    });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStock(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(stock);
  };

  return (
    <div className='flex flex-col py-4 pl-2 my-2 shadow-2xl bg-pink-50 rounded'>
        <h1 className='text-2xl text-center font-bold'>Add Stock</h1>
        <form onSubmit={handleSubmit}>
          <div className='pr-3 my-2'>
            <label>Stock Name:</label>
            <input type="text" name="stock_name" value={stock.stock_name} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1' />
          </div>
          <div className='pr-3 my-2'>
            <label>Listing Price:</label>
            <input type="number" name="listing_price" value={stock.listing_price} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1'/>
          </div>
          <div className='pr-3 my-2'>
            <label>Quantity:</label>
            <input type="number" name="quantity" value={stock.quantity} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1'/>
          </div>
          <div className='pr-3 my-2'>
            <label>Type:</label>
            <select id='type' name='type' required value={stock.type} onChange={handleInputChange} className='border-2 border-black rounded ml-2 px-1'>
              <option value='buy'>buy</option>
              <option value='sell'>sell</option>
            </select>
          </div>
          <div>
            <label>Price per unit:</label>
            <input type="number" name="price_per_unit" value={stock.price_per_unit} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1'/>
          </div>
          <button type="submit" className='bg-blue-700 text-white py-2 px-4 mt-4 rounded-md text-center mx-auto self-start'>Add Stock</button>
        </form>
    </div>
  );
};

export default AddItem;
