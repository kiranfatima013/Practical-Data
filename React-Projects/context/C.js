import React, { useContext } from "react";
import { Num } from "./App";
export default function C() {
const { data, handleOnClick } = useContext(Num)
  console.log(data, 'data')
  return (
    <>
      <div className="c">
        <div className="field">{ data }</div>
      </div>
    </>
  )
}

