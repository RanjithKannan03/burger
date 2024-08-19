import React from 'react'

const Line = (props) => {
  return (
    <div className={'my-[1.5rem] border-t-[4px] w-[11rem] h-0 overflow-hidden border-solid ml-2 '+props.color}>
                <h1 className='text-white'>Hello</h1>
    </div>
  )
}

export default Line