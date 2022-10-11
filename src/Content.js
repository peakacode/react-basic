import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Dan', 'Jenny', 'Lloyd']
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleClick = () => {
    console.log('You clicked it')
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }

  const handleClick3 = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>Welcome {handleNameChange()}, to your Dashboard</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Dan')}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content