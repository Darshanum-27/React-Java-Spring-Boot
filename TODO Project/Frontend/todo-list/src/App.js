import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import GetAll from './Components/GetAll';
import AddTask from './Components/AddTask';

function App() {
  return (
    <div>
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="/getAll" element={<GetAll />} />
            <Route path="/addTask" element={<AddTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
