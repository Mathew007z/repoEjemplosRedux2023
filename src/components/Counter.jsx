import React from 'react'
import { increment, decrement, reset } from '../actions'
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.contador)


  return (
    <div>
        {counter}
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(increment())}> +  </button>
        <button onClick={() => dispatch(reset())}> reset </button>
    </div>
  )
}


export default Counter