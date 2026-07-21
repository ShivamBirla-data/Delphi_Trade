import React from 'react'
import WatchList from './WatchList'
import Summary from './Summary'
import Orders from './Orders'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import App from './App'
import { Route, Routes } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <WatchList />
      <div className='content'>
        <Routes>
            <Route path='/' element={ <Summary />} />
             <Route path='/orders' element={ <Orders />} />
              <Route path='/holdings' element={ <Holdings />} />
               <Route path='/positions' element={ <Positions />} />
                <Route path='/funds' element={ <Funds />} />
                 <Route path='/apps' element={ <App />} />
        </Routes>
      </div>1
    </div>
  )
}

export default Dashboard
