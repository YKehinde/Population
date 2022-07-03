import React from 'react';

const colours = ["#ffd847", "#e0a106", "#ff47ab", "#e0064e", "#add9c0", "#1da890", "#cbd9ad", "#7ca81d", "#d9c1ad", "#714511"];

const ChartData = ({data}) => {

  const height = 600;
  const width = 600;
  const barMargin = 5;
  // const barWidth = Math.floor(Population / 100000);
  const barHeight = 20;
 
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

  const Bar = ({x, y, width, label, figure}) => (
    <>
      <text x={0} y={y}>{label}</text>
      <rect x={x} y={y} height={barHeight} width={width} fill={getColour()} />
      <text x={`100%`} y={y}>{figure}</text>
    </>
  );

  return (
    <Chart height={height} width={width}>
      {data && sortData(data).slice(0, 10).map((country, i) => (
          <Bar key={i} x={0} y={i * (barHeight + barMargin)} height={barHeight} width={100} label={country.Country} figure={country.Population} />
      ))}
    </Chart>
  )
}

export default ChartData;