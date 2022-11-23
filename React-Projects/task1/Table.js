import React from 'react'
import Row from './Row'
// import { useTable } from 'react-table'
const Table = ({ items }) => {
  return (
    <div className="table-container"> 
      {items.length > 0 ?
       ( <table>
          <thead>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </thead>
        <tbody> 
            {items.map((item) => (
              <Row key={item.id} item={item} />
            ))}  
          </tbody>
        </table>) : 
        <h1 style={{color: "crimson"}}>No data found</h1>     }  
    </div>
  )
}

export default Table