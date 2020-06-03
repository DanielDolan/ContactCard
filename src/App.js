import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="Daniel React"
          mobile="2125555555"
          work="8002222222"
          email="danielreact@gmail.com"
        />
        <ContactCard
          name="Jon"
          mobile="7185555555"
          work="7182222222"
          email="jonreact@gmail.com"
        />
        <ContactCard
          name="Andrew"
          mobile="3475555555"
          work="5552222222"
          email="andrewexample.com"
        />
      </>
    );
  }
}

export default App;