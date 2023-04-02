import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homelayout from "./pages/homeLayout/Homelayout";
import Table from "./pages/form-and-table/Table";
import { Form } from "./pages/form-and-table/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="/table" element={<Table />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
