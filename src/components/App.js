import React from 'react'
import './App.css'
import Header from './Header'
import FlatDetails from './FlatDetails'
import RenterList from './RenterList'

export default function App(){
    return (
      <div>
        <Header/>
        <div className="width-70 page-center">
          <FlatDetails/>
          <hr/>
          <RenterList/>
        </div>
      </div>
    )
}