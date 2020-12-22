import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducers/counter'


//Create store using createStore method with passing reducer as 1st parameter and initial state as 2nd parameter
//The third parameter is for redux dev tools and it is optional
const intialState = {count: 0}
const store = createStore(counterReducer,intialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//Wrap App component with Provider HOC to connect store to the App
ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector('#root'));
 