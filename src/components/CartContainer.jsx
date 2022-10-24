import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import { RiRefreshFill } from 'react-icons/ri'

import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import EmptyCart from '../img/emptyCart.svg'
import CartItem from './CartItem'

const CartContainer = () => {
    const [{ cartShow, cartItems, user }, dispatch] = useStateValue()
    const [tot, setTot] = useState(0)
    const [flag, setFlag] = useState(0)

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        })
    }

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
            return accumulator + item.qty * item.price
        }, 0)
        setTot(totalPrice)
        console.log(tot)
    }, [tot, flag])

    const clearCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: []
        })
        localStorage.setItem("cartItems", JSON.stringify([]))
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
            <div className='w-full flex items-center justify-between p-4'>
                <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
                    <MdOutlineKeyboardBackspace className='text-textColor text-3xl cursor-pointer' />
                </motion.div>
                <p className='text-textColor text-lg font-semibold'>Cart</p>
                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-3 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base'>Clear <RiRefreshFill onClick={clearCart}/> </motion.p>
            </div>

            {/* Bottom Section  */}
            {cartItems && cartItems.length > 0 ? (
                <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col justify-between' >
                    {/* cart item section  */}
                    <div className='w-full h-340 md:h-42  px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                        {/*  every cart Item  */}
                        {
                            cartItems && cartItems.map(item => (
                                <CartItem key={item.id} item={item} flag={flag} setFlag={setFlag} />
                            ))
                        }
                    </div>

                    {/* cart total section  */}
                    <div className='w-full flex bg-cartTotal rounded-t-[2rem]  flex-col items-center justify-evenly px-8 py-2'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-gray-400 text-lg'>Sub Total</p>
                            <p className='text-gray-400 text-lg'>$ {tot}</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-gray-400 text-lg'>Delivery</p>
                            <p className='text-gray-400 text-lg'>$ 2.5</p>
                        </div>

                        <div className='w-full border-b border-gray-600 justify-between'>
                            <div className='w-full flex item-center justify-between'>
                                <p className='text-gray-200 text-lg font-semibold'>Total</p>
                                <p className='text-gray-200 text-lg font-semibold'>${tot + 2.5}</p>
                            </div>

                            {user ? (
                                <motion.button
                                    whileTap={{ scale: 0.8 }}
                                    type='button'
                                    className='w-full p-2 rounded-full bg-gradient-to-tr from bg-orange-400 to-bg-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg '
                                >
                                    Check Out
                                </motion.button>
                            ) : (
                                <motion.button
                                    whileTap={{ scale: 0.8 }}
                                    type='button'
                                    className='w-full p-2 rounded-full bg-gradient-to-tr from bg-orange-400 to-bg-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg '
                                >
                                    Login to check out
                                </motion.button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                    <img src={EmptyCart} className='w-300' alt="Empty Cart image" />
                    <p className='text-xl text-textColor font-semibold'>
                        Add some items to the cart
                    </p>
                </div>
            )}

        </motion.div>
    )
}

export default CartContainer