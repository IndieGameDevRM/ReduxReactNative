import Counter from './scr/Component/Counter';
import React, { Component } from 'react'
import {createStore} from 'react-redux'
import { Provider } from 'react-redux';

const initialState = {
  counter:0
}

const reducer = (state=initialState,action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return { counter:state.counter+1} 
    case 'DECREASE_COUNTER':
      return { counter:state.counter-1}  
  }
  return state
}
const store  = createStore(reducer)
class App extends Component {



  render() {
    return (
      <Provider store = {store}>
        <Counter/>
      </Provider>
     
    )
  }
}

export default App



