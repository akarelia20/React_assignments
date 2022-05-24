import React from 'react'

const Tab = props => {
  const { activeTab, setActiveTab, allTabs } = props

  const tabStyle = index => {
    if (index === activeTab) {
      return 'Blue'
    } else {
      return 'not-selected'
    }
  }

  return (
    <div>
      {allTabs.map((item, index) => (
        <button className={tabStyle(index)} onClick={e => setActiveTab(index)}>
          {' '}
          {item.title}
        </button>
      ))}
      <div className='display-content'>{allTabs[activeTab].content}</div>
    </div>
  )
}

export default Tab
