import React from 'react';

const colours = ["#ffd847", "#e0a106", "#ff47ab", "#e0064e", "#add9c0", "#1da890", "#cbd9ad", "#7ca81d", "#d9c1ad", "#714511"];

const ChartData = ({data}) => {

  const height = 600;
  const width = 1000;
 
const { Countries } = data;

const getColour = () => colours[Math.floor(Math.random() * colours.length)];

const sortData = (data) => {
    const sortedData = Countries.sort((a, b) => b.Population - a.Population);
    // console.log(sortedData);
      return sortedData;
  }

  const Chart = ({children, height, width}) => {
    return (
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        {children}
      </svg>
    );
  };

  const Bar = ({x, y, height, width, label, figure}) => (
    <g>
      <style>
        {`
        .label {
          left: 0;
          posation: absolute;
        }
        `}
      </style>
      <text x={0} y={y} className="label">{label}</text>
      <rect x={100} y={y} height={height} width={width} fill={getColour()} />
      <text x={900} y={y} className="figure">{figure}</text>
    </g>
  );
  
  // const greatestValue = values => Math.max(...values);


  const BarChart = ({data}) => {
    const barMargin = 5;
    const barHeight = 20;
    // const barWidth = Math.floor(Population / 100000);
    const sortedData = sortData(data);

    return (
      <Chart height={height} width={width}>
        {sortedData.map((country, index) => {
          const barWidth = 800 * (country.Population/100000);
          const y = index * (width / sortedData.length);
          const x = height - barMargin - barHeight;
          const label = country.Country;
          const figure = country.Population;
          return <Bar x={x} y={y} height={barHeight} width={barWidth} label={label} figure={figure} />;
        }
        )}
      </Chart>
    );
  };


  return (
    <BarChart />
  )
}

export default ChartData;