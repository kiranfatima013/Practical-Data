import "./App.css"
import { useState, useEffect } from "react"
import Form from "./Form"
import { Route, Routes } from "react-router-dom"
import PerItem from "./PerItem"
import Table from "./Table"
import Home from "./Home"

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/todos";
  const [items, setItems] = useState([])
  const [newItems, setNewItems] = useState([])
  const [search, setSearch] = useState("")
  // const [errMsg, setErrMSg] = useState('')
  // setErrMSg('No data found');

  const onSearchHandeler = () => {
     const filteredResults = items.filter((item) =>
       item.title.toLowerCase().includes(search.toLowerCase())
     )
   
setNewItems(filteredResults)
  }

  useEffect(() => {
    onSearchHandeler();
  }, [search])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json()
        setItems(data)
        setNewItems(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems()
  }, [])

  const handleCheckTrue = () => {
    setNewItems(items.filter((item) => item.completed === true))
  }
  const handleCheckFalse = () => {
    setNewItems(items.filter((item) => item.completed === false))
  }

  const handleCheckAll = () => {
    setNewItems(items.filter((item) => item))
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <>
              <Form
                handleCheckTrue={handleCheckTrue}
                handleCheckFalse={handleCheckFalse}
                handleCheckAll={handleCheckAll}
                setSearch={setSearch}
              />
              <Table
                items={newItems}
              />
            </>
          }
        />
        <Route path="/todos/:id" element={<PerItem />} />
      </Routes>
    </div>
  )
}

export default App
