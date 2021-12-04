import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import "./App.css";
import Contact from './components/Contact';
import Home from './components/Home';
import AddItem from './components/AddItem';

function App() {

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([item, ...items])
  }

  const listItems = items.map((item, index) =>
    <ListItem key={index}>
      <ListItemText primary={item.product} secondary={item.amount} />
    </ListItem>
  );

  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography varint="h6" color="inherited">Shopping List</Typography>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/links">Links</Link>{' '}
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/links" render={() => <h1>Links</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
        </Toolbar>
      </AppBar>
      <AddItem addItem={addItem} />
      <List>{listItems}</List>
    </div>
  );
}

export default App;
