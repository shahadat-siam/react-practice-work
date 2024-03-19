import "./App.css";
import LineChart from "./Component/LineChart/LineChart";
import Navbar from "./Component/Navbar/Navbar";
import Priceoptions from "./Component/Priceoptions/Priceoptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Priceoptions></Priceoptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;
