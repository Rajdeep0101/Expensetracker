import React,{useState,useContext,useEffect}from 'react'
import { InputContext } from './context';
import './Details.css';

export default function Details() {
    
   const [[Transaction, setTransaction],[Income, setIncome], [Expense, setExpense]] = useContext(InputContext);
   const [txtvalue, setTxtvalue] = useState("");
   const [amountvalue, setAmountvalue] = useState("");
   useEffect(() => {
     localStorage.setItem("transaction",JSON.stringify(Transaction))
   }, [Transaction]);

   useEffect(() => {
    localStorage.setItem("income",JSON.stringify(Income))
  }, [Income]);

  useEffect(() => {
    localStorage.setItem("expense",JSON.stringify(Expense))
  }, [Expense]);

 const handleClick=()=>{
if(!isNaN(parseInt(amountvalue))){
  if(txtvalue!==""){
  setTransaction((prevtran)=>[...prevtran,{Description:txtvalue,Amount:amountvalue},])
}
}
if(parseInt(amountvalue)>=0){
  setIncome(parseInt(Income)+parseInt(amountvalue));
}
if(parseInt(amountvalue)<0){
  setExpense(parseInt(Expense)+(parseInt(amountvalue)));
}
setTxtvalue('');
setAmountvalue('');
window.localStorage.clear();
  }
   

  return (
    <form className='details' action='#' autoComplete='off'>
    <div className="headingtext"><p>Add New Transactions</p></div>
    {/* <div className="transaction"> */}
        <div className="textdetails">
        {/* <span className="purpose">Text :</span> */}
        <label htmlFor="exampleInputPurpose" className='purpose'>Description :</label>
        <input type="text" id="textdata" name="textdata" onChange={(e)=>setTxtvalue(e.target.value)} value={txtvalue} placeholder="Enter text...."/>
        </div>
        <div className="amountdetails">
        {/* <span className="purpose">Amount :</span> */}
        <label htmlFor="exampleInputAmount" className='Amount'>Amount :</label>
        <input type="number" id="amountdata"  value={amountvalue}  onChange={(e)=>setAmountvalue(e.target.value)}  placeholder="Amount..."/>
        </div>
        <button className="btn" type="button" onClick={handleClick} >Add Transaction</button>
        
    {/* </div> */}
    </form>
  )
}

