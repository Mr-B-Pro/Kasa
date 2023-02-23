import React from 'react'
import "./Main.css"

// IMPORT FULL SECTION MAIN ACCUEIL
function Main(props) {
  return (
    <main className='main__container'>
        {props.children}
    </main>
  )
}

export default Main