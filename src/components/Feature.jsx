import React from 'react'

const Feature = (props) => {
  return (
    <div>
        <h1 className='font-ubuntu text-[1.05rem] text-gray-400'><span><i class="fa-solid fa-md fa-check text-yellow-300 mr-2"/></span>{props.text}</h1>
    </div>
  )
}

export default Feature