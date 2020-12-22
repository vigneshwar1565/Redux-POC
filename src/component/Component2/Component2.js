import React from 'react'
import '../../index.css'
//Import useDispatch hook to dispatch action to the reducer
import { useDispatch } from 'react-redux'
//Import decrement action 
import { decrement } from '../../actions/actions'

const component2 =()=>{
    const dispatch = useDispatch()
    //Set onClick event of button to dispatch increment action to reducer
    return (<button className='component'
            onClick={()=>dispatch(decrement())}>
            Counter 2
            </button>)}

export default component2