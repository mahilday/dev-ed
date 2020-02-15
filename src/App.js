import React, {Component} from 'react';
// import logo from './assets/logo.svg';
import HomePage from './homepage'
import './App.css';
import imageLoader from './images'

import { Route } from 'react-router-dom';
// import { Link } from "react-router-dom"


class App extends Component {
  state={
    images:[]
  }
  componentDidMount() {
    const images = imageLoader
    this.setState({images})
  }
  
render(){
  
  return (
<div className="App">
<Route exact path='/' render={()=>(
<HomePage images={this.state.images}/>
)}/>
</div>
  
  )
}
}
  
export default App;
