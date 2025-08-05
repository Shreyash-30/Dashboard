import React from 'react'
import Card from './Components/Card'
import UsersIcon from './assets/users-svgrepo-com.svg'
import BoxIcon from './assets/box-svgrepo-com.svg'
import Target from './Components/Target'
import LineChart from './Components/LineChart'
import Orders from './Components/Orders'
import Map from './Components/Map'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] items-start p-6">
      {/* Top Grid Layout */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card svg={UsersIcon} title="Customers" />
        <Card svg={BoxIcon} title="Orders" />

        {/* Target Component */}
        <div className="row-span-2 h-full">
          <Target />
        </div>

        {/* Line Chart Component */}
        <div className="col-span-1 sm:col-span-2">
          <LineChart />
        </div>
      </div>

      {/* Map and Orders Section */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row  mt-10">
        <div className="flex-1">
          <Map />
        </div>
        <div className="flex-none">
          <Orders />
        </div>
      </div>
    </div>
  )
}

export default App
