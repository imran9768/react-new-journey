import React from 'react'

const Header = (props) => {
  const { heading } = props;
  return (
    <header className="main-layout">
      <h1>{heading}</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header