import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';


const TransactionList = () => {
  //const context = useContext(GlobalContext);
  //console.log(context)

  const { transactions, getTransactions } = useContext(GlobalContext); // using destructing to get transactions from context

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
    <h3>History</h3>
    <ul className="list" >
      {transactions.map(transaction => (
        <Transaction key={transaction._id} transaction={transaction} />
      ))}
      
    </ul>
    </>
  )
}

export default TransactionList
