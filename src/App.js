import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { CreateContainer, Header, MainContainer } from './components'
import { useStateValue } from './context/StateProvider'
import { getActiveElement } from '@testing-library/user-event/dist/utils'
import { getAllFoodItems } from './components/utils/firebaseFunctions'
import { actionType } from './context/reducer'


function App() {
  const [{ foodItems }, dispatch] = useStateValue()

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      // 4:28
      // console.log(data)

      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className='mt-14  md:mt-10 px-8 md:px-16  w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />}></Route>
            <Route path='/createItem' element={<CreateContainer />}></Route>
          </Routes>
        </main>
      </div>
    </AnimatePresence>

  )
}

export default App