import { React, Component } from "react";
import "../App.css"
import BarComponent from "./barChart";
import LineChartComponent from "./lineChart";
import PieComponent from "./polarChart";


class Admin extends Component {
    render() {
        return (
            <>
                <div className="tileBox">
                    <div className="tile">
                        <span> 14576</span><br/>
                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                        <h3>Daily views</h3>

                    </div>
                    <div className="tile">
                    <span> 57</span><br/>
                        <span><i className="fa fa-comment" aria-hidden="true"></i></span>
                        <h3>Comments</h3>

                    </div>
                    <div className="tile">
                    <span> 139</span><br/>
                        <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                        <h3>Sales</h3>

                    </div>
                    <div className="tile">
                    <span> $24567</span><br/>
                        <span><i className="fa fa-money" aria-hidden="true"></i></span>
                        <h3>Earnings</h3>

                    </div>
                </div>
                <h1 style={{textAlign:"center",color:"#007fff"}}>Sales and Engagement Charts</h1><hr></hr>
                <div className="charts">
                <BarComponent />
                <PieComponent />
                <LineChartComponent />
                </div>
            </>
        )
    }
}




export default Admin;
