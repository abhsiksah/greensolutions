import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homelayout from "./pages/homeLayout/Homelayout";
import Table from "./pages/form-and-table/Table";
import { Form } from "./pages/form-and-table/Form";
import Login from "./pages/login/login";
import Analytics from "./components/analytics/Analytics";
import ProductionOverTime from "./components/graphs/ProductionOverTime";
import TotalElectricityGen from "./components/graphs/TotalElectricityGen";
import ElectricityConsumtion from "./components/graphs/ElectricityConsumtion";
import NetElectricityPeriod from "./components/graphs/NetElectricityPeriod";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="/POT" element={<ProductionOverTime />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/TEG" element={<TotalElectricityGen />} />
          <Route path="/NEP" element={<NetElectricityPeriod />} />
          <Route path="/ECONSUM" element={<ElectricityConsumtion />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
