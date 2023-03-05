import React from 'react'
import BannerHome from "../../components/bannerHome/BannerHome.jsx"
import ApartmentsGrid from "../../components/apartmentsGrid/ApartmentsGrid.jsx"
import "./Home.css"

// PAGE HOME
function Home() {
  return (
    <main className='main__home'>
        <BannerHome />
        <ApartmentsGrid />
    </main>
  )
}

export default Home