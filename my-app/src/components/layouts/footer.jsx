import React from 'react'

const Footer = (props) => {
  const { year } = props;
  return (
    <footer className="footer">
      <p>&copy; {year} My App. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer