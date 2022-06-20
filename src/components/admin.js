import { React, Component } from "react";
import "../App.css"


class Admin extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <span className="logo">Company Name</span>
                    <i class="fa fa-search" aria-hidden="true"></i>

                    <input type="text" className="searchBar" placeholder="Search here" />
                </div>
                <div className="sideBar">
                    <span className="link"><i className="fa fa-home" aria-hidden="true"></i> Dashboard</span>
                    <span className="link"><i className="fa fa-users" aria-hidden="true"></i> Customer</span>
                    <span className="link"><i className="fa fa-comment" aria-hidden="true"></i> Message</span>
                    <span className="link"><i className="fa fa-question" aria-hidden="true"></i> Help</span>
                    <span className="link"><i className="fa fa-cog" aria-hidden="true"></i> Settings</span>
                    <span className="link"><i className="fa fa-lock" aria-hidden="true"></i> Password</span>
                    <span className="link"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign Out</span>
                </div>
            </>
        )
    }
}




export default Admin;
