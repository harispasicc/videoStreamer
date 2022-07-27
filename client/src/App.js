import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamList from "./components/StreamList";
import StreamCreate from "./components/StreamCreate";
import StreamEdit from "./components/StreamEdit";
import StreamDelete from "./components/StreamDelete";
import StreamShow from "./components/StreamShow";
import Header from "./components/Header";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/new" exact element={<StreamCreate />} />
          <Route path="/streams/edit/:id" exact element={<StreamEdit />} />
          <Route path="/streams/delete/:id" exact element={<StreamDelete />} />
          <Route path="/streams/:id" exact element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
