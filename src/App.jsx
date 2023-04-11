import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StreamList from "./components/streams/StreamList"
import StreamShow from "./components/streams/StreamShow"
import StreamEdit from "./components/streams/StreamEdit"
import StreamCreate from "./components/streams/StreamCreate"
import StreamDelete from "./components/streams/StreamDelete"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<StreamList />} />
        <Route path='/streams/show' exact element={<StreamShow />} />
        <Route path='/streams/edit' exact element={<StreamEdit />} />
        <Route path='/streams/new' exact element={<StreamCreate />} />
        <Route path='/streams/delete' exact element={<StreamDelete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
