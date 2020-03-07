import React from "react";
import "./App.css";

import Header from "./Header";
import Form from "./Form";
import Autocomplete from "./Autocomplete";
import Quote from "./Quote";
import Image from "./Image";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Autocomplete />
      <Quote />
      <Image />
    </div>
  );
}

export default App;
