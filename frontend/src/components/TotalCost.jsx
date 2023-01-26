import React from 'react';

const TotalCost = ({usages}) => {
  // Initialize total cost to 0
  let totalCost = 0;
  // Iterate over data array and calculate cost for each data point
  usages.forEach(reading => {
    const powerInKW = reading.power;
    const cost = powerInKW * 0.44;
    totalCost += cost;
    console.log(totalCost)
  });

  return (
    <div>
      <p>Total cost: £{totalCost.toFixed(2)}</p>
    </div>
  );
};

export default TotalCost;
