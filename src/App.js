// import React,{useContext}from 'react'
import './App.css';
import Details from './components/Details';
import Expense from './components/Expense';
import History from './components/History';
import Navbar from './components/Navbar';
import Context from './components/context';



function App() {
   
  return (
    <div className='XpensTrker'>
    <Context>
    <div className="wrap">
    <Navbar/>
    <Expense/>
    <History/>
    <Details/>
    </div>
    </Context>
    </div>
  )
}

export default App;
