import React from 'react'
import Component1 from './component/Component1/Component1'
import Component2 from './component/Component2/Component2'
import './index.css'
//Import useSelector hook to get state from store
import { useSelector } from 'react-redux'

const app = ()=>{
    //Get count property of the state from store
    const count = useSelector(state => state.count)

return (<div className='app'>
        <div className='count'>{count}</div>
        <Component1/>
        <Component2/>
    </div>)
}


export default app 