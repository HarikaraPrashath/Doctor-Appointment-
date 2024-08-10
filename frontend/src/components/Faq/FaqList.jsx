import React from 'react'
import{faqs} from '../../assets/data/faqs'
import FaqItems from './FaqItems'
const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
      {faqs.map((items,index)=>(
        <FaqItems item={items} key={index}/>
      ))}
    </ul> 
  )
}

export default FaqList
