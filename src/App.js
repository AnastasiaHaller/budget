import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
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
    }
  ]

  const addCostHandler = (cost) => {

    console.log('cost');
    console.log('We are in app');
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>      
    </div>
  );
}

export default App;
