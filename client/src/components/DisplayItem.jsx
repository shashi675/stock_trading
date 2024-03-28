import React, {useState} from 'react';
import Item from './Item';

function DisplayItem({ item, id, deleteItem, updateItem }) {
    const [isOpen, setIsOpen] = useState(false);

    const showPopUp = () => {
        setIsOpen(true);
    }
    const closePopUp = (item) => {
        updateItem(id, item);
        setIsOpen(false);
    }

    return (
    <div className='flex justify-between items-center py-2 px-2 bg-pink-50'>
        <div className='flex w-9/12'>
            <p className='w-1/5 break-words'>{item.stock_name}</p>
            <p className='w-1/5 break-words'>{item.listing_price}</p>
            <p className='w-1/5 break-words'>{item.quantity}</p>
            <p className='w-1/5 break-words'>{item.type}</p>
            <p className='w-1/5 break-words'>{item.price_per_unit}</p>
        </div>
        <div className='flex justify-around w-2/12'>
            <button className='bg-green-700 text-white py-1 px-2 rounded-md text-center mx-auto self-start' onClick={() => showPopUp()}>update</button>
            <button className='bg-red-700 text-white py-1 px-2 rounded-md text-center mx-auto self-start' onClick={() => deleteItem(id)}>delete</button>
        </div>
        {isOpen ? <Item id={id} item={item} closePopUp={closePopUp} /> : ""}
    </div>
    );
}

export default DisplayItem;