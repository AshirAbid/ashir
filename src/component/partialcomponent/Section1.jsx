import React from 'react'
import phone2 from '../../assets/phone2.webp'
import phone3 from '../../assets/phone3.jpg'
import phone4 from '../../assets/phone4.jpg'
import phone5 from '../../assets/phone5.jpg'

const Section1 = () => {
  const obj = [
    {
      image : phone2, 
      title : "asd",
      id : 1
    },
    {
      image : phone3, 
      title : "asadsd",
      id : 2
    },
    {
      image : phone4, 
      title : "aASdasa",
      id : 3
    },
    {
      image : phone5, 
      title : "aewr",
      id : 4
    },
    
  ]
  return (
    <>
    {
      obj.map((item) => {
        return(
        <div className='Images' key={item.id}>
          <img src={item.image} alt='' /> 
          <p>{item.title}</p>
        </div>  
        )
      })
    }
    </>
  )
}

export default Section1