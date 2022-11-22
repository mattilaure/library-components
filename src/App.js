import "./App.css";
import Home from "./components/home/Home";

function App() {
  const click = () => {
    console.log("click");
  };

  const print = (e) => {
    console.log(e);
  };

  return (
  
  <div className="App">
    <Home />
  </div>
  )
}

export default App;
