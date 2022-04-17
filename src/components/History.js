import React,{useContext} from 'react'
import './History.css';
import { InputContext } from './context';

export default function History() {
  const [[Transaction, setTransaction],[Income, setIncome], [Expense, setExpense]] = useContext(InputContext);
  const deletetran=(e)=>{
    const todelete=Transaction[e.target.id];
  //  setTransaction(prevtrans=>(prevtrans.filter((element,index,arr)=>index!==todelete)))
   setTransaction(prevtrans=>(prevtrans.filter((elem,index,arr)=>index!=e.target.id)));
   if(todelete.Amount>=0){

     setIncome(Income-Math.abs(todelete.Amount));
   }
   else if(todelete.Amount<0){

     setExpense(Expense-(todelete.Amount));
   }
  }
  return (
    <div className='historysection'>
      <div className="htext"><p>History</p></div>
      <div id="history">
      {
        Transaction.map((transaction,index)=> <div className="content" key={index}>
        <div className="whatfor">{transaction.Description}</div>
        <div className="money">{transaction.Amount}</div>
        <div className="deletebtn">
        <i className="fa-solid fa-trash" onClick={deletetran} id={index}></i>

        </div>
        <div className={transaction.Amount<0?"sign2":"sign1"} ></div>
    </div>)
      }
         
         
      </div>
    </div>
  )
}

