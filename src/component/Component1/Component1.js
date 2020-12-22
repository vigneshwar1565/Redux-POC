import React from 'react'
import '../../index.css'
//Import useDispatch hook to dispatch action to the reducer
import { useDispatch } from 'react-redux'
//Import increment action 
import { increment } from '../../actions/actions'


const component1 =()=>{
    
    const dispatch = useDispatch();
    //Set onClick event of button to dispatch increment action to reducer
    return (<button className='component'
                    onClick={()=>dispatch(increment())}>
            Counter 1
            </button>
    )}

export default component1