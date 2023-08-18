import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/proposals' element={<Proposals />} />
        <Route path='/token-management' element={<TokenManagement />} />
        <Route path='/governance' element={<Governance />} />
      </Routes>
    </div>
  );
}

export default App;
