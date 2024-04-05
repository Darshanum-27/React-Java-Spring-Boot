import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import GetAll from './Components/GetAll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/getAll" element={<GetAll />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
