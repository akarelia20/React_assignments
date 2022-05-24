import logo from './logo.svg'
import React, { useState } from 'react'
import './App.css'
import Tab from './component/Tabs'

function App () {
  const tabContent = [
    { title: 'Tab 1', content: 'Tab 1 content is showing here!' },
    { title: 'Tab 2', content: 'Tab 2 content is showing here!' },
    { title: 'Tab 3', content: 'Tab 3 content is showing here!' }
  ]
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='App'>
      <Tab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        allTabs={tabContent}
      />
    </div>
  )
}

export default App
