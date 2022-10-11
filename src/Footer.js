import React from 'react'

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p>BR&#x2200;ND Copyright &copy; { today.getFullYear()}</p>
    </footer>
  )
} 

export default Footer