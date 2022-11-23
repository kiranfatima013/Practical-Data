import React from "react"
import { Link } from "react-router-dom"
const Form = ({ handleCheckTrue, handleCheckFalse, items , setSearch, handleCheckAll}) => {
 
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <div className="radioButton">
        <input
          type="radio"
          value="true"
          name="checkBoolen"
          onChange={handleCheckTrue}
        />
        <label htmlFor="true">True</label>
        <input
          type="radio"
          value="false"
          name="checkBoolen"
          onChange={handleCheckFalse}
        />
        <label htmlFor="false">False</label>
        <input
          type="radio"
          value="all"
          name="checkBoolen"
          onChange={handleCheckAll}
        />
        <label htmlFor="all">All</label>
        <Link to="/">
          <button className="back">Back to Home</button>
        </Link>
      </div>
      <div className="searchForm">
        <label htmlFor="search">Search Data</label>
        <input
          id="search"
          type="text"
          placeholder="Search Data"
          // value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Form
