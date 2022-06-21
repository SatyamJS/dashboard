import { PolarArea } from "react-chartjs-2"
import 'chart.js/auto';
import { React, Component } from "react"

class PieComponent extends Component {
    render() {
        return (
            <>
                <div className="pieGraphDiv">

                    <PolarArea data={{
                        labels: ['visitor','sales',"comment"],
                        datasets: [{
                            label: "No. of Sales",
                            data: [100,48,68],
                            backgroundColor: ["#007fff","#000080","#0067a5"],
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
                    height={200}
                    width={400}
                    />

                </div>
            </>
        )
    }

}

export default PieComponent;