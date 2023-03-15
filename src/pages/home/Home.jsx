import React from 'react'
import HomeBanner from "../../layout/home-banner/home-banner.jsx"
import HomeGrid from "../../layout/home-grid/home-grid.jsx"
import "./home.css"

// PAGE HOME
function home() {
  return (
    <main className='main__home'>
        <HomeBanner />
        <HomeGrid />
    </main>
  )
}

export default home