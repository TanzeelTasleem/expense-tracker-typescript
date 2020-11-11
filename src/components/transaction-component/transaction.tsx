import React, { useContext } from 'react'
import {GlobalContext} from '../../context/globalContext'
import './transaction.css'

export const Transaction = () => {
    const {transaction,dispatch} = useContext(GlobalContext)

    function deleteTransaction(item : any){ 
        dispatch({
             type:"DELETE_TRANSACTION",
             payload:{
                value:item
             }
         })
     }
  
    return (
        <div className="transaction">
            <h5>History</h5>
            <hr/>
            <ul className="list-group">
                {transaction.map((obj,index)=>{
                    return( <li key={index} className=" list-group-item list-group-item-success list">
                    <button onClick={()=>{deleteTransaction(index)}} className="btn-1">x</button>
                    <span>{obj.text}</span>
                    <span>${obj.amount}</span>
                </li>)
                })}
            </ul>
           
        </div>
    )
}