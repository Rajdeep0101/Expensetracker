import React,{useContext} from 'react'
import './Expense.css';
import { InputContext } from './context';

export default function Expense() {
    const [[Transaction, setTransaction],[Income, setIncome], [Expense, setExpense]] = useContext(InputContext);
  return (
    <div className='container'>
        {/* <div style={{height:"75%"}}> */}
            <div className="total">
                <p>Your Balance: {(parseInt(Income))+(parseInt(Expense))}</p>
            </div>
            <div className="expensecontainer">
                <div className="plus"><h2>Income: {parseInt(Income)}</h2></div>
                <div className="minus"><h2>Expense: {Math.abs(parseInt(Expense))}</h2></div>
            </div> 
        </div>
  )
}


