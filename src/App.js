import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';
import ChartData from './ChartData';
import populationData from './generated.json';

function App() {
  const [currentYear, setCurrentYear] = useState(1990);
  const [currentData, setCurrentData] = useState({});

  const previousYear = () =>{
    let tempYear;
    if (currentYear > 1990 ) {
      tempYear = currentYear - 1;
      setCurrentYear(tempYear);
    }
    return
  }
  
  const nextYear = () => {
    let tempYear;
    if (currentYear < 2010) {
      tempYear = currentYear + 1;
      setCurrentYear(tempYear);
    }
    return
  }

  useEffect(() => {
    const yearlyPopulationData = populationData.find(
      (population) => population.Year === currentYear
    );
    setCurrentData(yearlyPopulationData);
  }, [currentYear]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>World Population by year</h1>
        <h2>{currentYear}</h2>
      </header>
      <div className="chart">
        {currentData && <ChartData data={currentData} />}
      </div>
      <Button label="previous year" onClick={previousYear} />
      <Button label="next year" onClick={nextYear} />
    </div>
  );
}

export default App;


      
        