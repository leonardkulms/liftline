import React, { useState } from 'react'
import './stylesheets/application.scss'
import LiftLine from './components/LiftLine'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const [theme, setTheme] = useState(0)

  const handleTheme = () => setTheme(!theme)

  return (
    <div className={'page ' + ( (theme)? 'dark' : 'light')} >
      <Header theme= { theme } handleTheme={handleTheme}/>
      <div className='app'>
        <LiftLine theme= { theme }/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
