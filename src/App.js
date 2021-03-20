import { createContext,useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import LogIn from './LogIn/LogIn';

export const UserContext = createContext();
function App() {
  const [loogedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loogedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
          <LogIn></LogIn>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
