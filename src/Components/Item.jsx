import React from 'react';

const Item = () => {
  return (
    <div className='flex gap-4'>
      <input placeholder="description" type="text" />
      <input placeholder="qty" type="text" />
      <input placeholder="price" type="text" />
      
    </div>
  )
}

export default Item