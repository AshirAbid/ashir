import React from 'react'

const About = () => {
    const obj=[
        {title:"nofil",age:20, id: 1},
        {title:"ashir",age:2, id: 2},
        {title:"ali",age:20, id: 3},
        {title:"yousuf",age:2, id: 4},
        {title:"abdullah",age:2, id: 5},
        {title:"mohsin",age:2, id: 6},
    ]
  return (
    <>
    {
        obj.map((item)=>{
            return <>
            <div key={item.id}><h1 >{item.title}</h1></div>
            {/* <h5>{item.age} </h5> */}
            </>
        })
    }
    </>
  )
}

export default About