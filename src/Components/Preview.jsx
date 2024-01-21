import React from 'react';
import { Link } from 'react-router-dom';


const Preview = ({name,invoiceNo,date,dueDate,tax,discount,bankName,accName,accNo,clientName,clientNo,orgName,orgAddress,orgNo,termsConditions}) => {
  return (
    <div className='flex gap-4 justify-center'>
      

      <div>
        <p>{name}</p>
        <p>{invoiceNo}</p>
        <p>{date}</p>
        <p>{dueDate}</p>
        <p>{tax}</p>
        <p>{discount}</p>
        <p>{bankName}</p>
        <p>{accName}</p>
        <p>{accNo}</p>
        <p>{clientName}</p>
        <p>{clientNo}</p>
        <p>{orgName}</p>
        <p>{orgAddress}</p>
        <p>{orgNo}</p>
        <p>{termsConditions}</p>
      </div>
    </div>

  )
}

export default Preview



