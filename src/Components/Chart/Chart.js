import ChartBar from './ChartBar';
import './Chart.css';

const chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //Transforming datapoint objects to numbers array
    const totalMaximum = Math.max(...dataPointValues)
    //Finding the maximum among all the numbers

    return (<div className='chart'>
        {props.dataPoints.map(dataPoint => (
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label}
        />
        ))}
    </div>)
};

export default chart;