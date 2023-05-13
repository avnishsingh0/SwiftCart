import React, { useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {LoginPage, SignupPage,ActivationPage,HomePage} from './Routes.js'
import './App.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Store from './Redux/store.js'
import { loadUser } from './Redux/Action/user.js'
const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign-up' element={<SignupPage/>}/>
        <Route path='/activation/:activation_token' element={<ActivationPage/>}/>
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

export default App