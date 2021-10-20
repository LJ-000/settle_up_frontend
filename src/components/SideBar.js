import { Component } from "react"
import {Link} from 'react-router-dom'


class SideBar extends Component {

    render() {
        const sideBar = this.props.isOpen ? "sidebar open" : "sidebar";
        return (
          <div className={sideBar}> <br></br>
            <div>
            <Link className = "navbar_1" to="/home" href="home">Home</Link>
            </div> <br></br>
            <div>
            <Link className = "navbar_1" to="/login" href="login">Login</Link>
            </div> <br></br>
            <div>
            <Link className = "navbar_1" to="/signup" href="signup">Sign Up</Link>
            </div>
            
            <button onClick={this.props.toggleSidebar} className="sidebar_toggle">=</button>
          </div>
        );
      }
    }

export default SideBar;
