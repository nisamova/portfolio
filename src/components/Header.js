import React from "react"
import "./Header.css"

export const Header = () => {
  return (
    <header className="header_main">
      <nav className="header_nav">
        <div className="header_logo">
          <a href="/"> Nazokat Isamova </a>
        </div>
        <div className="header_nav_items">
          <ul>
            <li>
              <a href="/">Articles </a>
            </li>
            <li>
              <a href="/"> Work</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
