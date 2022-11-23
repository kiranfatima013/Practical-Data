import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <nav className="navSetting">
        <ul>
          <li>
            <Link to="/" style={{ color: "crimson" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/todos" style={{ color: "crimson" }}>
              Todos
            </Link>
          </li>
        </ul>
      </nav>
      <div className="navSetting">
        <h1>Fetch Api Data Through<br/> React Js</h1>
      </div>
    </>
  )
}

export default Home