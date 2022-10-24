import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import Notfound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({ flag, data, scrollValue }) => {
  const image = "https://firebasestorage.googleapis.com/v0/b/restaurantapp-1ef29.appspot.com/o/Images%2F1657044485572f7.png?alt=media&token=bdbf4567-8116-4b1b-b648-61520efcf1de"
  const data1 = [
    {

      calories: "80",
      id: 1657044510314,
      imageURL: image,
      qty: 1,
      title: "Rasberry",
      category: "fruits",
      price: "1"
    },
    {

      calories: "80",
      id: 1657044510314,
      imageURL: image,
      qty: 1,
      title: "Rasberry",
      category: "fruits",
      price: "2"
    },
    {

      calories: "80",
      id: 1657044510314,
      imageURL: image,
      qty: 1,
      title: "Rasberry",
      category: "fruits",
      price: "3"
    },
    {

      calories: "80",
      id: 1657044510314,
      imageURL: image,
      qty: 1,
      title: "Rasberry",
      category: "fruits",
      price: "4"
    },
    {

      calories: "80",
      id: 1657044510314,
      imageURL: image,
      qty: 1,
      title: "Rasberry",
      category: "fruits",
      price: "5"
    },
    {

      calories: "80",
      id: 1657044510314,
      imageURL: image,
      qty: 1,
      title: "Rasberry",
      category: "fruits",
      price: "6"
    }
  ]
  
  const rowContainer = useRef()
  const [items, setItems] = useState([])
  const [{cartItems}, dispatch] = useStateValue()

  const addToCart = () => {
    // console.log(item)
    
    dispatch({
      type : actionType.SET_CARTITEMS,
      cartItems : items,
    })
    localStorage.setItem("cartItems", JSON.stringify(items))
  }

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue])

  useEffect(()=> {
    addToCart()
  },[items])

  return (
    <div
      ref={rowContainer}
      //need to solve ternary conition later and after uploading more data change data1 to data
      className={flag ? "w-full flex items-center gap-3 my-12 scroll-smooth overflow-x-scroll scrollbar-none" : "w-full flex items-center gap-3 my-12 scroll overflow-x-hidden flex-wrap justify-center"}>
      {data && data.length > 0? data.map(item => (
        <div key={item.id} className='w-275 h-auto min-w-[300px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between'>
          <div className='w-full flex items-center justify-between'>
            <motion.div 
             whileHover={{ scale: 1.2 }} 
             className='w-40 h-40 -mt-8 drop-shadow-2xl'
             >
              <img className='w-full h-full object-contain'
                src={item.imageURL} alt="Product Image" />
            </motion.div>

            <motion.div whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md bg-red-600'
              onClick={() => setItems([...cartItems, item])}
              >
              <MdShoppingBasket className='text-white' />
            </motion.div>
          </div>

          <div className='w-full flex flex-col items-end justify-end'>
            <p className='text-textColor font-semibold text-base md:text-lg'>{item.title}</p>
            <p className='mt-1 text-sm text-gray-500'>{item.calories} Calories</p>
            <div className='flex items-center gay-8'>
              <p className='text-lg text-headingColor font-semibold'>
                <span className='text-sm text-red-500'>$</span> {item.price}
              </p>

            </div>
          </div>
        </div>
      )) :(
        <div className='w-full flex flex-col items-center justify-center'>
          <img className='h-[340px]' src={Notfound} alt="NotFound" />
          <p className='text-xl text-headingColor font-semibold my-2'>Items Not Available</p>
        </div>
      ) }
    </div>
  )
}

export default RowContainer