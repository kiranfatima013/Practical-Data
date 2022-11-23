import { createContext, useState } from "react"
import "./index.css"
import Container from "./Container"
export const Num = createContext()

function App() {
  const [data, setData] = useState(0)
  const handleOnClick = () => {
    setData(data + 1)
  }
  return (
    <Num.Provider value={{ data: data, handleOnClick: handleOnClick }}>
     <Container />
    </Num.Provider>
  )
}

export default App
