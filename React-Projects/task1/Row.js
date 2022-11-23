import React from "react"
import { Link } from "react-router-dom"
const Row = ({ item }) => {
  return (
    <>
      <tr>
        <td>{item.userId}</td>
        <td>{item.id}</td>
        <td>
          <Link to={`${item.id}`} style={{color:"crimson"}}>{item.title}</Link>
        </td>
        <td>{item.completed.toString()}</td>
      </tr>
    </>
  )
}

export default Row
