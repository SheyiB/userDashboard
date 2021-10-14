import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'],
                datasets: [
                    {
                        label: 'none',
                        data: [
                            12,22,21,22,29,36,21,22,27
                        ],
                        backgroundColor:[
                            'red',
                            'orange',
                            'yellow',
                            'green',
                            'blue',
                            'indigo',
                            'violet',
                            'skyblue',
                            'tomato'
                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: false,
    
    }
    render(){
        return(
            <div className="chart">
                <Line
                data={this.state.chartData}
                width={100}
                height={50}
                options={{
                   title:{
                       display: this.props.displayTitle
                   }
                }}
                />
            </div>
        )
    }
}

export default Chart;