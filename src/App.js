import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Fridge',
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amount: 1275.72
    },
    {
      date: new Date(2021, 4, 1),
      description: 'Jeans',
      amount: 49.99
    }
  ]

  return (
    <div>
      <h1>Let's start with React</h1>
      <Costs costs={costs}/>      
    </div>
  );
}

export default App;
