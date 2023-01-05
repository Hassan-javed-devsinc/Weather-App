import "./App.css";
import Wrapper from "./Wrapper";
import Nav from "./Nav";
function App() {
  
  return (
    <div className="App">
      <Nav />
      <Wrapper />
    </div>
  );
}

export default App;

// http://api.weatherapi.com/v1/forecast.json?key=9784c73bde0e49c9bbd110143230101&q=${location}&days=1&aqi=no&alerts=no
// `http://api.weatherapi.com/v1/search.json?key=8ee53963ade9438795b81226230201&q=${location}`;
