import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate} from "react-router-dom"

const PerItem = () => {
  const [items, setitems] = useState(null)
  const navigate = useNavigate();
  let { id } = useParams()
  const API_URL = `https://jsonplaceholder.typicode.com/todos/${id}`

  useEffect(() => {
    fetchData().then((data) => {  
      setitems(data);
    })
  },[])
  const fetchData = async() => {
    const data = await fetch(API_URL)
    return data.json()
  }
  
  return (
    <main>
      <table className="perItems">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{items && items.userId}</td>
            <td>{items && items.id}</td>
            <td>{items && items.title}</td>
            <td>{JSON.stringify(items && items.completed)}</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default PerItem