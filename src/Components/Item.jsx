import React from 'react';

const Item = () => {
  return (
    <div className='flex gap-4'>
      <input type="text" className='border rounded-sm' />
      <input type="number" className='border rounded-sm' />
      <input type='number' className='border rounded-sm'/>
      <p id="amountPerItem">0.00</p>
      
    </div>
  )
}

export default Item