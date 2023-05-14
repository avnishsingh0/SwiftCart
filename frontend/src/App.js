import React, { useEffect } from 'react'
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import {LoginPage, SignupPage,ActivationPage,HomePage,ProductsPage,BestSellingPage,EventsPage,FAQPage} from './Routes.js'
import './App.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Store from './Redux/store.js'
import { loadUser } from './Redux/Action/user.js'
import { useSelector } from 'react-redux'

const App = () => {
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
  <>
    {
      loading ? (
        null
      ):(
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign-up' element={<SignupPage/>}/>
        <Route path='/activation/:activation_token' element={<ActivationPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/best-selling' element={<BestSellingPage/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/faq' element={<FAQPage/>}/>

      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
      )
    }
  </>
  )
}

export default App