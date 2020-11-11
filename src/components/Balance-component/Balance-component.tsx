import React, { useContext } from 'react'
import {GlobalContext} from '../../context/globalContext'
import './balance.css'


export const Balance = () => {
    const {transaction} = useContext(GlobalContext)
    const array = transaction.map((obj)=> obj.amount)
    const currentBalance = array.reduce((a,b)=>a+b ,0)
    return (
        <div className="container">
            <h5>Your Balance</h5>
            <h2>${currentBalance}.00</h2>
        </div>
    )
}