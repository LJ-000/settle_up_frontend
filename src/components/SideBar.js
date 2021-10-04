import { Component } from "react"

class SideBar extends Component {

        render() {
          const sideBar = this.props.isOpen ? "sidebar open" : "sidebar";
          return (
            <div className={sideBar}>
              <br></br>
              <div className="navbar_1">Home</div>
              <br></br>
              <div className="navbar_1">Login</div>
              <br></br>
              <div className="navbar_1">Sign Up</div>
              <button onClick={this.props.toggleSidebar} className="sidebar_toggle">=</button>
            </div>
          );
        }
      }

export default SideBar;