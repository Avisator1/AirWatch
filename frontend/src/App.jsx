import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Universal/Navbar';
import About from './About';
import ReferencePage from './Reference';
import Gases from './Gases';

const App = () => {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/credits" element={<ReferencePage/>} />
          <Route path="/gases" element={<Gases/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
