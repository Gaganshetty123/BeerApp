import './App.css';
import BeerList from './component/BeerList';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='contain'style={{backgroundColor:"#DADFEA"}}>
        <BeerList/>
        </div>
    )
  }
}

