import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

import React, { useState } from "react";

const initialCosts = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Fridge',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: 'MacBook',
    amount: 1275.72
  },
  { 
    id: 'c3',
    date: new Date(2021, 4, 1),
    description: 'Jeans',
    amount: 49.99
  },
  { 
    id: 'c4',
    date: new Date(2020, 7, 3),
    description: 'Phone',
    amount: 400
  },
  { 
    id: 'c5',
    date: new Date(2019, 5, 14),
    description: 'Sofa',
    amount: 299.99
  }
]

const App = () => {

  const [costs, setCosts] = useState(initialCosts);
  

  const addCostHandler = (cost) => {

    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>      
    </div>
  );
}

export default App;
