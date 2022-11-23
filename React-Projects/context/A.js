import { useContext } from "react"
import B from "./B"
import { Num } from "./App"
export default function A() {
  const { data, handleOnClick } = useContext(Num)
  return (
    <>
      <div className="center">
        <button className="btn" onClick={handleOnClick}>
          click me
        </button>
      </div>
    </>
  )
}
