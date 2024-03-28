import React from 'react';
import AddItem from '../components/AddItem';
import DisplayItem from '../components/DisplayItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = ({stocks, setStocks, setWaiting, setError}) => {

    const url = "http://localhost:3001/api";
    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            setWaiting(true);
            setError(null);
            await axios.post(url + '/createOrder', stocks);
        } catch (error) {
            setError(error);
        }
        finally{
            navigate("/orderCreated");
            setWaiting(false);
        }
    }

    const addItem = (item) => {
        setStocks(stocks => [...stocks, item]);
    }
    const deleteItem = (id) => {
        if(window.confirm("do you want to delete this item?") === true) {
            setStocks(stocks.filter((stock, index) => {
                return index !== id;
            }))
        }
    }
    const updateItem = (id, item) => {
        setStocks(stocks.map((stock, index) => {
            if(index !== id) return stock;
            else {
                return item;
            }
        }))
    }

  return (
    <div className='py-4 min-h-screen'>
        <AddItem addItem={addItem}/>
        <h1 className='text-2xl py-4 text-center font-bold'>Your Stocks</h1>
        <div className='shadow-2xl'>
            { (stocks.length !== 0) ?
                <div className='flex justify-between py-4 px-2 shadow-2xl bg-pink-50 rounded w-9/12'>
                    <span className='w-1/5 break-words'>Stock Name</span>
                    <span className='w-1/5 break-words'>Listing Price</span>
                    <span className='w-1/5 break-words'>Quantity</span>
                    <span className='w-1/5 break-words'>Type</span>
                    <span className='w-1/5 break-words'>Price per unit</span>
                </div> : <div className='py-4 pl-2 mx-auto my-2 shadow-2xl bg-pink-50 rounded'>No products to show</div> 
            }
            { 
            stocks?.map((item, index) => { 
                return <DisplayItem key={index} item={item} id={index} deleteItem={deleteItem} updateItem={updateItem} />
            })
            }
        </div>
        { stocks.length !== 0 ?
        <button className='bg-blue-700 text-white py-2 px-4 mt-4 rounded-md' onClick={handleClick}>create order</button> : ""}
    </div>
  );
};

export default Home;
