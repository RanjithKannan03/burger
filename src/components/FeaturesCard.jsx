import React from 'react'

const FeaturesCard = (props) => {
  return (
    <div className='text-white'>
                <i class={props.icon}/>
                <div className='py-4'>
                <h1>{props.text}</h1>
                </div>
                </div>
  )
}

export default FeaturesCard