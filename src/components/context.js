import React,{useContext,useState,createContext} from 'react'
export const InputContext = createContext();

const Context=(props)=> {
    const thedata= JSON.parse(localStorage.getItem("transaction"));
    let initialIncome=JSON.parse(localStorage.getItem("income"));
    let initialExpense=JSON.parse(localStorage.getItem("expense"));
    let initialvalue=[{Description:"NaN",Amount:0}];
    
    if(thedata){
        initialvalue=thedata;
    }
    if(!initialExpense){
        initialIncome=0;
    }
    if(!initialExpense){
        initialExpense=0;
    }
    const [Transaction, setTransaction] = useState(initialvalue);
    const [Income, setIncome] = useState(initialIncome);
    const [Expense, setExpense] = useState(initialExpense);
  return (
    <InputContext.Provider value={[[Transaction, setTransaction],[Income, setIncome], [Expense, setExpense]]}>
    {props.children}
    </InputContext.Provider>
  )
}

export default Context
