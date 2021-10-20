import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Transactions from './components/Transactions';
import SplitTransactions from './components/SplitTransactions';
import PayBill from './components/PayBill';
import { Component } from 'react';
import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  };

  componentDidMount() {
    this.loginStatus()
  }
  loginStatus = () => {
      axios.get('http://localhost:3001/login', 
      {withCredentials: true})    
  .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }
  

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
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

            <Route exact path={["/signup"]}>
                <SignUp/>
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
}

export default App;
