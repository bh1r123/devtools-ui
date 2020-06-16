import React from 'react';
import logo from './logo.svg';
import './App.css';
import DevToolsTable from './devtoolsTable/DevToolsTable';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateMessage from './devtoolsCreate/CreateMessage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewMessage from './viewmessges/ViewMessage';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Dev Tools
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
        <Route exact path="/">
          <DevToolsTable />
        </Route>
        <Route exact path="/create">
          <CreateMessage />
        </Route>
        <Route exact path="/create">
          <CreateMessage />
        </Route>
          <Route exact path="/messages/:id/edit" children={<CreateMessage/>}/>
        <Route exact path="/messages/:id" children={<ViewMessage/>}/>
      </Switch>
    </Router>
  );
}

export default App;
