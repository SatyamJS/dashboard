import { React, Component } from "react"
import { Link } from "react-router-dom"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            links: false,
        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }
    handleMenuClick(event) {
        this.setState((state) => ({
            menu: !state.menu,
            links: !state.links,
        }))
    }
    render() {
        return (
            <>
                <div className="header">
                    <span className="logo">Company Name</span>
                    <div className="menu" onClick={this.handleMenuClick}>
                        <span class="menuBar"></span>
                        <span class="menuBar"></span>
                        <span class="menuBar"></span>
                    </div>
                    <i class="fa fa-search" aria-hidden="true"></i>

                    <input type="text" className="searchBar" placeholder="Search here" />
                    <img className="adminImage" src="./admin.jpg" alt="admin" />
                </div>

                <div className={this.state.menu ? "sideBar" : "sideBarIcons"}>
                    <Link to="/" style={{ textDecoration: "none" }} > <div className="linkDiv" onClick={this.handleMenuClick}><i className="fa fa-home faLeft" aria-hidden="true"> </i><span className={this.state.links ? "" : "hide"}> Dashboard</span></div></Link>

                    <Link to="/customers" style={{ textDecoration: "none" }} > <div className="linkDiv"  onClick={this.handleMenuClick}><i className="fa fa-users faLeft" aria-hidden="true"> </i><span className={this.state.links ? "" : "hide"}> Customer</span></div></Link>

                    <Link to="/messages" style={{textDecoration:'none'}}>  <div className="linkDiv"  onClick={this.handleMenuClick}><i className="fa fa-comment faLeft" aria-hidden="true"> </i><span className={this.state.links ? "" : "hide"}> Messages</span></div></Link>

                    <Link to="/settings" style={{ textDecoration: "none" }}> <div className="linkDiv"  onClick={this.handleMenuClick}><i className="fa fa-cog faLeft" aria-hidden="true"> </i><span className={this.state.links ? "" : "hide"}> Settings</span></div></Link>

                    <Link to="/help" style={{ textDecoration: "none" }}>   <div className="linkDiv"  onClick={this.handleMenuClick}><i className="fa fa-question faLeft" aria-hidden="true"> </i><span className={this.state.links ? "" : "hide"}> Help</span></div></Link>

                    <Link to="/password" style={{ textDecoration: "none" }}>  <div className="linkDiv"  onClick={this.handleMenuClick}><i className="fa fa-lock faLeft" aria-hidden="true"> </i><span className={this.state.links ? "" : "hide"}> Password</span></div></Link>

                    <Link to="/signout" style={{ textDecoration: "none" }}>   <div className="linkDiv"  onClick={this.handleMenuClick}><i className="fa fa-sign-out  faLeft" aria-hidden="true"> </i><span className={this.state.links ? "" : "hide"}> Sign Out</span></div></Link>


                </div>
            </>
        )
    }
}

export default Navbar;