import "./App.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import UserList from './components/UserList';


function App() {


  return (
    <div className="App">
  <UserList/>
      
    </div>
  );
}

export default App;
