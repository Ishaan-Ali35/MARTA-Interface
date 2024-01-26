import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import LinesPage from './pages/LinesPage';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={'about'} element={<About />} />
                <Route path={'lines'}>
                    <Route path=":lineColor" element={<LinesPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
