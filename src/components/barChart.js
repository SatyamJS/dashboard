import { Bar} from "react-chartjs-2"
import 'chart.js/auto';
import { React, Component } from "react"

class BarComponent extends Component {
    render() {
        return (
            <>
                <div className="barGraphDiv">

                    <Bar data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                        datasets: [{
                            label: "No. of Sales",
                            data: [120, 191, 134, 165,142,103],
                            backgroundColor: ["#2B65EC","#2B65EC","#2B65EC","#2B65EC","#2B65EC","#2B65EC"],
                            borderWidth: 1,
                        }]

                    }}
                        options={{
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }}
                    />

                </div>
            </>
        )
    }

}

export default BarComponent;