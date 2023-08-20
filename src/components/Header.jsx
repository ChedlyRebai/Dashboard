import React from 'react'

const Header = ({category,title}) => {
  return (
    <div classNam="mb-10">
     <p className='text-gray-400'>
          {category}
     </p>
     <p className="text-3xl font-semibold tracking-tight text-smlate-900">
      {title}
     </p>
    </div>
  )
}

export default Header
