import React, { useContext } from 'react'
import './Display.css'
import {GlobalContext} from '../../context/globalContext'
export const Display = () => {
    const {transaction} = useContext(GlobalContext);
    const incomeArray = transaction.map((obj)=> obj.amount>=0 ? obj.amount : 0)
    const income = incomeArray.reduce((a,b)=>a+b,0)
    const expenseArray = transaction.map((obj)=> obj.amount<0 ? obj.amount : 0)
    const expense = expenseArray.reduce((a,b)=>a+b,0)
    
    
    return (
        <div className="parent">
            <div className="child-1">
                <h5><strong>INCOME</strong> <span className="v1"> </span></h5>
                    <div className="income">
                        <h5>${income}</h5>
                    </div>
            </div>
            <div className="child-2">
                <h5><strong>EXPENSE</strong></h5>
                     <div className="expence">
                        <h5>${expense}</h5>
                    </div>
            </div>
        </div>
    )
}