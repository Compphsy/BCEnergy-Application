import React from 'react';

const TotalCost = ({usages}) => {
  // Initialize total cost to 0
  let totalCost = 0;
  console.log("the usages are:")
  console.log(usages)
  // Iterate over data array and calculate cost for each data point
  usages.forEach(reading => {
    const powerInKW = reading.power;
    console.log("the power in KW is:")
    console.log(powerInKW)
    const cost = powerInKW * 0.44;
    console.log("the cost is:")
    console.log(cost)
    totalCost += cost;
    console.log("the total cost is:")
    console.log(totalCost)
  });

  return (
    <div>
      <p>Total cost: £{totalCost.toFixed(2)}</p>
    </div>
  );
};

export default TotalCost;
