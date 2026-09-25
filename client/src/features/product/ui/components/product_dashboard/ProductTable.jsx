import React from 'react'
import { useNavigate } from 'react-router'

const ProductTable = () => {
    const navigate = useNavigate();

  return (
    <div className='flex gap-3'>
        <button className='bg-green-400' onClick={() => navigate('/dashboard/product/add')}>add</button>
        <button className='bg-green-400' onClick={() => navigate('/dashboard/product/update')}>update</button>
    </div>
  )
}

export default ProductTable