import Card from "./components/card";
function App() {
  return (
    <div className='h-screen bg-gray-800 flex justify-center items-center'>
      <Card name={"Jules Wyvern"} days = {3} eth_amt={0.041}/>
    </div>

  );
}

export default App;
