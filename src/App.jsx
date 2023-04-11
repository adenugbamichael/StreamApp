import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const PageOne = () => {
  return <div>PageOne</div>
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<PageOne />} />
        <Route path='/pagetwo' element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
