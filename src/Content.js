import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Dan', 'Jenny', 'Lloyd']
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  
  return (
    <main>
            <p>Welcome <b>{handleNameChange()}</b>, to your personal Dashboard</p>
    </main>
  )
}

export default Content