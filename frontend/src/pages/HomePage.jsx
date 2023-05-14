import React from 'react'
import Header from '../components/Layout/Header'
import Hero from "../components/Route/Hero/Hero"
import Categories from "../components/Route/Categories/Categories.jsx"
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx"
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx"
import Events from "../components/Route/Events/Events.jsx"
import Sponsored from "../components/Route/Sponsored.jsx"
const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero/>
        <Categories/>
        <BestDeals/>
        <Events/>
        <FeaturedProduct/>
        <Sponsored/>

    </div>
  )
}

export default HomePage