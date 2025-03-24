import heroImg from './assets/hero-img.png'
import './App.css'
import Search from './Components/Search.jsx';
import { useState } from 'react';


function App() {
  
  const [searchTerm, setSerachTerm] = useState(' ');
  
  return (
    <>
        <main>
            <div className='pattern'></div>
            <div className='wrapper'>
                <header>
                    <img className='-z-10' src={heroImg} alt="hero image"/>
                    <h1>Find all <span className='text-lime-300'> Movies </span> you'll Enjoy Without the Hassle</h1>
                </header>
                <Search searchTerm = {searchTerm} setSerachTerm={setSerachTerm}/>
            </div>
        </main>
    </>
  )
}

export default App
