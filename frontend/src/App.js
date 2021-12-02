import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useState } from "react";
import "./App.css";
import AddItem from './components/AddItem';

function App() {

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([item, ...items])
  }

  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography varint="h6" color="inherited">Shopping List</Typography>
        </Toolbar>
      </AppBar>
      <AddItem addItem = {addItem}/>
    </div>
  );
}

export default App;
