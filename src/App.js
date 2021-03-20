import { createContext,useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Destination from "./components/Destination/Destination";
import Home from './components/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import LogIn from './LogIn/LogIn';
import fakeData from '../src/fakedata/fakeDataVehicale';

export const UserContext = createContext();
function App() {
  const [loogedInUser,setLoggedInUser] = useState({});
  const [vehicaleData,setVehicaleData] = useState([]);
  useEffect(()=>{
    setVehicaleData(fakeData);
  },[]);
  console.log(vehicaleData);
  
  return (
    <UserContext.Provider value={[loogedInUser,setLoggedInUser,vehicaleData]}>
      {/* {
       vehicaleData.map(vehicaleData=>setVehicaleData(vehicaleData))
      } */}
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
          <LogIn></LogIn>
          </Route>
          <PrivateRouter path="/destination">
            <Destination></Destination>
          </PrivateRouter>
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
