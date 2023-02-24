import {Line } from "react-chartjs-2"
import 'chart.js/auto';
import { React, Component } from "react"

class LineChartComponent extends Component {
    render() {
        return (
            <>
                <div className="lineGraphDiv">

                <Line data={{
                        labels: ['Jan','Feb',"Mar","Apr","May","June"],
                        datasets: [{
                            label:"No. of Visitors",
                            data: [56,48,68,89,34,67],
                            backgroundColor: ["#007fff","#000080","#0067a5"],
                            borderWidth: 3,
                        }]

                    }}
                        options={{
                            scales: {
                                y: {
                                    beginAtZero: true
                                },
                                x: {
                                    beginAtZero:true
                                }
                            }
                        }}
                    height={200}
                    width={300}
                />

                </div>
            </>
        )
    }

}

export default LineChartComponent;