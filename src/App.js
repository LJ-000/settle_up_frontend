import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';
import Home from './components/Home';
import Login from './components/Login';
import Transactions from './components/Transactions';
import SplitTransactions from './components/SplitTransactions';
import PayBill from './components/PayBill';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <SideDrawer/>

          <Switch>

            <Route exact path={["/", "/home"]}>
                <Home />
            </Route>

            <Route exact path={["/login"]}>
                <Login/>
            </Route> 

            <Route exact path={["/transactions"]}>
                <Transactions/>
            </Route> 

            <Route exact path={["/split_transactions"]}>
                <SplitTransactions/>
            </Route> 

            <Route exact path={["/pay"]}>
                <PayBill/>
            </Route> 

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
