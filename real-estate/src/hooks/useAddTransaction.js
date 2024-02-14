import React from 'react'

const useAddTransaction = () => {
    
    const addTransaction=async({
        description,
        transactionAmount,
        transactionType, 
    })=>{
        await addDoc(transactionCollectionref,{
            userID:"",
            description,
            transactionAmount,
            transactionType
            // createdAt:serverTimeStamp()
        })

    }
  return (
    <div>
      
    </div>
  )
}

export default useAddTransaction
