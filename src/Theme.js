import React from 'react'
import { useState } from 'react'



const Theme = () => {
    const [darkTheme, setDarkTheme] = React.useState(false)

  return (
    <div>
        
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
            <nav>
                <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
                    Toggle Theme
                </button>
            </nav>
      </div>



    </div>
  )
}

export default Theme