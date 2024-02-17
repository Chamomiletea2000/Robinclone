import React from 'react'
import {Line} from 'react-chartjs-2'

function LineGraph() {
    const dataset = {
        datasets: [
            {
                type: "line",
                data: [
                    { x: 10, y: 20 },
                    { x: 15, y: 10 }
                ]
            }
        ]
    };
    return (
    <div className="linegraph">
        <Line data={dataset} />
    </div>
  );
}

export default LineGraph