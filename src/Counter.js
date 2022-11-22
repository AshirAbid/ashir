import React,{useState} from 'react'

const Counter = () => {
    const [value,setvalue]=useState(4)
    // const incriment=()=>{
    //     setvalue(value+1)
    // }
    // const decrement=()=>{
    //     setvalue(value-1)
    // }

  return (
    <>
    <span>{value}</span>
    <button onClick={()=>setvalue(value+1)}>+</button>
    <button onClick={()=>setvalue(value-1)}>-</button>
    </>
  )
}

export default Counter