import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from '../components/Products/ProductDetails'
import { useParams } from 'react-router-dom'
import { productData } from '../static/data'
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx"
import { useSelector } from 'react-redux'
const ProductsDetailsPage = () => {

  const {allProducts}= useSelector((state)=>state.products)
    const {_id}= useParams();
    const [data,setData]= useState(null)
    const productName= _id.replace(/-/g," ");

    useEffect(()=>{
        const data = allProducts && allProducts.find((i)=>i._id === productName)
        setData(data)
    },[])
    console.log(allProducts)
    console.log(data)

  return (
    <div>
        <Header/>
        <ProductDetails data={data}/>
        {
          data && <SuggestedProduct data={data}/>
        }
        <Footer/>
    </div>
  )
}

export default ProductsDetailsPage